// Teaching entries for the combined skull + cranial nerve + brain atlas.
// Coordinates: millimetres, +X anatomical left, +Y superior, +Z anterior (same frame as brain-visual-atlas-3d).
// models: Z-Anatomy object-name prefixes (matched with startsWith) or guide:* tags from schematic.js.
// representation: mesh = source mesh · guide = region / passage on source meshes · schematic = drawn guide · reference = layer not modelled.
// snap: move the marker onto the nearest vertex of the left-side matched mesh. Foramen markers stay in the opening.
const rows=[];
function add(id,zh,en,groups,models,position,note,o={}){rows.push({id,zh,en,groups:groups.split(''),models,position,note,representation:o.rep||'mesh',snap:o.snap??(o.rep||'mesh')==='mesh',quiz:o.quiz||null,via:o.via||[],extra:!!o.extra});}

// ── 小考 10 題（講義投影片與小考卷） ──
add('optic-papilla','視乳突／視神經盤','Optic papilla / optic disc','qv',['Retina.l','Optic nerve (II).l'],[28.3,-46.2,54],'視網膜神經節細胞軸突集中離開眼球處。沒有 rods 與 cones，所以是生理性盲點（中央凹則看最清楚）。顱內壓升高時可見視乳頭水腫 papilledema。模型以視神經接上視網膜後極的位置標示。',{rep:'guide',snap:true,quiz:1});
add('dura','硬腦膜（視神經鞘）','Dura mater (optic nerve sheath)','qv',['guide:on-sheath','Falx cerebri','Tentorium cerebelli'],[24,-44,45.5],'考題指的是包在視乳突後方視神經外面的硬腦膜：視神經是中樞神經的延伸，從視神經管到眼球後方都包著 dura／arachnoid／pia，蛛網膜下腔也一路延伸過來，所以顱內壓升高會造成視乳頭水腫。硬腦膜在眼球後方與鞏膜相連、在視神經管處與顱內硬腦膜延續。淡紫色半透明管為視神經鞘示意（原模型沒有）；顱內的大腦鐮、小腦天幕是原模型的硬腦膜反摺，一併高亮。',{rep:'schematic',snap:true,quiz:2});
add('meyer','梅氏環（顳葉視放射）',"Meyer’s loop",'qv',['guide:meyer'],[34,-31,3],'視放射下部先向前繞過側腦室顳角，再往後到距狀溝下岸（舌回），傳遞對側上方視野。小考第 3 題答案是 Meyer’s loop，不是 Baum’s loop。',{rep:'schematic',quiz:3});
add('ora-serrata','鋸齒緣','Ora serrata','qv',['guide:ora'],[40,-49,68],'視網膜感光部的前緣，與睫狀體平坦部交界。金色環沿原模型視網膜前緣畫出，實際邊緣呈鋸齒狀。',{rep:'schematic',quiz:4});
add('gennari','Gennari 線','Line / stria of Gennari','qv',['Calcarine sulcus.l'],[8,-25,-75],'初級視覺皮質（V1，Brodmann 17）第 IV 層內的有髓纖維帶，肉眼可見的白線，所以 V1 又叫紋狀皮質。它在皮質裡面，3D 表面沒有網格；標點只提示距狀溝周圍的 V1 區。',{rep:'reference',snap:true,quiz:5});
add('calcarine','距狀溝','Calcarine sulcus','qv',['Calcarine sulcus.l'],[6,-22,-67],'枕葉內側面的溝，初級視覺皮質分布在它上下兩岸。上岸楔葉看對側下方視野，下岸舌回看對側上方視野。',{quiz:6});
add('chiasm','視交叉','Optic chiasm','qv',['Optic chiasm'],[0,-28,17],'鼻側視網膜纖維交叉，顳側纖維不交叉。視交叉之後改用「左右視野」思考：左視束處理雙眼右側視野。位於腦下垂體正上方。',{quiz:7});
add('nasolacrimal','鼻淚管','Nasolacrimal duct','q',['Nasolacrimal duct.l','Lacrimal sac.l'],[10,-75,64],'淚液：淚腺 → 淚小管 → 淚囊 → 鼻淚管 → 開口於下鼻道。管道走在上頷骨與淚骨圍成的骨管中。',{quiz:8});
add('maxillary-sinus','上頷竇','Maxillary sinus','qo',['Maxilla.l','guide:maxsinus'],[23,-73,59],'上頷骨體內的空腔，位於眼窩底下方。眼部正面撞擊可造成眼窩底骨折 blowout fracture，眼窩內容物掉入上頷竇。原模型上頷骨內有此空腔；藍色半透明體只標出空腔位置。',{rep:'guide',snap:false,quiz:9});
add('sphenoid-sinus','蝶竇','Sphenoidal sinus','qc',['Sinus of sphenoid bone'],[6,-50,21],'蝶骨體內的空腔，正上方是蝶鞍與腦下垂體，所以腦下垂體手術可經鼻腔 → 蝶竇 → 蝶鞍（transsphenoidal approach）。',{quiz:10});

