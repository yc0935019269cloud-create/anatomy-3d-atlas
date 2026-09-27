import bpy,json,pathlib,base64,array
from mathutils import Vector
root=pathlib.Path('E:/NEWTEST/skull-atlas-3d')
names=['Ethmoid bone','Frontal bone','Inferior nasal concha bone','Lacrimal bone','Mandible','Maxilla','Nasal bone','Occipital bone','Palatine bone','Parietal bone','Sphenoid bone','Temporal bone','Vomer','Zygomatic bone']
def wanted(s):return s.removesuffix('.l').removesuffix('.r') in names or s.startswith(('Upper ','Lower ')) or s.endswith(('.j','.t'))
with bpy.data.libraries.load(str(root/'assets/Startup.blend'),link=False) as (src,dst):dst.objects=[s for s in src.objects if wanted(s)]
for o in dst.objects:
 if o:bpy.context.scene.collection.objects.link(o)
bpy.context.view_layer.update()
dg=bpy.context.evaluated_depsgraph_get()
meshes=[];anchors={};report=[]
def conv(p):return [p.x*1000,(p.z-1.6)*1000,-p.y*1000]
for o in dst.objects:
 if not o or o.type!='MESH':continue
 if o.name.endswith('.j'):
  if len(o.data.vertices)!=2:continue
  pts=[o.matrix_world@v.co for v in o.data.vertices]
  text=bpy.data.objects.get(o.name[:-2]+'.t')
  if not text:continue
  tip=max(pts,key=lambda p:(p-text.matrix_world.translation).length)
  if tip.z>1.49:anchors[o.name[:-2]]=conv(tip)
  continue
 if o.name.removesuffix('.l').removesuffix('.r') not in names and not o.name.startswith(('Upper ','Lower ')):continue
 evaluated=o.evaluated_get(dg);mesh=evaluated.to_mesh();mesh.calc_loop_triangles()
 pos=[];indices=[]
 for v in mesh.vertices:pos.extend(conv(o.matrix_world@v.co))
 for t in mesh.loop_triangles:indices.extend(t.vertices)
 if o.matrix_world.determinant()<0:
  for i in range(0,len(indices),3):indices[i+1],indices[i+2]=indices[i+2],indices[i+1]
 meshes.append({'name':o.name,'positions':base64.b64encode(array.array('f',pos).tobytes()).decode(),'indices':base64.b64encode(array.array('I',indices).tobytes()).decode()})
 report.append({'name':o.name,'vertices':len(mesh.vertices),'triangles':len(mesh.loop_triangles),'bounds':[[min(pos[i::3]),max(pos[i::3])] for i in range(3)],'modifiers':[m.type for m in o.modifiers]})
 evaluated.to_mesh_clear()
(root/'assets/skull-original-data.js').write_text('window.SKULL_DATA='+json.dumps({'meshes':meshes,'anchors':anchors},separators=(',',':'))+';',encoding='utf8')
(root/'assets/original-report.json').write_text(json.dumps(report,indent=2),encoding='utf8')
(root/'assets/original-anchors.json').write_text(json.dumps(anchors,indent=2),encoding='utf8')
print('Total meshes',len(meshes),'vertices',sum(x['vertices'] for x in report));print(report[:4]);print('oval',anchors.get('Foramen ovale'))
