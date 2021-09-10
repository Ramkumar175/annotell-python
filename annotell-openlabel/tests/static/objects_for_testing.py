import uuid

from annotell.openlabel.models.data_types import Boolean, Num, Text, Vec
import annotell.openlabel.models.datamodel as od

# Basic types
text = Text(name="some text", val="some value")
num_int = Num(name="some int", val=1)
num_float = Num(name="some float", val=0.333333)
boolean = Boolean(name="some boolean", val=True)
vec_int = Vec(name="some int vec", val=[0, 1, 5])
vec_float = Vec(name="some float vec", val=[0.35, 1.35446, 5.8656])
vec_mixed = Vec(name="some mixed vec", val=[0, 1, 5.8656])

all_basic_types = [text, num_int, num_float, boolean, vec_int, vec_float, vec_mixed]

# Attributes
attr_text = od.Attributes(text=od.DataTypeList([text]))
attr_num = od.Attributes(num=od.DataTypeList([num_int, num_float]))
attr_bool = od.Attributes(boolean=od.DataTypeList([boolean]))
attr_vec = od.Attributes(vec=od.DataTypeList([vec_int, vec_float, vec_mixed]))
attr_all = od.Attributes(
    text=od.DataTypeList([text]),
    num=od.DataTypeList([num_int, num_float]),
    boolean=od.DataTypeList([boolean]),
    vec=od.DataTypeList([vec_int, vec_float, vec_mixed])
)

all_attributes = [attr_text, attr_num, attr_bool, attr_vec, attr_all]

# Shapes
bbox = od.Bbox(name="a name", val=[1, 34, 54.34, 4], attributes=attr_text)
rbbox = od.Rbbox(name="a name", val=[1, 34, 54.34, 4], attributes=attr_text)
binary = od.Binary(name="a name", val="some binary string", attributes=attr_text)
cuboid = od.Cuboid(name="a name", val=[1, 34, 54.34, 4, 1, 34, 54.34, 4, 1, 34], attributes=attr_text)
image = od.Image(name="a name", val="some encoded image", attributes=attr_text)
mat = od.Mat(name="a name", val=[[1, 34], [4.34, 4]], attributes=attr_text)
point2d = od.Point2d(name="a name", val=[1, 34], attributes=attr_text)
point3d = od.Point3d(name="a name", val=[1, 34, 54.34], attributes=attr_text)
poly2d = od.Poly2d(name="a name", val=[point2d, point2d], attributes=attr_text)
poly3d = od.Poly3d(name="a name", val=[point3d, point3d], attributes=attr_text)
area_reference = od.AreaReference(name="a name", val="some reference to an area", attributes=attr_text)
line_reference = od.LineReference(name="a name", val="some reference to a line", attributes=attr_text)
# mesh = od.Mesh(name="a name", val=[1, 34, 54.34, 4], attributes=attr_text)

all_shapes = [bbox, rbbox, binary, cuboid, image, mat, point2d, point3d, poly2d, poly3d, area_reference, line_reference]

# Object data
object_data_basic = od.ObjectData(text=od.DataTypeList([text]), boolean=od.DataTypeList([boolean]))
object_data_shapes = od.ObjectData(bbox=[bbox], cuboid=[cuboid])
object_data_shapes_list = od.ObjectData(bbox=[bbox], cuboid=[cuboid])
object_data_mix = od.ObjectData(text=od.DataTypeList([text]), bbox=[bbox], poly2d=[poly2d])

all_object_datas = [object_data_basic, object_data_shapes, object_data_shapes_list, object_data_mix]

# Elements
frame_interval = od.FrameInterval(frame_start=0, frame_end=2000)
obj = od.Object(name="a name", type="a type", object_data=object_data_mix, ontology_uid="some ontology", frame_intervals=[frame_interval])
action = od.Action(name="a name", type="a type", frame_intervals=[frame_interval])
context = od.Context(name="a name", type="a type")
event = od.Event(name="a name", type="a type", frame_intervals=[frame_interval])

rdf_object = od.RdfObject(uid=str(uuid.uuid4()), type="object")
rdf_subject = od.RdfSubject(uid=str(uuid.uuid4()), type="object")
relation = od.Relation(name="a name", type="a type", rdf_objects=[rdf_object], rdf_subjects=[rdf_subject])

actions = {str(uuid.uuid4()): action}
contexts = {str(uuid.uuid4()): context}
events = {str(uuid.uuid4()): event}
objects = {str(uuid.uuid4()): obj}
relations = {str(uuid.uuid4()): relation}
elements = od.Elements(actions=actions, contexts=contexts, events=events, objects=objects, relations=relations)

all_element_objects = [frame_interval, obj, action, context, event, rdf_object, rdf_subject, relation, elements]

# Frames
frame_properties = od.FrameProperties(num=od.DataTypeList([Num(name="timestamp", val=100)]))
frame_properties_full = od.FrameProperties(
    num=od.DataTypeList([Num(name="timestamp", val=100)]),
    boolean=od.DataTypeList([Boolean(name="last_frame", val=True)]),
    text=od.DataTypeList([Text(name="parent", val=str(uuid.uuid4()))]),
)
frame = od.Frame(objects=objects, frame_properties=frame_properties)
frame_all = od.Frame(
    actions=actions, contexts=contexts, events=events, objects=objects, relations=relations, frame_properties=frame_properties
)

all_frames = [frame_properties, frame_properties_full, frame, frame_all]

# Top level. TODO: add coordinate system, ontologies and streams when they are implemented
frames = {"0": frame}
metadata = od.Metadata(assignment_id=485735, feedback="blabla")
openlabel_data = od.OpenLabelAnnotation(elements=elements, frames=frames, metadata=metadata)
