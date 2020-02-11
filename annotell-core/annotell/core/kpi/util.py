from pyspark import SparkContext, SQLContext
from pyspark.ml.feature import Bucketizer

import pyspark.sql.functions as psf
import collections
import numpy as np

KPI_TYPES = ['fraction', 'histogram']


def load_file(spark_context, path):
    sql_context = SQLContext(spark_context)
    return sql_context.read.format("parquet").load(path)


def create_spark_context(session_name, remote='local'):
    return SparkContext(remote, session_name)


def valid_kpi_type(kpiType):
    if kpiType not in KPI_TYPES:
        return False
    else:
        return True


def create_bucketizer(splits, inputCol):
    return Bucketizer(splits=splits,
                      inputCol=inputCol,
                      outputCol="bin")


def count_values_by_bucket(bucketizer, dataFrame):
    return bucketizer.setHandleInvalid("keep").transform(dataFrame)


def create_bins(bin_size, max_distance):
    num_bins = int(max_distance / bin_size + 1)
    return np.linspace(0, max_distance, num=num_bins)


def classification_test(object_list,
                        ground_truth_source,
                        prediction_source):
    """
    A method used to perform a classification test on grouped objects.
    Expects two sources, for ex. DUT and GT.

    Parameters
    ----------
    :param object_list:
    :param prediction_source:
    :param ground_truth_source:
    """

    sources = set(map(lambda x: x['source'], object_list))
    num_matching_objects = len(object_list)

    if num_matching_objects == 1:
        if prediction_source in sources:
            return 'false_positive'
        elif ground_truth_source in sources:
            return 'false_negative'

    if num_matching_objects == 2:
        if prediction_source in sources and ground_truth_source in sources:
            return 'true_positive'
        else:
            return 'bad_matching_output'

    if num_matching_objects >= 3:
        return 'bad_matching_output'

    return 'failed_classification_test'


def valid_result_keys(keys, expected):
    valid = lambda x, y: collections.Counter(keys) == collections.Counter(expected)
    return valid(keys, expected)


def flatten_df(nested_df):
    flat_cols = [c[0] for c in nested_df.dtypes if c[1][:6] != 'struct']
    nested_cols = [c[0] for c in nested_df.dtypes if c[1][:6] == 'struct']
    flat_df = nested_df.select(flat_cols +
                               [psf.col(nc + '.' + c).alias(nc + '_' + c)
                                for nc in nested_cols
                                for c in nested_df.select(nc + '.*').columns])
    return flat_df
