# Re-extract skull, brain, cranial nerves and orbit into ONE coordinate frame (brain atlas frame).
# Usage: python export_combined.py <Startup.blend> <out-dir>   (needs the `bpy` module or Blender)
import bpy,json,pathlib,base64,array,re,hashlib,sys
source=pathlib.Path(sys.argv[-2]);root=pathlib.Path(sys.argv[-1])
BONES=['Ethmoid bone','Frontal bone','Inferior nasal concha bone','Lacrimal bone','Mandible','Maxilla','Nasal bone','Occipital bone','Palatine bone','Parietal bone','Sphenoid bone','Temporal bone','Vomer','Zygomatic bone']
SINUS=['Sinus of sphenoid bone','Sinus of frontal bone']
DURA=['Falx cerebri','Tentorium cerebelli']
VEIN=['Cavernous sinus','Superior ophthalmic vein','Inferior ophthalmic vein','Superior petrosal sinus','Inferior petrosal sinus']
DEEP=['Thalamus','Hypothalamus','Corpus callosum','Caudate nucleus','Putamen','Medial geniculate body','Lateral geniculate body','Choroid plexus','Adenohypophysis','Neurohypophysis','Lateral ventricle','Globus pallidus','Pineal gland']
STEM=['Midbrain','Pons','Medulla oblongata','Superior colliculus','Inferior colliculus']
NERVE=['Olfactory nerve (I)','Optic nerve (II)','Optic tract','Optic chiasm','Oculomotor nerve (III)','Trochlear nerve (IV)','Trigeminal nerve (V)','Sensory root of trigeminal nerve','Motor root of trigeminal nerve','Ophthalmic nerve','Maxillary nerve','Meningeal branch of maxillary nerve','Anterior division of mandibular nerve','Posterior division of mandibular nerve','Inferior alveolar nerve','Lingual nerve','Buccal nerve','Mental nerve','Nerve to mylohyoid muscle','Abducens nerve (VI)','Facial nerve (VII)','Vestibulocochlear nerve (VIII)','Vestibular nerve','Cochlear nerve','Glossopharyngeal nerve (IX)','Vagus nerve (X)','Accessory nerve (XI)','Hypoglossal nerve (XII)']
NUCLEUS=['Nucleus of oculomotor nerve','Accessory nucleus of oculomotor nerve','Nucleus of trochlear nerve','Nucleus of abducens nerve','Motor nucleus of facial nerve','Nucleus of hypoglossal nerve','Posterior nucleus of vagus nerve']
EYE=['Sclera','Retina','Iris','Lens','Cornea','Vitreous body','Ciliary body-curve']
ORBIT=['Superior rectus muscle','Inferior rectus muscle','Medial rectus muscle','Lateral rectus muscle','Superior oblique muscle','Inferior oblique muscle','Levator palpebrae superioris','Trochlea of superior oblique muscle','Common tendinous ring','Lacrimal gland','Lacrimal sac','Lacrimal canaliculus','Nasolacrimal duct']
ARTERY=['Vertebral artery','Basilar artery','Internal carotid artery','Anterior cerebral artery','Anterior communicating artery','Posterior communicating artery','Posterior cerebral artery','Ophthalmic artery','Superior cerebellar artery','Anterior inferior cerebellar artery','Posterior inferior cerebellar artery','Middle meningeal artery','Medial occipital artery','Lateral occipital artery','Parieto-occipital artery']
TABLE=[(BONES,'bone'),(SINUS,'sinus'),(DURA,'dura'),(VEIN,'vein'),(DEEP,'deep'),(STEM,'stem'),(NERVE,'nerve'),(NUCLEUS,'nucleus'),(EYE,'eye'),(ORBIT,'orbit'),(ARTERY,'artery')]
def kind(s):
 if s.endswith(('.t','.s','.i','.j','.g')):return None
 if s.startswith(('Upper ','Lower ')) and re.search(r'(incisor|canine|premolar|molar)',s,re.I):return 'tooth'
 n=re.sub(r'\.[lr]$','',s)
 for names,k in TABLE:
  if n in names:return k
 if 'middle cerebral artery' in n.lower():return 'artery'
 l=n.lower()
 if any(t in l for t in ['gyrus','gyri','sulcus','sulci','precuneus','cuneus','frontal pole','temporal pole','occipital pole','parietal lobule']):
  if any(t in l for t in ['nasolabial','mentolabial','artery','branch','muscle']):return None
  return 'cortex'
 if any(t in l for t in ['semilunar lobule','quadrangular lobule','cerebell','gracile lobule','biventral lobule','central lobule','pyramis','uvula of vermis','nodule of vermis','tuber','declive','folium','culmen']):
  if any(t in l for t in ['artery','tentorium','tract','vein','tubercle','tuberosity']):return None
  return 'cerebellum'
 return None
