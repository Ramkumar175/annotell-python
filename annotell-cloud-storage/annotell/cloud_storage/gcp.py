import os
import logging
from google.cloud import storage

log = logging.getLogger(__name__)

# Instantiates a client
_storage_client: storage.Client = None


def storage_client() -> storage.Client:
    global _storage_client
    if _storage_client is None:
        credentials = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')
        if not credentials:
            raise RuntimeError("Please point to a service account json file in env GOOGLE_APPLICATION_CREDENTIALS")
        _storage_client = storage.Client()
    return _storage_client


def list_blobs(bucket_name: str):
    """List files in the bucket"""
    # Note: Client.list_blobs requires at least package version 1.17.0.
    blobs = storage_client().list_blobs(bucket_name)

    for blob in blobs:
        print(blob.name)


def upload_blob(bucket_name: str, source_file_name: str, destination_blob_name: str):
    """Uploads a local file to the bucket."""
    bucket = storage_client().bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(source_file_name)

    log.info('File {} uploaded to {}'.format(
        source_file_name,
        destination_blob_name))
