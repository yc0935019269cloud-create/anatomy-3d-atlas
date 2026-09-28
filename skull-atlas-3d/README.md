# 頭顱骨 3D 解剖圖譜

直接雙擊 **頭顱骨3D.html**，以 Chrome 或 Edge 開啟即可。它包含模型、程式、樣式與四張原圖，不需網路、不需安裝，也不需啟動伺服器。若要傳到其他電腦，複製這一個 HTML 即可。

`index.html` 是同內容的分檔版，必須與 `app.js`、`style.css`、`assets` 一起保留。

## 功能

- 依四張指定圖片整理 49 個不重複的中英文構造；前面、左側、底面、顱底內面四種預設視角。
- 一鍵隱藏／顯示名稱，同時作用於模型標籤、側欄與選取說明。隱藏時保留編號，可用來自測。
- 滑鼠拖曳旋轉、滾輪縮放、右鍵平移；觸控旋轉、雙指縮放。
- 移除顱蓋、顯示／隱藏下頷骨、骨骼分色、半透明、中英語言切換。
- 跨視角中英文搜尋、點選標示突出所屬骨骼，以及四張本機原圖對照。

## 模型與定位的範圍

頭骨與牙齒網格直接擷取自 Z-Anatomy 原始 Blender 檔，50 個網格、79,682 個頂點，未再簡化。並非自行用幾何球體拼成的假頭骨。

實線標籤沿用 Anatomed / Z-Anatomy 指線端點；虛線標籤為新增的近似位置導引。兩者都不能視為已逐孔專業驗證的量測點。原模型不足以逐一辨識嗅孔等微小結構，因此嗅孔標示的是篩板區域，未補造孔洞。眶上孔在此模型呈切跡型態。

左右成對構造通常只標示其中一側。標記會隨模型投影，但指線可穿透表面，旋轉後請留意前後關係。高亮表示構造所屬的骨頭，不代表整塊骨頭都是該孔或突起。顱蓋移除為水平裁切，切緣不是骨縫。

底面觀預設同時裁去顱蓋，避免從枕骨大孔看到遠端顱蓋而誤認孔被填平。左側觀由受試者左側觀看，前方顯示在畫面左邊；與參考圖的左右排版不一定相同。

完整名單見 `完整構造清單.md`；可編輯資料為 `src/labels.js`。原圖中顴弓的兩個組成名稱已依英文統一為「顳骨顴突」和「顴骨顳突」。保留鼻中隔、顴弓、硬腭的組成說明。

## 檔案

- `頭顱骨3D.html`：可攜式單檔離線頁面。
- `assets/skull.glb`：完整頭骨與牙齒模型，單位為公尺，可匯入 Blender；互動標籤另存於 landmarks.json。
- `assets/landmarks.json`：49 項標記、來源、說明與毫米座標。
- `assets/provenance.json`：原始下載網址、修改方式與 SHA-256。
- `assets/Z-Anatomy.zip`、`assets/Startup.blend`：原作者檔案，保留供日後重建。
- `verification/report.json`：離線瀏覽器互動測試結果。

## 重建

一般修改名稱或介面後，在本資料夾執行：

```powershell
npm install
node build.mjs
node src/verify.cjs
```

原始網格擷取腳本是 `src/export_blend.py`（需 Blender）；會先輸出 `assets/skull-original-data.js`。既有 `assets/skull-data.js` 採用其網格，再搭配 `assets/anchors.json` 中的 Anatomed 指線端點。來源模型與標記保留各自座標來源，勿將未校正的 Blender 文字位置當成孔道位置。

`node src/package-assets.mjs` 可更新 GLB、資料清單與來源清單。`node build.mjs` 同時更新分檔版及單檔版。

## 來源與授權

- [Z-Anatomy](https://github.com/Z-Anatomy/Models-of-human-anatomy)：Gauthier Kervyn、Marcin Zielinski；CC BY-SA 4.0。
- [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/)：© The Database Center for Life Science（DBCLS）；CC BY-SA 2.1 Japan。
- [Anatomed](https://github.com/pitfa19/anatomed-mcp)：© 2026 Fabijan Pitlović；CC BY-SA 4.0；本頁部分指線端點由其骨骼 GLB 擷取。
- [OpenStax · The Skull](https://openstax.org/books/anatomy-and-physiology/pages/7-2-the-skull)：解剖關係核對參考，說明依使用者圖片重新撰寫。
- Three.js：MIT，見 `assets/THREE-LICENSE.txt`。

本頁自製程式、標記與衍生模型依 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 提供。四張原圖為使用者提供的本機學習對照資料，其著作權屬原權利人，不包含在本頁 CC 授權之中；對外分享前需自行確認原圖的使用權。

## 完整 PDF

模型下方的「骨質眼窩 PDF」會在新分頁開啟 assets/orbit-atlas-2026-01.pdf，可用瀏覽器的 PDF 閱讀器翻頁與縮放。PDF 在點擊時才載入；隱藏名稱時此入口也會隱藏。若搬移單檔 HTML 並需要此 PDF 入口，請一併保留 assets/orbit-atlas-2026-01.pdf 的相對路徑。PDF 仍依原權利人的授權使用。
