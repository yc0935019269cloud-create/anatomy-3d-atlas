# 來源、授權與改作紀錄

## 既有解剖模型

- Z-Anatomy, Gauthier Kervyn and Marcin Zielinski: https://github.com/Z-Anatomy/Models-of-human-anatomy 。CC BY-SA 4.0，https://creativecommons.org/licenses/by-sa/4.0/ 。本次擷取使用先前已下載的官方 Startup.blend；原始 SHA-256 及路徑在 assets/model-source.json。
- BodyParts3D, Database Center for Life Science (DBCLS): https://lifesciencedb.jp/bp3d/ 。CC BY-SA 2.1 Japan，https://creativecommons.org/licenses/by-sa/2.1/jp/ 。為 Z-Anatomy 的基礎來源之一。
- Brain for Blender, Anderson Winkler / Brainder: https://brainder.org/research/brain-for-blender/ 。CC BY-SA 3.0，https://creativecommons.org/licenses/by-sa/3.0/ 。腦表面為 MRI 衍生模型；作者本人頁面是此處署名的依據。
- Z-Anatomy 列出的腦神經參考：Cranial Nerves and Foramina, Sophia Lappe, University of Dundee / CAHID，CC BY 4.0。這是上游來源紀錄，不表示能逐頂點分辨其來源。

改作：抽取腦、眼、神經、腦血管及蝶骨，評估原有 Blender modifier，轉為 X 向解剖左、Y 向上、Z 向前的座標。原點為原檔 (0,0,1.64m)，網頁單位 mm、GLB 單位 m。匯出只保留頂點 Y>-150mm 的三角形，網頁另外在 Y=-110mm 以下作顯示裁切，減少頸部多餘範圍；未額外 decimate。加入 70 項雙語標籤、代表點及補充示意網格；示意資料不宣稱來自原模型或影像分割。

本專案程式、整理的標籤與衍生模型以 CC BY-SA 4.0 提供；再散布時請保留本檔、來源連結及改作說明。講義及第三方程式碼依以下各自條件處理。

## 使用者講義

`E:/學習/大二上/眼解剖實驗/2.視覺路徑+標號-02.pdf`，13 頁。首頁署名馬偕醫學大學曾廣文；第 2 頁署名陳又溱、2024.11.20。講義、插圖與照片仍屬各原權利人；僅按使用者要求在其本機學習頁保留對照，未重新授權為 CC。若對外分享含原圖的 HTML，須自行取得相應圖片／講義分享權限。

## 解剖關係補充參考

- UTHealth Neuroscience Online, Visual System: https://nba.uth.tmc.edu/neuroanatomy/L8/L8_index.html
- UTHealth Neuroanatomy Laboratory Guide: https://nba.uth.tmc.edu/Assets/pdf/courses/ns_2013_lab_guide.v13.1.0_SCR.pdf
- MR Anatomy of the Anterior Choroidal Artery: https://pmc.ncbi.nlm.nih.gov/articles/PMC7973945/

解說依講義及解剖參考另行整理；未複製參考網站全文。

## 程式依賴

Three.js 0.180.x，MIT；授權原文在 assets/THREE-LICENSE.txt。建置使用 esbuild、@gltf-transform/core，驗證使用 Playwright；依各套件自帶 LICENSE。詳見 package-lock.json。
