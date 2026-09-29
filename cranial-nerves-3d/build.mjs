import fs from 'node:fs';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import {build} from 'esbuild';
import {labels,groups,themeOrder} from './src/labels.js';
// cranial-data.js comes from src/export_combined.py (Blender); the packed copy is kept in git so rebuilding does not need Blender.
if(fs.existsSync('assets/cranial-data.js')){const raw=fs.readFileSync('assets/cranial-data.js','utf8').slice('window.CRANIAL_DATA='.length,-1);const old=fs.existsSync('assets/cranial-packed.js')?fs.readFileSync('assets/cranial-packed.js','utf8'):'';if(!old||zlib.gunzipSync(Buffer.from(JSON.parse(old.slice('window.CRANIAL_GZIP='.length,-1)),'base64')).toString()!==raw)fs.writeFileSync('assets/cranial-packed.js','window.CRANIAL_GZIP='+JSON.stringify(zlib.gzipSync(raw,{level:9}).toString('base64'))+';');}
await build({entryPoints:['src/app.js'],bundle:true,outfile:'app.js',format:'iife',minify:true,legalComments:'eof',target:['chrome110']});
const script=s=>'<script>'+s.replace(/<\/script/gi,'<\\/script')+'</script>';
const html=fs.readFileSync('index.html','utf8').replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+fs.readFileSync('style.css','utf8')+'</style>').replace('<script src="assets/cranial-packed.js"></script>',()=>script(fs.readFileSync('assets/cranial-packed.js','utf8'))).replace('<script src="app.js"></script>',()=>script(fs.readFileSync('app.js','utf8')));
fs.writeFileSync('神經與顱骨3D.html',html);
fs.writeFileSync('assets/landmarks.json',JSON.stringify(labels.map(({matches,point,anchorMesh,localAnchor,...l})=>l),null,1));
const kinds={mesh:'原模型',guide:'原模型位置／通道',schematic:'示意',reference:'皮質內層次'};
fs.writeFileSync('完整構造清單.md','# 腦神經與顱骨孔洞：完整構造清單\n\n'+labels.length+' 個學習項目，'+themeOrder.length+' 個主題。\n\n|編號|中文|English|主題|小考|穿過|呈現|\n|---|---|---|---|---|---|---|\n'+labels.map(l=>`|${l.number}|${l.zh}|${l.en}|${l.groups.map(g=>groups[g].title).join('、')}|${l.quiz||'—'}|${l.via.map(v=>labels.find(x=>x.id===v).zh).join('、')||'—'}|${kinds[l.representation]}|`).join('\n')+'\n');
const provenance=JSON.parse(fs.readFileSync('assets/provenance.json','utf8'));provenance.sha256['assets/cranial-packed.js']=crypto.createHash('sha256').update(fs.readFileSync('assets/cranial-packed.js')).digest('hex');fs.writeFileSync('assets/provenance.json',JSON.stringify(provenance,null,2));
console.log(JSON.stringify({entries:labels.length,groupCounts:Object.fromEntries(themeOrder.map(g=>[g,labels.filter(l=>l.groups.includes(g)).length])),standaloneMB:(Buffer.byteLength(html)/1e6).toFixed(2)}));