// ── 顱底孔洞：神經穿過哪個孔 ──
add('cribriform','篩板篩孔','Cribriform plate foramina','f',['Olfactory nerve (I)'],[5,-42,61],'CN I 嗅神經絲穿過篩骨篩板。口訣「一篩」。標點位於篩板區；模型未逐一建出每個小孔。',{rep:'guide',snap:false});
add('optic-canal','視神經管','Optic canal','fo',['Optic nerve (II)','Ophthalmic artery'],[12.5,-37.6,31.4],'通過：CN II 視神經＋眼動脈＋伴隨的交感纖維。口訣「二視」。位置取自原模型標記線端點。',{rep:'guide',snap:false});
add('sof','眶上裂','Superior orbital fissure','fo',['Oculomotor nerve (III)','Trochlear nerve (IV)','Ophthalmic nerve','Abducens nerve (VI)','Superior ophthalmic vein'],[17.1,-42.4,32.1],'III、IV、V1、VI 與上眼靜脈經此進入眼窩。口訣「三四一六眶上裂」。原模型沒有此裂的標記點，標點取自這四條神經在骨處交會的位置。',{rep:'guide',snap:false});
add('rotundum','圓孔','Foramen rotundum','f',['Maxillary nerve'],[16.7,-48.5,25.5],'V2 上頷神經。口訣「二圓」。原模型的 V2 與此孔相距約 0.6 mm。',{rep:'guide',snap:false});
add('ovale','卵圓孔','Foramen ovale','f',['Trigeminal nerve (V)','Anterior division of mandibular nerve','Posterior division of mandibular nerve'],[24,-61.6,13.3],'V3 下頷神經。口訣「三卵」。',{rep:'guide',snap:false});
add('spinosum','棘孔','Foramen spinosum','f',['Middle meningeal artery'],[29.2,-62.1,8.2],'中腦膜動脈（不是腦神經）。位於卵圓孔後外側。',{rep:'guide',snap:false});
add('carotid-canal','頸動脈管','Carotid canal','f',['Internal carotid artery'],[28,-78,-7],'內頸動脈由此進入顱內，之後走進海綿竇。標點為顱底外口附近的近似位置。',{rep:'guide',snap:false});
add('iam','內耳道','Internal acoustic meatus','f',['Facial nerve (VII)','Vestibulocochlear nerve (VIII)','Vestibular nerve','Cochlear nerve'],[19.5,-57.3,-5.5],'CN VII＋VIII 共同進入。口訣「七八內聽」。標點取自兩條神經進入顳骨岩部處。',{rep:'guide',snap:false});
add('jugular','頸靜脈孔','Jugular foramen','f',['Glossopharyngeal nerve (IX)','Vagus nerve (X)','Accessory nerve (XI)'],[26.8,-71.8,-11.2],'CN IX、X、XI 共同走頸靜脈孔（還有內頸靜脈）。口訣「九十十一頸靜脈」。標點取自三條神經在骨處交會的位置。',{rep:'guide',snap:false});
add('hypoglossal-canal','舌下神經管','Hypoglossal canal','f',['Hypoglossal nerve (XII)'],[18.2,-76.9,-14.8],'CN XII。口訣「十二舌下」。位於枕骨大孔前外側、枕髁上方。',{rep:'guide',snap:false});
add('magnum','枕骨大孔','Foramen magnum','f',['Medulla oblongata','Vertebral artery'],[0.7,-83.9,-30.3],'延腦與脊髓交界、椎動脈、副神經脊髓根通過。',{rep:'guide',snap:false});
add('sella','蝶鞍（腦下垂體窩）','Sella turcica / hypophysial fossa','fc',['Adenohypophysis','Neurohypophysis'],[0,-46.5,15.6],'蝶骨體上方的鞍形凹窩，容納腦下垂體；下面是蝶竇，兩側是海綿竇。',{rep:'guide',snap:false});

