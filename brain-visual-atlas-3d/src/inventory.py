import bpy,json,pathlib
root=pathlib.Path('E:/NEWTEST/brain-visual-atlas-3d')
source=pathlib.Path('E:/NEWTEST/skull-atlas-3d/assets/Startup.blend')
with bpy.data.libraries.load(str(source),link=False) as (src,dst):
 names=list(src.objects)
(root/'assets/source-object-names.json').write_text(json.dumps(names,indent=2),encoding='utf8')
terms=['cerebr','telence','brain','thalam','hypoph','pituitary','optic','retin','genicul','oculomotor','edinger','ciliary','sphincter','medial rectus','occipital','calcar','choroid','carotid','communicat','vertebral artery','basilar','pontine','labyrinth','orbitofrontal','lenticul','recurrent artery','spinal artery','corpus callosum','capsule','putamen','caudate','corona radiata','corticospinal','corticonuclear','pons','medulla oblongata','midbrain','eyeball','pupil','lens','iris']
matches=[s for s in names if any(t in s.lower() for t in terms) and not s.endswith(('.t','.s','.i','.j'))]
print('\n'.join(matches))
