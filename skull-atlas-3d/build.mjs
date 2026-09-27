import {build} from 'esbuild';
import fs from 'node:fs';
await build({entryPoints:['src/app.js'],bundle:true,outfile:'app.js',format:'iife',minify:true,legalComments:'eof',target:['chrome100','safari15']});
const refs=Object.fromEntries(['f','l','b','i'].map(v=>[v,'data:image/png;base64,'+fs.readFileSync(`assets/reference-${v}.png`).toString('base64')]));
const script=s=>'<script>'+s.replace(/<\/script/gi,'<\\/script')+'</script>';
const html=fs.readFileSync('index.html','utf8').replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+fs.readFileSync('style.css','utf8')+'</style>').replace('<script src="assets/skull-data.js"></script>',()=>script(fs.readFileSync('assets/skull-data.js','utf8'))+script('window.REFERENCE_IMAGES='+JSON.stringify(refs)+';')).replace('<script src="app.js"></script>',()=>script(fs.readFileSync('app.js','utf8')));
fs.writeFileSync('頭顱骨3D.html',html);
console.log('Built offline app.js and standalone 頭顱骨3D.html');
