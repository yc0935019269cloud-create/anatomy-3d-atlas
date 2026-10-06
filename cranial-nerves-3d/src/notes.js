// Study notes shown in the「重點整理」dialog. Buttons with data-go jump to the matching model entry.
const go=(id,text)=>`<button class="go" data-go="${id}">${text}</button>`;
export const notesHTML=`
<h3>小考 10 題</h3>
<table><tr><th>#</th><th>答案</th><th>模型</th></tr>
<tr><td>1</td><td>視乳突 optic papilla（視神經盤）</td><td>${go('optic-papilla','看位置')}</td></tr>
<tr><td>2</td><td>硬腦膜 dura mater</td><td>${go('dura','看位置')}</td></tr>
<tr><td>3</td><td>梅氏環 Meyer’s loop（不是 Baum’s loop）</td><td>${go('meyer','看位置')}</td></tr>
<tr><td>4</td><td>鋸齒緣 ora serrata</td><td>${go('ora-serrata','看位置')}</td></tr>
<tr><td>5</td><td>Gennari 線 line of Gennari</td><td>${go('gennari','看位置')}</td></tr>
<tr><td>6</td><td>距狀溝 calcarine sulcus</td><td>${go('calcarine','看位置')}</td></tr>
<tr><td>7</td><td>視交叉 optic chiasm</td><td>${go('chiasm','看位置')}</td></tr>
<tr><td>8</td><td>鼻淚管 nasolacrimal duct</td><td>${go('nasolacrimal','看位置')}</td></tr>
<tr><td>9</td><td>上頷竇 maxillary sinus</td><td>${go('maxillary-sinus','看位置')}</td></tr>
<tr><td>10</td><td>蝶竇 sphenoidal sinus</td><td>${go('sphenoid-sinus','看位置')}</td></tr></table>

<h3>顱底孔洞：神經穿過哪個孔</h3>
<table><tr><th>孔</th><th>通過</th><th>模型</th></tr>
<tr><td>篩板篩孔</td><td>CN I</td><td>${go('cribriform','看孔')}</td></tr>
<tr><td>視神經管</td><td>CN II＋眼動脈（＋交感纖維）</td><td>${go('optic-canal','看孔')}</td></tr>
<tr><td>眶上裂</td><td>III、IV、V1、VI（＋上眼靜脈）</td><td>${go('sof','看孔')}</td></tr>
<tr><td>圓孔</td><td>V2</td><td>${go('rotundum','看孔')}</td></tr>
<tr><td>卵圓孔</td><td>V3</td><td>${go('ovale','看孔')}</td></tr>
<tr><td>棘孔</td><td>中腦膜動脈</td><td>${go('spinosum','看孔')}</td></tr>
<tr><td>內耳道</td><td>VII、VIII</td><td>${go('iam','看孔')}</td></tr>
<tr><td>頸靜脈孔</td><td>IX、X、XI</td><td>${go('jugular','看孔')}</td></tr>
<tr><td>舌下神經管</td><td>XII</td><td>${go('hypoglossal-canal','看孔')}</td></tr></table>
<p class="mnemonic">一篩二視　三四一六眶上裂　二圓三卵　七八內聽　九十十一頸靜脈　十二舌下<br><small>（一＝V1、二＝V2、三＝V3）</small></p>

<h3>眶上裂＋共同腱環</h3>
<table><tr><th>腱環外</th><th>腱環內</th></tr>
<tr><td>${go('orb-4','IV 滑車神經')}</td><td>${go('cn3-sup','III 上支')}　${go('cn3-inf','III 下支')}</td></tr>
<tr><td>${go('frontal-n','額神經（V1）')}</td><td>${go('nasociliary','鼻睫神經（V1）')}</td></tr>
<tr><td>${go('lacrimal-n','淚神經（V1）')}</td><td>${go('orb-6','VI 外旋神經')}</td></tr>
<tr><td>${go('sov','上眼靜脈')}</td><td>（視神經與眼動脈也在腱環內，但走視神經管）</td></tr></table>
<p><b>小修正：</b>V1 其實在進入眶上裂<em>之前</em>（海綿竇前端）就分成額、淚、鼻睫三支，所以三支才能分別走腱環外或腱環內。</p>

<h3>眼外肌：上斜四、外直六、其他三</h3>
<p>SO4 LR6 AO3。${go('so','上斜肌 → IV')}　${go('lr','外直肌 → VI')}　其他（${go('sr','上直')}、${go('ir','下直')}、${go('mr','內直')}、${go('io','下斜')}、${go('lps','提上瞼肌')}）→ III。模型怎麼翻都一樣：看神經最後進哪條肌肉。淚腺在眼窩外上方，可用來判斷 lateral。</p>

<h3>眼部血管</h3>
<table><tr><th>血管</th><th>來源／走向</th><th>供應</th></tr>
<tr><td>${go('cra','視網膜中央動脈')}</td><td>眼動脈第一分支；眼球後約 1 cm 穿入視神經</td><td>視網膜內 2/3（終動脈：阻塞 → 櫻桃紅斑）</td></tr>
<tr><td>${go('spca','睫狀後短動脈')}</td><td>15–20 條，視神經周圍穿鞏膜；形成 ${go('zinn','Zinn-Haller 環')}</td><td>脈絡膜（→ 視網膜外層、感光細胞）、視神經頭</td></tr>
<tr><td>${go('lpca','睫狀後長動脈')}</td><td>內、外側各 1 條，沿水平經線往前</td><td>睫狀體、虹膜（加入大動脈環）</td></tr>
<tr><td>${go('aca','睫狀前動脈')}</td><td>來自 ${go('muscular','肌支')}，沿直肌肌腱；上、下、內直肌各 2、外直肌 1 = 7 條</td><td>前段：加入 ${go('mac','虹膜大動脈環')}；結膜、鞏膜表層</td></tr>
<tr><td>${go('mic','虹膜小動脈環')}</td><td>大動脈環發出放射支，在領狀緣連成</td><td>虹膜</td></tr>
<tr><td>${go('lacrimal-a','淚腺動脈')}</td><td>沿外直肌上緣</td><td>淚腺、${go('lat-palp','瞼外側動脈')}</td></tr>
<tr><td>${go('supraorbital-a','眶上')}、${go('supratrochlear-a','滑車上')}、${go('dorsal-nasal','鼻背')}、${go('med-palp','瞼內側')}</td><td>眼動脈終支</td><td>額部、眼瞼、鼻背（鼻背動脈與${go('angular-a','內眥動脈')}吻合：頸內＋頸外）</td></tr>
<tr><td>${go('ethmoidal-a','前／後篩動脈')}</td><td>經內側壁篩孔</td><td>篩竇、鼻腔</td></tr></table>
<p>靜脈：${go('crv','視網膜中央靜脈')} → 上眼靜脈或海綿竇；${go('vortex','渦靜脈')}（每象限 1 條，赤道後）→ 上／下眼靜脈；${go('sov','上眼靜脈')}經眶上裂入海綿竇，${go('iov','下眼靜脈')}通翼靜脈叢。眼眶與臉部靜脈無瓣膜 → 面部「危險三角」感染可經此到海綿竇。</p>
<p class="mnemonic">視網膜內層靠 CRA，外層靠脈絡膜（睫狀後短）。<br>大動脈環 = 睫狀後長＋睫狀前；睫狀前 7 條（外直肌只有 1 條）。</p>

<h3>海綿竇</h3>
<p>外側壁由上到下：III → IV → V1 → V2（3-4-1-2）。腔內：內頸動脈＋VI＋交感神經叢。VI 緊貼 ICA，海綿竇病變時常最先受影響 → 外直肌麻痺、眼球無法外轉。${go('cavernous','看海綿竇')}　${go('ica','看 ICA')}</p>

<h3>睫狀神經節</h3>
<table><tr><th>根</th><th>來源</th><th>在神經節突觸？</th></tr>
<tr><td>${go('para-root','副交感')}</td><td>EW 核 → CN III 下支</td><td><b>是（唯一）</b></td></tr>
<tr><td>${go('sensory-root','感覺')}</td><td>鼻睫神經</td><td>否</td></tr>
<tr><td>${go('symp-root','交感')}</td><td>內頸動脈交感神經叢</td><td>否</td></tr></table>
<p>${go('short-ciliary','短睫狀神經')}：從神經節出去，可帶副交感＋交感＋感覺。${go('long-ciliary','長睫狀神經')}：由鼻睫神經直接到眼球、繞過神經節，帶感覺＋交感。一秒判斷：從神經節出去 → 短；不經神經節 → 長。</p>

<h3>瞳孔對光反射</h3>
<p>光 → 視網膜 → CN II → ${go('pretectal','頂蓋前區')} → 兩側 ${go('ew','EW 核')} → CN III → ${go('ciliary-ganglion','睫狀神經節')} → 短睫狀神經 → ${go('sphincter','瞳孔括約肌')} → 縮瞳。因為頂蓋前區投射到兩側 EW 核，照一眼：被照眼 direct response，另一眼 consensual response，兩眼都縮。</p>

<h3>視神經</h3>
<p>四段：${go('on-intraocular','眼球內段')}（最短，篩板前無髓鞘）→ ${go('on-orbital','眼窩段')}（最長，S 形）→ ${go('on-canal','視神經管段')} → ${go('on-cranial','顱內段')}。視神經盤沒有 rods／cones → 生理性盲點（中央凹看最清楚）。CN II 是中樞神經延伸，外有 dura、arachnoid、pia，蛛網膜下腔也延伸過來，所以顱內壓升高 → 視乳頭水腫。</p>

<h3>視覺路徑與皮質</h3>
<p>視網膜 → 視神經 → ${go('chiasm','視交叉')}（鼻側交叉、顳側不交叉）→ ${go('optic-tract','視束')} → ${go('lgn','LGN')} → 視放射 → ${go('v1-cortex','V1')}（紋狀皮質，BA 17）。視交叉之後用「視野」想：左視束／左皮質處理雙眼右側視野。${go('cuneus','楔葉')}在距狀溝上方看對側下方視野；${go('lingual','舌回')}在下方看對側上方視野（${go('meyer','Meyer’s loop')} 走顳葉到舌回，${go('baum','Baum’s loop')} 走頂葉到楔葉）。</p>

<h3>水晶體與白內障</h3>
<p>無血管、靠房水；前面較平、後面較凸；上皮只在前囊內側。白內障手術：前囊撕開 → 超音波乳化 → 吸除內容物 → 保留囊袋 → 放入 IOL。殘留上皮增生、移行到後囊 → 後囊混濁 PCO（二次白內障），不是重新長出水晶體。${go('lens','看水晶體')}</p>

<h3>眼窩、鼻竇、腦下垂體</h3>
<p>${go('maxillary-sinus','上頷竇')}在眼窩底下 → blowout fracture。${go('lamina','篩骨紙板')}很薄，旁邊是篩竇。${go('pituitary','腦下垂體')}在蝶鞍，下面是${go('sphenoid-sinus','蝶竇')}：鼻腔 → 蝶竇 → 蝶鞍（${go('transsphenoidal','經蝶竇手術')}）。</p>

<h3>腦幹</h3>
<p>由下往上：延腦 → 橋腦 → 中腦。${go('sc','上丘')}：視覺反射；${go('ic','下丘')}：聽覺。上丘層次有 ${go('nucleus3','III 核')}＋EW 核；下丘層次有 ${go('nucleus4','IV 核')}。上丘三，下丘四。</p>

<h3>最後四句</h3>
<p class="mnemonic">上斜四、外直六、其他三。<br>外壁三四一二，裡面六和頸內動脈。<br>楔葉在上看下面，舌回在下看上面。<br>一篩二視、三四一六眶上裂、二圓三卵、七八內聽、九十十一頸靜脈、十二舌下。</p>`;
