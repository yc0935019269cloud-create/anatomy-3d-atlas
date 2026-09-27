import bpy,json,pathlib,base64,array,re,hashlib
root=pathlib.Path('E:/NEWTEST/brain-visual-atlas-3d')
source=pathlib.Path('E:/NEWTEST/skull-atlas-3d/assets/Startup.blend')
bones=['Sphenoid bone']
deep=['Thalamus','Hypothalamus','Corpus callosum','Caudate nucleus','Putamen','Medial geniculate body','Lateral geniculate body','Choroid plexus','Adenohypophysis','Neurohypophysis','Lateral ventricle','Globus pallidus']
stem=['Midbrain','Pons','Medulla oblongata']
nerve=['Optic nerve (II)','Optic tract','Optic chiasm','Oculomotor nerve (III)','Nucleus of oculomotor nerve','Accessory nucleus of oculomotor nerve']
eye=['Sclera','Retina','Iris','Lens','Ciliary body-curve','Medial rectus muscle']
artery=['Vertebral artery','Basilar artery','Internal carotid artery','Anterior cerebral artery','Anterior communicating artery','Posterior communicating artery','Posterior cerebral artery','Ophthalmic artery','Anterior spinal artery','Superior cerebellar artery','Anterior inferior cerebellar artery','Posterior inferior cerebellar artery','Central retinal artery','Orbitofrontal branches of anterior cerebral artery','Proximal lateral striate branches','Distal lateral striate branches','Medial occipital artery','Lateral occipital artery','Parieto-occipital artery']
def kind(s):
 if s.endswith(('.t','.s','.i','.j','.g')):return None
 n=re.sub(r'\.[lr]$','',s)
 if n in bones:return 'bone'
 if n in deep:return 'deep'
 if n in stem:return 'stem'
 if n in nerve:return 'nerve'
 if n in eye:return 'eye'
 if n in artery or 'middle cerebral artery' in n.lower() or 'pontine branches of basilar artery' in n:return 'artery'
 if any(t in n.lower() for t in ['gyrus','gyri','sulcus','sulci','precuneus','cuneus','frontal pole','temporal pole','occipital pole','parietal lobule']):
  if any(t in n.lower() for t in ['nasolabial','mentolabial','artery','branch','muscle']):return None
  return 'cortex'
 if any(t in n.lower() for t in ['semilunar lobule','quadrangular lobule','cerebell','gracile lobule','biventral lobule','central lobule','pyramis','uvula of vermis','nodule of vermis','tuber','declive','folium','culmen']):
  if any(t in n.lower() for t in ['artery','tentorium','tract','vein','tubercle','tuberosity']):return None
  return 'cerebellum'
 return None
with bpy.data.libraries.load(str(source),link=False) as (src,dst):dst.objects=[n for n in src.objects if kind(n)]
for o in dst.objects:
 if o:bpy.context.scene.collection.objects.link(o)
bpy.context.view_layer.update();dg=bpy.context.evaluated_depsgraph_get();meshes=[];report=[]
def conv(p):return [p.x*1000,(p.z-1.64)*1000,-p.y*1000]
for o in dst.objects:
 if not o or o.type not in ['MESH','CURVE','SURFACE']:continue
 k=kind(o.name);ev=o.evaluated_get(dg);m=ev.to_mesh();m.calc_loop_triangles()
 if not len(m.vertices) or not len(m.loop_triangles):ev.to_mesh_clear();continue
 pos=[conv(o.matrix_world@v.co) for v in m.vertices];tri=[t.vertices[:] for t in m.loop_triangles if any(pos[i][1]>-150 for i in t.vertices)]
 if not tri:ev.to_mesh_clear();continue
 ids=sorted(set(v for t in tri for v in t));mapping={v:i for i,v in enumerate(ids)};flat=[v for i in ids for v in pos[i]];ind=[mapping[i] for t in tri for i in t]
 if o.matrix_world.determinant()<0:
  for i in range(0,len(ind),3):ind[i+1],ind[i+2]=ind[i+2],ind[i+1]
 bounds=[[min(flat[i::3]),max(flat[i::3])] for i in range(3)];center=[sum(b)/2 for b in bounds]
 meshes.append({'name':o.name,'category':k,'positions':base64.b64encode(array.array('f',flat).tobytes()).decode(),'indices':base64.b64encode(array.array('I',ind).tobytes()).decode(),'center':center,'bounds':bounds})
 report.append({'name':o.name,'category':k,'vertices':len(ids),'triangles':len(ind)//3,'center':[round(v,2) for v in center],'bounds':bounds})
 ev.to_mesh_clear()
(root/'assets/brain-data.js').write_text('window.BRAIN_DATA='+json.dumps({'meshes':meshes},separators=(',',':'))+';',encoding='utf8')
(root/'assets/model-inventory.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf8')
(root/'assets/model-source.json').write_text(json.dumps({'originalPath':str(source),'sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'url':'https://github.com/Z-Anatomy/Models-of-human-anatomy','origin_m':[0,0,1.64],'axes':'X anatomical left; Y superior; Z anterior; millimetres','modifications':'Selected brain, nerves, eyes, intracranial artery objects; evaluated original modifiers; lower extent clipped at -150mm; no further decimation'},indent=2),encoding='utf8')
print('meshes',len(report),'vertices',sum(r['vertices'] for r in report));print('categories',{c:sum(1 for r in report if r['category']==c) for c in set(r['category'] for r in report)})
print(json.dumps([r for r in report if r['category'] in ['nerve','deep','eye']],ensure_ascii=True))