// ── 12 對腦神經（從腦底認） ──
const via=(...ids)=>({via:ids});
add('cn1','CN I 嗅神經','Olfactory nerve (CN I)','n',['Olfactory nerve (I).l'],[11.6,-34.8,43.6],'嗅球＋嗅束位於額葉底面。',via('cribriform'));
add('cn2','CN II 視神經','Optic nerve (CN II)','n',['Optic nerve (II).l'],[15,-38.8,40],'CN II 是中樞神經延伸，外有三層腦膜。四段：眼球內段（最短，篩板前無髓鞘）→ 眼窩段（最長，S 形）→ 視神經管段 → 顱內段（到視交叉）。',via('optic-canal'));
add('cn3','CN III 動眼神經','Oculomotor nerve (CN III)','ng',['Oculomotor nerve (III).l'],[6.7,-33.1,6.5],'從中腦腹側、腳間窩發出。支配上直肌、下直肌、內直肌、下斜肌、提上瞼肌；副交感纖維到睫狀神經節。在共同腱環內分成上支、下支。',via('sof'));
add('cn4','CN IV 滑車神經','Trochlear nerve (CN IV)','n',['Trochlear nerve (IV).l'],[8.4,-43.1,-15.3],'唯一從腦幹背側發出的腦神經，繞中腦向前。只支配上斜肌（SO4），走共同腱環外。',via('sof'));
add('cn5','CN V 三叉神經','Trigeminal nerve (CN V)','n',['Trigeminal nerve (V).l','Sensory root of trigeminal nerve.l','Motor root of trigeminal nerve.l'],[11.9,-49.8,-12.3],'從橋腦外側出來，很粗：大的感覺根＋小的運動根，之後分 V1、V2、V3。',via('sof','rotundum','ovale'));
add('v1','V1 眼神經','Ophthalmic nerve (V1)','n',['Ophthalmic nerve.l'],[20.6,-39.4,32.3],'純感覺。經眶上裂入眼窩後分成額神經、淚神經、鼻睫神經。原模型把額神經 → 眶上／滑車上神經畫在同一條曲線上。',via('sof'));
add('v2','V2 上頷神經','Maxillary nerve (V2)','n',['Maxillary nerve.l'],[17.4,-49.7,22.4],'純感覺。穿圓孔，經翼腭窩、眶下裂，延續為眶下神經。',via('rotundum'));
add('v3','V3 下頷神經','Mandibular nerve (V3)','n',['Anterior division of mandibular nerve.l','Posterior division of mandibular nerve.l','Inferior alveolar nerve.l','Lingual nerve.l'],[26.4,-69.5,18.5],'感覺＋運動（咀嚼肌）。穿卵圓孔，下牙槽神經、舌神經等為其分支。',via('ovale'));
add('cn6','CN VI 外旋神經','Abducens nerve (CN VI)','n',['Abducens nerve (VI).l'],[4.4,-64.3,-3.2],'橋延交界靠近中線發出。只支配外直肌（LR6）。在海綿竇「腔內」緊貼內頸動脈，病變時常最先受影響 → 眼球無法外轉。',via('sof'));
add('cn7','CN VII 顏面神經','Facial nerve (CN VII)','n',['Facial nerve (VII).l'],[12,-60,-11],'小腦橋腦角，與 VIII 很靠近，一起進內耳道；出顱經莖乳孔。',via('iam'));
add('cn8','CN VIII 前庭耳蝸神經','Vestibulocochlear nerve (CN VIII)','n',['Vestibulocochlear nerve (VIII).l','Vestibular nerve.l','Cochlear nerve.l'],[14.4,-60.7,-10.4],'小腦橋腦角，與 VII 共同進內耳道。',via('iam'));
add('cn9','CN IX 舌咽神經','Glossopharyngeal nerve (CN IX)','n',['Glossopharyngeal nerve (IX).l'],[12,-66,-14],'延腦橄欖後溝發出，走頸靜脈孔。',via('jugular'));
add('cn10','CN X 迷走神經','Vagus nerve (CN X)','n',['Vagus nerve (X).l'],[11,-70,-17],'延腦橄欖後溝發出，走頸靜脈孔。',via('jugular'));
add('cn11','CN XI 副神經','Accessory nerve (CN XI)','n',['Accessory nerve (XI).l'],[12,-80,-22],'橄欖後溝附近及上頸髓發出，走頸靜脈孔。',via('jugular'));
add('cn12','CN XII 舌下神經','Hypoglossal nerve (CN XII)','n',['Hypoglossal nerve (XII).l'],[6,-74,-10],'延腦橄欖前溝發出，走舌下神經管。',via('hypoglossal-canal'));

