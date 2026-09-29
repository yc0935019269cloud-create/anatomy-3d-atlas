# 來源、授權與改作紀錄

## 解剖模型

- Z-Anatomy, Gauthier Kervyn and Marcin Zielinski: https://github.com/Z-Anatomy/Models-of-human-anatomy 。CC BY-SA 4.0。2026-09-29 由官方 Z-Anatomy.zip 取得 Startup.blend，SHA-256 記錄於 assets/provenance.json（與 skull-atlas-3d 先前下載的檔案相同）。
- BodyParts3D, Database Center for Life Science (DBCLS): https://lifesciencedb.jp/bp3d/ 。CC BY-SA 2.1 Japan。Z-Anatomy 的基礎來源之一。
- Brain for Blender, Anderson Winkler / Brainder: https://brainder.org/research/brain-for-blender/ 。CC BY-SA 3.0。腦表面來源。

改作：從同一個 Blender 檔抽取頭骨與牙齒、12 對腦神經及三叉神經分支、腦神經核、眼球、眼外肌、共同腱環、淚器、海綿竇與眼靜脈、蝶竇與額竇、大腦鐮與小腦天幕、腦幹、深部核團、大腦與小腦皮質、腦血管與中腦膜動脈。評估原有 modifier 與曲線 bevel，沒有 bevel 的神經中心線補 0.6 mm；座標轉為 X 向解剖左、Y 向上（原檔 z−1.64 m）、Z 向前，單位 mm，與 brain-visual-atlas-3d 相同。刪除完全低於 −175 mm 的三角形及極密的視網膜中央動脈，未額外 decimate。另外以程式產生示意幾何（src/schematic.js），並加入 92 項中英標籤與重點整理。示意資料不宣稱來自原模型或影像。

本專案程式、標籤與衍生模型以 CC BY-SA 4.0 提供；再散布時請保留本檔、來源連結與改作說明。

## 學習內容

重點整理依使用者課堂筆記與小考（視光系眼解剖）改寫；未收錄小考卷與課堂照片本身。

## 程式依賴

Three.js 0.180.x，MIT，授權原文 assets/THREE-LICENSE.txt。建置用 esbuild；驗證用 Playwright。
