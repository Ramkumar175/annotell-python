import annotell.openlabel.models.data_types as dt
import annotell.openlabel.models.datamodel as od

t1 = dt.Text(name="text1", val="value1")
t2 = dt.Text(name="text2", val="value2")

n1 = dt.Num(name="n1", val=1)
n2 = dt.Num(name="n2", val=2)

b1 = dt.Boolean(name="b1", val=True)
b2 = dt.Boolean(name="b2", val=False)

v1 = dt.Vec(name="v1", val=[0, 1, 5])
v2 = dt.Vec(name="v2", val=[0.35, 1.35446, 5.8656])

a1 = od.Attributes(text=od.DataTypeList([t1]), num=od.DataTypeList([n1]), boolean=od.DataTypeList([b1]), vec=od.DataTypeList([v1]))
a2 = od.Attributes(text=od.DataTypeList([t2]), num=od.DataTypeList([n2]), boolean=od.DataTypeList([b2]), vec=od.DataTypeList([v2]))

fi1 = od.FrameInterval(frame_start=0, frame_end=10)
fi2 = od.FrameInterval(frame_start=2, frame_end=12)

bbox1 = od.Bbox(name="bbox1", val=[1, 34, 54.34, 4], attributes=a1)
bbox2 = od.Bbox(name="bbox1", val=[1, 34, 54.34, 4], attributes=a2)

rbbox1 = od.Rbbox(name="rbbox1", val=[1, 34, 54.34, 4], attributes=a1)
rbbox2 = od.Rbbox(name="rbbox2", val=[1, 34, 54.34, 4], attributes=a2)

binary1 = od.Binary(name="binary1", val="some binary string", attributes=a1)
binary2 = od.Binary(name="binary2", val="some binary string", attributes=a2)

cuboid1 = od.Cuboid(name="cuboid1", val=[1, 34, 54.34, 4, 1, 34, 54.34, 4, 1, 34], attributes=a1)
cuboid2 = od.Cuboid(name="cuboid2", val=[1, 34, 54.34, 4, 1, 34, 54.34, 4, 1, 34], attributes=a2)

image1 = od.Image(name="image1", val="some encoded image", attributes=a1)
image2 = od.Image(name="image2", val="some encoded image", attributes=a2)

mat1 = od.Mat(name="mat1", val=[[1, 2], [4, 5]], attributes=a1)
mat2 = od.Mat(name="mat2", val=[[6, 7], [8, 9]], attributes=a2)

point2d1 = od.Point2d(name="point2d1", val=[1, 3], attributes=a1)
point2d2 = od.Point2d(name="point2d2", val=[2, 4], attributes=a2)

point3d1 = od.Point3d(name="point3d1", val=[1, 34, 54.34], attributes=a1)
point3d2 = od.Point3d(name="point3d2", val=[1, 34, 54.34], attributes=a2)

poly2d1 = od.Poly2d(name="poly2d1", val=[point2d1, point2d2], attributes=a1)
poly2d2 = od.Poly2d(name="poly2d2", val=[point2d2, point2d2], attributes=a2)

poly3d1 = od.Poly3d(name="poly3d1", val=[point3d1, point3d2], attributes=a1)
poly3d2 = od.Poly3d(name="poly3d2", val=[point3d1, point3d2], attributes=a2)

area_reference1 = od.AreaReference(name="area_reference1", val="some reference to an area", attributes=a1)
area_reference2 = od.AreaReference(name="area_reference1", val="some reference to an area", attributes=a2)

line_reference1 = od.LineReference(name="line_reference1", val="some reference to a line", attributes=a1)
line_reference2 = od.LineReference(name="line_reference1", val="some reference to a line", attributes=a2)

objd1 = od.ObjectData(text=od.DataTypeList([t1]), boolean=od.DataTypeList([b1]), bbox=[bbox1])
objd2 = od.ObjectData(bbox=[bbox2], cuboid=[cuboid1])


def test_merge_attributes():
    assert a1.merge_with(a2) == od.Attributes(
        text=od.DataTypeList([t1, t2]),
        num=od.DataTypeList([n1, n2]),
        boolean=od.DataTypeList([b1, b2]),
        vec=od.DataTypeList([v1, v2]),
    )


def test_merge_frame_interval():
    assert fi1.merge_with(fi2) == od.FrameInterval(frame_start=0, frame_end=12)


def test_merge_object_data():
    merged_object_data = objd1.merge_with(objd2)
    assert merged_object_data == od.ObjectData(
        text=od.DataTypeList([t1]), boolean=od.DataTypeList([b1]), bbox=[bbox1, bbox2], cuboid=[cuboid1]
    )


def test_datatype_collection():
    dc1 = od.DataTypeList([n1, n2])
    dc2 = od.DataTypeList([t1, t2])
    dc3 = od.DataTypeList([n2, t1])
    dc12 = dc1 + dc2
    assert dc12 == od.DataTypeList([n1, n2, t1, t2])
    dc13 = dc1 + dc3
    assert dc13 == od.DataTypeList([n1, n2, t1])