// ── 眼窩：共同腱環、眶上裂、眼外肌 ──
add('annulus','共同腱環（Zinn 環）','Common tendinous ring (annulus of Zinn)','o',['Common tendinous ring.l'],[16.3,-40.3,34],'四條直肌的共同起點。腱環內：III 上支、III 下支、鼻睫神經、VI（以及 II 與眼動脈）。腱環外：IV、額神經、淚神經、上眼靜脈。按「眶尖正面」可沿眶軸直接看。原模型的腱環只有約 5 mm 寬，IV、額神經、上眼靜脈卡在環壁上看似穿過環內；本頁已把環在其平面上放大 1.5 倍，並只在眶尖附近把這三者移到環外上方、把 VI 移進環內（教學校正）。');
add('sr','上直肌','Superior rectus','o',['Superior rectus muscle.l'],[25.4,-36.5,55],'CN III 上支支配。');
add('lps','提上瞼肌','Levator palpebrae superioris','o',['Levator palpebrae superioris.l'],[28,-32,62],'CN III 上支支配（另有交感支配的 Müller 肌）。');
add('ir','下直肌','Inferior rectus','o',['Inferior rectus muscle.l'],[24.5,-55,52],'CN III 下支支配。');
add('mr','內直肌','Medial rectus','o',['Medial rectus muscle.l'],[16,-46.8,53],'CN III 下支支配；雙側收縮使眼球會聚。');
add('lr','外直肌','Lateral rectus','o',['Lateral rectus muscle.l'],[38,-46,52],'CN VI 支配（LR6）。');
add('so','上斜肌＋滑車','Superior oblique + trochlea','o',['Superior oblique muscle.l','Trochlea of superior oblique muscle.l'],[14.6,-33,75],'CN IV 支配（SO4）。肌腱繞過額骨上的滑車再轉向後外附著於眼球。');
add('io','下斜肌','Inferior oblique','o',['Inferior oblique muscle.l'],[30,-60,66],'CN III 下支支配；唯一不從眼窩後方起始的眼外肌。');
add('orb-4','IV 滑車神經 → 上斜肌','CN IV entering superior oblique','o',['Trochlear nerve (IV).l'],[28.1,-33.9,54.5],'走共同腱環外，進入上斜肌上緣。看神經最後進哪條肌肉：去上斜肌 → IV。',{rep:'guide',snap:true,via:['sof']});
add('orb-6','VI 外旋神經 → 外直肌','CN VI entering lateral rectus','o',['Abducens nerve (VI).l'],[29.3,-40.7,43.9],'走共同腱環內，進入外直肌內面。去外直肌 → VI。',{rep:'guide',snap:true,via:['sof']});
add('orb-v1','V1 眼神經（入眶前）','Ophthalmic nerve before branching','o',['Ophthalmic nerve.l'],[16.6,-42.4,23.2],'V1 在眶上裂前分成額、淚、鼻睫三支。',{rep:'guide',snap:true,via:['sof']});
add('cn3-sup','CN III 上支','Superior division of CN III','o',['Oculomotor nerve (III).l'],[24.2,-34.4,56.6],'走共同腱環內，到上直肌與提上瞼肌。',{rep:'guide',snap:true,via:['sof']});
add('cn3-inf','CN III 下支','Inferior division of CN III','og',['Oculomotor nerve (III).l'],[27.2,-54.7,46.5],'走共同腱環內，到內直肌、下直肌、下斜肌，並送副交感纖維到睫狀神經節。',{rep:'guide',snap:true,via:['sof']});
add('frontal-n','額神經（V1）','Frontal nerve (V1)','o',['Ophthalmic nerve.l'],[23.1,-32.3,46.7],'V1 最上方的分支，走共同腱環外、提上瞼肌上方，往前分為眶上神經與滑車上神經到額頭（原模型的 V1 曲線一路畫到額頭，末端分支即眶上／滑車上神經）。',{rep:'guide',snap:true});
add('lacrimal-n','淚神經（V1）','Lacrimal nerve (V1)','o',['guide:lacrimal-n'],[33,-38.2,50],'V1 分支，走共同腱環外，沿外直肌上緣到淚腺。原模型沒有此神經，粉色細線為走向示意。',{rep:'schematic'});
add('nasociliary','鼻睫神經（V1）','Nasociliary nerve (V1)','og',['guide:nasociliary'],[17.8,-38.8,42],'V1 位置較深的分支，唯一穿過共同腱環；跨過視神經到眼窩內側。發出睫狀神經節感覺根及長睫狀神經。原模型沒有此神經，為走向示意。',{rep:'schematic'});
add('lacrimal-gland','淚腺','Lacrimal gland','o',['Lacrimal gland.l'],[45,-35,66],'位於眼窩外上方。模型上找到淚腺，就能判斷哪邊是 lateral。');
add('sov','上眼靜脈','Superior ophthalmic vein','oe',['Superior ophthalmic vein.l'],[19.5,-38,40],'走共同腱環外、經眶上裂，匯入海綿竇。');
add('ophthalmic-a','眼動脈','Ophthalmic artery','oe',['Ophthalmic artery.l'],[17,-40,45],'內頸動脈分支，與視神經一起走視神經管（交感纖維伴行）。');
add('lamina','篩骨紙板／篩竇','Lamina papyracea / ethmoidal cells','o',['Ethmoid bone'],[12,-46,48],'眼窩內側壁非常薄，旁邊就是篩竇，也是眼窩容易骨折的地方。',{rep:'guide',snap:false});

