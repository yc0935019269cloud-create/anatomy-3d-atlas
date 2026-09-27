import bpy,json,pathlib
root=pathlib.Path('E:/NEWTEST/skull-atlas-3d')
p=next((root/'assets').glob('*.blend'))
with bpy.data.libraries.load(str(p),link=False) as (src,dst):
    dst.objects=[s for s in src.objects if any(t in s.lower() for t in ['ethmoid','frontal bone','foramen','maxilla','nasal concha','crista','cribriform','temporal bone','mandible'])]
out=[]
for o in dst.objects:
 if o:out.append({'name':o.name,'type':o.type,'vertices':len(o.data.vertices) if o.type=='MESH' else 0,'location':list(o.location),'matrix':[list(r) for r in o.matrix_world]})
(root/'assets/blend-inventory.json').write_text(json.dumps(out,indent=2),encoding='utf8')
print([(o['name'],o['type'],o['vertices']) for o in out])