# Label leader lines (.j) whose tip marks a named bony feature.
LEADERS=['Foramen ovale','Foramen rotundum','Foramen spinosum','Foramen magnum','Optic canal','Hypoglossal canal','Hypophysial fossa','Septum of sphenoidal sinuses','Cribriform plate','Crista galli','Jugular foramen','Internal acoustic opening','Internal acoustic meatus','Carotid canal','Foramen lacerum','Superior orbital fissure','Inferior orbital fissure','Infra-orbital foramen','(Supra-orbital notch)','Dorsum sellae','Clivus','Anterior clinoid process','Posterior clinoid process','Opening of frontal sinus','Lesser wing','Greater wing','Pterygoid canal','Mental foramen','Mandibular foramen','Stylomastoid foramen','Condylar canal','Orbital plate','Orbital surface of greater wing','Maxillary surface of greater wing','Sphenoidal yoke','Trochlear fovea','Tuberculum sellae','Groove for sigmoid sinus','Petrous part','Maxillary hiatus','Pterygopalatine fossa']
with bpy.data.libraries.load(str(source),link=False) as (src,dst):
 dst.objects=[n for n in src.objects if kind(n) or (n.endswith(('.j','.t')) and n[:-2] in LEADERS)]
for o in dst.objects:
 if o:bpy.context.scene.collection.objects.link(o)
bpy.context.view_layer.update()
for o in dst.objects:
 # A few nerve curves are centre lines only; give them a thin visible bevel.
 if o and o.type=='CURVE' and o.data.bevel_depth==0 and not o.data.bevel_object and kind(o.name):o.data.bevel_depth=.0006;o.data.bevel_resolution=2
bpy.context.view_layer.update();dg=bpy.context.evaluated_depsgraph_get()
def conv(p):return [p.x*1000,(p.z-1.64)*1000,-p.y*1000]
meshes=[];report=[];anchors={}
for o in dst.objects:
 if not o:continue
 if o.name.endswith('.j') and o.type=='MESH':
  base=o.name[:-2];text=bpy.data.objects.get(base+'.t')
  if len(o.data.vertices)!=2 or not text:continue
  ev=o.evaluated_get(dg);m=ev.to_mesh();pts=[o.matrix_world@v.co for v in m.vertices] if len(m.vertices)==2 else [o.matrix_world@v.co for v in o.data.vertices];ev.to_mesh_clear()
  tip=max(pts,key=lambda p:(p-text.matrix_world.translation).length)
  if tip.z>1.45:anchors[base]=[round(v,2) for v in conv(tip)]
  continue
 k=kind(o.name)
 if not k or o.type not in ['MESH','CURVE','SURFACE']:continue
 ev=o.evaluated_get(dg);m=ev.to_mesh();m.calc_loop_triangles()
 if not len(m.vertices) or not len(m.loop_triangles):ev.to_mesh_clear();print('EMPTY',o.name);continue
 pos=[conv(o.matrix_world@v.co) for v in m.vertices];tri=[t.vertices[:] for t in m.loop_triangles if any(pos[i][1]>-175 for i in t.vertices)]
 if not tri:ev.to_mesh_clear();continue
 ids=sorted(set(v for t in tri for v in t));mapping={v:i for i,v in enumerate(ids)};flat=[round(v,3) for i in ids for v in pos[i]];ind=[mapping[i] for t in tri for i in t]
 if o.matrix_world.determinant()<0:
  for i in range(0,len(ind),3):ind[i+1],ind[i+2]=ind[i+2],ind[i+1]
 bounds=[[min(flat[i::3]),max(flat[i::3])] for i in range(3)];center=[round(sum(b)/2,2) for b in bounds]
 meshes.append({'name':o.name,'category':k,'positions':base64.b64encode(array.array('f',flat).tobytes()).decode(),'indices':base64.b64encode(array.array('I',ind).tobytes()).decode(),'center':center})
 report.append({'name':o.name,'category':k,'type':o.type,'vertices':len(ids),'triangles':len(ind)//3,'center':center,'bounds':[[round(a,2),round(b,2)] for a,b in bounds]})
 ev.to_mesh_clear()
(root/'assets/cranial-data.js').write_text('window.CRANIAL_DATA='+json.dumps({'meshes':meshes,'anchors':anchors},separators=(',',':'))+';',encoding='utf8')
(root/'assets/model-inventory.json').write_text(json.dumps(report,ensure_ascii=False,indent=1),encoding='utf8')
(root/'assets/source-anchors.json').write_text(json.dumps(anchors,ensure_ascii=False,indent=1),encoding='utf8')
print('meshes',len(report),'vertices',sum(r['vertices'] for r in report),'anchors',len(anchors))
from collections import Counter;print(Counter(r['category'] for r in report))