// ── 海綿竇與蝶鞍 ──
add('cavernous','海綿竇','Cavernous sinus','c',['Cavernous sinus.l'],[8,-40,20],'位於蝶鞍兩側。外側壁由上到下：III → IV → V1 → V2（3-4-1-2）。腔內：內頸動脈＋CN VI＋交感神經叢。建議把透明度調低，從前方或上方看神經在壁中的排列。');
add('ica','內頸動脈','Internal carotid artery','cf',['Internal carotid artery.l'],[14.4,-56.7,20],'經頸動脈管入顱，在海綿竇腔內呈彎曲（carotid siphon），旁邊緊貼 CN VI。本模型的 ICA 在切面處略低於海綿竇。',{snap:true});
add('pituitary','腦下垂體','Pituitary gland','c',['Adenohypophysis','Neurohypophysis'],[3,-38,19],'位在蝶鞍，上方是視交叉，下方是蝶竇，兩側是海綿竇。腫瘤向上壓迫視交叉 → 雙顳側偏盲。');
add('transsphenoidal','經蝶竇手術路徑','Transsphenoidal approach','c',['guide:transsphenoidal'],[0,-44,20],'鼻腔 → 蝶竇 → 蝶鞍 → 腦下垂體。綠色箭線是路徑示意。',{rep:'schematic',snap:true});

// ── 睫狀神經節、瞳孔反射與腦幹 ──
add('ciliary-ganglion','睫狀神經節','Ciliary ganglion','g',['guide:ganglion'],[22.5,-43,40.5],'位於眼窩深部、視神經外側。三種根：副交感（CN III 下支，唯一在此突觸）、感覺（鼻睫神經，不突觸）、交感（內頸動脈神經叢，不突觸）。原模型沒有此構造；小球只示意位置。',{rep:'schematic'});
add('para-root','副交感根','Parasympathetic (motor) root','g',['guide:root-para'],[25,-48,43],'EW 核 → CN III → 下支 → 睫狀神經節突觸 → 短睫狀神經 → 瞳孔括約肌＋睫狀肌：縮瞳＋調節。',{rep:'schematic'});
add('sensory-root','感覺根','Sensory root (from nasociliary)','g',['guide:root-sens'],[19.8,-40.5,39],'由鼻睫神經來，穿過神經節但不突觸。',{rep:'schematic'});
add('symp-root','交感根','Sympathetic root','g',['guide:root-symp'],[17.5,-42.5,38],'來自內頸動脈交感神經叢（沿眼動脈進眼窩），穿過神經節但不突觸；到瞳孔開大肌。',{rep:'schematic'});
add('short-ciliary','短睫狀神經','Short ciliary nerves','g',['guide:short-ciliary'],[26,-44,48],'從睫狀神經節出去，可攜帶副交感、交感、感覺三種纖維。一秒判斷：從神經節出去 → 短睫狀。',{rep:'schematic'});
add('long-ciliary','長睫狀神經','Long ciliary nerves','g',['guide:long-ciliary'],[22,-40,48],'直接由鼻睫神經來，繞過睫狀神經節，主要帶感覺＋交感。',{rep:'schematic'});
add('sphincter','瞳孔括約肌','Sphincter pupillae','g',['guide:sphincter'],[31,-47,74],'短睫狀神經的副交感纖維支配；收縮 → 縮瞳。環形只示意位置。',{rep:'schematic'});
add('ciliary-muscle','睫狀肌','Ciliary muscle','g',['guide:ciliary'],[36,-49,69],'收縮 → 懸韌帶放鬆 → 水晶體變厚（調節）。環形只示意位置。',{rep:'schematic'});
add('lens','水晶體','Lens','gv',['Lens.l'],[31,-49,71.3],'無血管，靠房水供應營養；前面較平、後面較凸。上皮只在前囊內側。白內障術後殘留上皮移行到後囊 → 後囊混濁 PCO（二次白內障）。');
add('ew','EW 核（動眼神經副核）','Edinger–Westphal nucleus','g',['Accessory nucleus of oculomotor nerve.l'],[0.8,-31.2,-8.9],'副交感節前神經元所在；接收兩側頂蓋前區 → 所以照一眼兩眼都縮瞳（直接＋間接反應）。');
add('nucleus3','動眼神經核','Oculomotor nucleus','g',['Nucleus of oculomotor nerve.l'],[2,-34.4,-9.3],'上丘層次可見 CN III 核與 EW 核。「上丘三」。');
add('nucleus4','滑車神經核','Trochlear nucleus','g',['Nucleus of trochlear nerve.l'],[1.3,-40.3,-9.6],'下丘層次可見 CN IV 核。「下丘四」。');
add('sc','上丘','Superior colliculus','gv',['Superior colliculus.l'],[8.7,-27.5,-16.6],'中腦四疊體上對，主要負責視覺反射。');
add('ic','下丘','Inferior colliculus','g',['Inferior colliculus.l'],[7.3,-31.7,-16.2],'中腦四疊體下對，主要與聽覺路徑／反射相關。');
add('pretectal','頂蓋前區','Pretectal area','g',['guide:pretectal'],[5,-25,-11],'瞳孔對光反射中樞：視網膜 → CN II → 頂蓋前區 → 兩側 EW 核 → CN III → 睫狀神經節 → 短睫狀神經 → 瞳孔括約肌。原模型無此區網格，小球示意在上丘前方。',{rep:'schematic'});

// ── 視覺路徑 ──
add('retina','視網膜','Retina','v',['Retina.l'],[40,-52,60],'影像上下左右都倒置；下半部視網膜對應上方視野。');
add('on-intraocular','視神經：眼球內段','Optic nerve — intraocular part','v',['Optic nerve (II).l'],[28.8,-46.3,55],'最短（約 1 mm）；篩板前無髓鞘。',{rep:'guide',snap:true});
add('on-orbital','視神經：眼窩段','Optic nerve — intraorbital part','v',['Optic nerve (II).l'],[22,-43,43],'最長，呈 S 形，讓眼球轉動時不被拉扯。',{rep:'guide',snap:true});
add('on-canal','視神經：視神經管段','Optic nerve — intracanalicular part','v',['Optic nerve (II).l'],[12.5,-37.6,31.4],'通過視神經管，與眼動脈同行。',{rep:'guide',snap:true});
add('on-cranial','視神經：顱內段','Optic nerve — intracranial part','v',['Optic nerve (II).l'],[7,-33.5,24],'視神經管 → 視交叉。',{rep:'guide',snap:true});
add('optic-tract','視束','Optic tract','v',['Optic tract.l'],[16,-28,0],'視交叉之後：左視束帶雙眼右側視野。');
add('lgn','外側膝狀體','Lateral geniculate nucleus','v',['Lateral geniculate body.l'],[19.1,-27.8,-13.2],'丘腦的視覺中繼站，之後經視放射到 V1。');
add('baum','鮑氏環（頂葉視放射）',"Baum’s loop",'v',['guide:baum'],[31,-3,-45],'視放射上部，經頂葉到距狀溝上岸（楔葉），傳遞對側下方視野。',{rep:'schematic'});
add('v1-cortex','初級視覺皮質 V1','Primary visual cortex (V1, BA 17)','v',['Calcarine sulcus.l','Cuneus.l','Lingual gyrus.l'],[8,-23,-79],'= Striate cortex = Brodmann area 17，位於距狀溝兩岸。問「什麼皮質」答 primary visual cortex；問「第幾區」答 17。',{rep:'guide',snap:true});
add('cuneus','楔葉','Cuneus','v',['Cuneus.l'],[6,-5,-80],'距狀溝上方；代表對側下方視野。「上面的楔葉看下面」。');
add('lingual','舌回','Lingual gyrus','v',['Lingual gyrus.l'],[8,-35,-70],'距狀溝下方；代表對側上方視野。「下面的舌回看上面」。');

// ── 海綿竇冠狀切面：各神經在切面上的位置 ──
add('cav-3','III（外側壁最上）','CN III in lateral wall','c',['Oculomotor nerve (III).l'],[12.6,-37.2,20],'外側壁由上到下第 1 條。',{rep:'guide',snap:true,via:['sof']});
add('cav-4','IV（外側壁）','CN IV in lateral wall','c',['Trochlear nerve (IV).l'],[13.6,-43.2,20],'外側壁第 2 條。本模型中 IV 與 V1 幾乎同高，教科書排列是 III → IV → V1 → V2。',{rep:'guide',snap:true,via:['sof']});
add('cav-v1','V1（外側壁）','V1 in lateral wall','c',['Ophthalmic nerve.l'],[15,-42.5,20],'外側壁第 3 條，往前經眶上裂。',{rep:'guide',snap:true,via:['sof']});
add('cav-v2','V2（外側壁最下）','V2 in lateral wall','c',['Maxillary nerve.l'],[17.2,-49,20],'外側壁最下方，往前出圓孔。',{rep:'guide',snap:true,via:['rotundum']});
add('cav-6','VI（海綿竇腔內）','CN VI inside the sinus','c',['Abducens nerve (VI).l'],[14,-46.2,20],'唯一走在海綿竇腔內的腦神經，貼著 ICA。',{rep:'guide',snap:true,via:['sof']});

// ── 眼部血管：眼動脈的分支、睫狀循環、視網膜循環與靜脈回流 ──
add('cra','視網膜中央動脈','Central retinal artery (CRA)','e',['Central retinal artery.l'],[25.9,-49.4,48.3],'眼動脈第一條分支。實際上在眼球後約 1 cm 由下方穿入視神經，沿視神經中央走到視盤，再分成上下鼻側／顳側四支。終動脈 → 阻塞（CRAO）造成內層視網膜缺血、黃斑櫻桃紅斑。原模型的 CRA 走在視神經下方、到視盤才接上，穿入位置以說明為準。');
add('cra-branches','視網膜中央動脈的視網膜分支','Retinal branches of the CRA','e',['Central retinal artery.l'],[40.4,-42.2,61],'在視網膜神經纖維層內分布，供應視網膜內 2/3（神經節細胞到內核層）；外層（感光細胞）由脈絡膜供應。原模型直接畫在視網膜上。',{rep:'guide',snap:true});
add('crv','視網膜中央靜脈','Central retinal vein (CRV)','e',['guide:crv'],[24.2,-45.6,44.2],'與 CRA 同行於視神經中，在眼球後方離開視神經，匯入上眼靜脈或直接進海綿竇。阻塞（CRVO）→ 火焰狀出血。原模型沒有，藍線為示意；實際在視神經中央。',{rep:'schematic'});
add('spca','睫狀後短動脈','Short posterior ciliary arteries','e',['Short posterior ciliary arteries.l','guide:spca-ext'],[21,-40.8,40.5],'約 15–20 條，在視神經周圍穿入鞏膜，供應脈絡膜（→ 外層視網膜）與視神經頭。原模型只畫到眼球後方約 9 mm，接到鞏膜的細支是示意。');
add('zinn','Zinn-Haller 環','Circle of Zinn–Haller','e',['guide:zinn'],[30.5,-46.5,51.6],'睫狀後短動脈在鞏膜內環繞視神經頭形成的吻合環，供應篩板附近的視神經。前部缺血性視神經病變與它有關。示意。',{rep:'schematic'});
add('lpca','睫狀後長動脈','Long posterior ciliary arteries','e',['Long posterior ciliary arteries.l','guide:lpca-in'],[25.1,-39.1,47.4],'內、外側各一條，穿鞏膜後沿水平經線在脈絡膜上腔往前，到睫狀體參與虹膜大動脈環。原模型畫到眼球後上方；眼球內沿水平經線的走向是示意。');
add('muscular','眼動脈肌支','Muscular branches of the ophthalmic artery','e',['guide:muscular'],[20,-41,46],'供應眼外肌，並延續為睫狀前動脈。示意。',{rep:'schematic'});
add('aca','睫狀前動脈','Anterior ciliary arteries','e',['guide:aca'],[31.2,-42.2,72],'由肌支沿四條直肌肌腱往前：上、下、內直肌各 2 條，外直肌 1 條，共 7 條。在角膜緣附近穿鞏膜，與睫狀後長動脈形成虹膜大動脈環；也分支到結膜與鞏膜表層。斜視手術切多條直肌時要注意前段缺血。示意。',{rep:'schematic',snap:true});
add('mac','虹膜大動脈環','Major arterial circle of the iris','e',['guide:mac'],[37.4,-48.8,71.2],'位於睫狀體、虹膜根部，由睫狀後長動脈＋睫狀前動脈組成，供應睫狀體與虹膜。示意。',{rep:'schematic',snap:true});
add('mic','虹膜小動脈環','Minor arterial circle of the iris','e',['guide:mic'],[34.3,-48.8,73.8],'在虹膜表面的領狀緣（collarette）附近，由大動脈環發出的放射狀血管連成，常不完整。示意。',{rep:'schematic',snap:true});
add('lacrimal-a','淚腺動脈','Lacrimal artery','e',['Lacrimal artery.l'],[30,-36,50],'眼動脈分支，沿外直肌上緣到淚腺；分出瞼外側動脈，並有回返腦膜支經眶上裂。',{snap:true});
add('supraorbital-a','眶上動脈','Supra-orbital artery','e',['Supra-orbital artery.l'],[26,-22,82],'經眶上孔／切跡到額部，與眶上神經伴行。',{snap:true});
add('supratrochlear-a','滑車上動脈','Supratrochlear artery','e',['Supratrochlear artery.l'],[12.4,-25,85],'眼動脈終支之一，在滑車上方出眼窩到額部內側。',{snap:true});
add('ethmoidal-a','前／後篩動脈','Anterior & posterior ethmoidal arteries','e',['Anterior ethmoidal artery.l','Posterior ethmoidal artery.l'],[10,-44,55],'經眼窩內側壁的篩孔到篩竇、鼻腔與顱前窩。前篩動脈是鼻出血的重要來源之一。',{snap:true});
add('dorsal-nasal','鼻背動脈','Dorsal nasal artery','e',['guide:dorsal-nasal'],[10,-34,79],'眼動脈終支之一，在內眥上方出眼窩到鼻背，與內眥動脈（面動脈）吻合 → 頸內、頸外動脈系統在此相連。示意。',{rep:'schematic',snap:true});
add('med-palp','瞼內側動脈＋眼瞼動脈弓','Medial palpebral arteries & palpebral arcades','e',['guide:med-palp','guide:arcade'],[22,-38.6,80.3],'瞼內側動脈分上、下支，與瞼外側動脈連成上、下眼瞼動脈弓。示意，位置為眼瞼近似。',{rep:'schematic',snap:true});
add('lat-palp','瞼外側動脈','Lateral palpebral artery','e',['guide:lat-palp'],[44.5,-44,71],'由淚腺動脈分出，到外眥接上、下眼瞼動脈弓。示意。',{rep:'schematic',snap:true});
add('vortex','渦靜脈','Vortex veins','e',['guide:vortex'],[39.2,-40.7,60.3],'4（–6）條，每象限一條，在赤道後方穿出鞏膜，收集脈絡膜、睫狀體、虹膜的靜脈血；上方兩條入上眼靜脈、下方兩條入下眼靜脈。示意。',{rep:'schematic',snap:true});
add('iov','眼下靜脈','Inferior ophthalmic vein','e',['Inferior ophthalmic vein.l'],[18,-49,40],'經眶下裂通翼靜脈叢，也可匯入上眼靜脈或海綿竇。',{snap:true});
add('infraorbital-a','眶下動脈','Infra-orbital artery','e',['Infra-orbital artery.l'],[27,-70,62],'來自上頷動脈（頸外系統），走眶下溝／管到眶下孔，供應下直肌、下斜肌等鄰近構造。',{snap:true});
add('angular-a','內眥動脈','Angular artery','e',['Angular artery.l'],[12,-45,80],'面動脈（頸外系統）的終段，在內眥與鼻背動脈吻合。',{snap:true});

export const labels=rows.map((r,i)=>({...r,number:i+1}));
export const groups={
 q:{title:'小考 10 題',subtitle:'投影片與小考卷上的 10 個構造，一次放在同一顆頭裡',camera:'oblique',bone:.14,cuts:{},cortex:.12,flow:'1 視乳突　2 硬腦膜　3 Meyer’s loop　4 鋸齒緣　5 Gennari 線　6 距狀溝　7 視交叉　8 鼻淚管　9 上頷竇　10 蝶竇'},
 f:{title:'顱底孔洞',subtitle:'移除顱蓋與腦，看每條腦神經穿出哪個孔',camera:'top',bone:1,cuts:{y:[-30,false]},cortex:0,flow:'一篩二視　三四一六眶上裂　二圓三卵　七八內聽　九十十一頸靜脈　十二舌下'},
 n:{title:'12 對腦神經',subtitle:'從腦底認腦神經的發出位置，再追到它穿的孔',camera:'bottom',bone:0,cuts:{},cortex:.18,flow:'I 嗅　II 視　III 動眼　IV 滑車　V 三叉　VI 外旋　VII 顏面　VIII 前庭耳蝸　IX 舌咽　X 迷走　XI 副　XII 舌下'},
 o:{title:'眼窩與共同腱環',subtitle:'掀開眼窩頂，看眶上裂的神經誰在腱環內、誰在腱環外',camera:'top',bone:1,cuts:{y:[-33,false]},cortex:0,flow:'上斜四、外直六、其他三　｜　腱環外：IV、額、淚、上眼靜脈　｜　腱環內：III、鼻睫、VI'},
 e:{title:'眼部血管',subtitle:'眼動脈分支、睫狀循環（前／後、長／短）、視網膜中央動靜脈、渦靜脈',camera:'oblique',bone:0,cuts:{},cortex:0,flow:'ICA → 眼動脈 → CRA（視網膜內層）｜睫狀後短（脈絡膜、視神經頭）｜睫狀後長＋睫狀前 → 虹膜大動脈環｜靜脈：CRV、渦靜脈 → 上／下眼靜脈 → 海綿竇'},
 c:{title:'海綿竇與蝶鞍',subtitle:'冠狀切面：外側壁 III→IV→V1→V2，腔內 ICA＋VI；在「切面」可前後移動',camera:'front',bone:1,cuts:{z:[20,true]},cortex:0,flow:'外壁三四一二，裡面六和頸內動脈　｜　蝶竇 → 蝶鞍 → 腦下垂體'},
 g:{title:'睫狀神經節與瞳孔反射',subtitle:'由上往下看：三種根、長短睫狀神經、上丘三下丘四',camera:'top',bone:0,cuts:{},cortex:0,flow:'光 → 視網膜 → CN II → 頂蓋前區 → 兩側 EW 核 → CN III → 睫狀神經節 → 短睫狀神經 → 瞳孔括約肌'},
 v:{title:'視覺路徑與皮質',subtitle:'從視神經四段到 V1，楔葉在上看下面、舌回在下看上面',camera:'top',bone:0,cuts:{},cortex:.12,flow:'視網膜 → 視神經 → 視交叉 → 視束 → LGN → 視放射 → V1（BA17）'}
};
export const themeOrder=['q','f','n','o','e','c','g','v'];
