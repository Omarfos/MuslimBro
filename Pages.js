const PAGES = [
    { id: 0, source: require('./assets/quran/000.png') },
    { id: 1, source: require('./assets/quran/001.png') },
    { id: 2, source: require('./assets/quran/002.png') },
    { id: 3, source: require('./assets/quran/003.png') },
    { id: 4, source: require('./assets/quran/004.png') },
    { id: 5, source: require('./assets/quran/005.png') },
    { id: 6, source: require('./assets/quran/006.png') },
    { id: 7, source: require('./assets/quran/007.png') },
    { id: 8, source: require('./assets/quran/008.png') },
    { id: 9, source: require('./assets/quran/009.png') },
    { id: 10, source: require('./assets/quran/010.png') },
    { id: 11, source: require('./assets/quran/011.png') },
    { id: 12, source: require('./assets/quran/012.png') },
    { id: 13, source: require('./assets/quran/013.png') },
    { id: 14, source: require('./assets/quran/014.png') },
    { id: 15, source: require('./assets/quran/015.png') },
    { id: 16, source: require('./assets/quran/016.png') },
    { id: 17, source: require('./assets/quran/017.png') },
    { id: 18, source: require('./assets/quran/018.png') },
    { id: 19, source: require('./assets/quran/019.png') },
    { id: 20, source: require('./assets/quran/020.png') },
    { id: 21, source: require('./assets/quran/021.png') },
    { id: 22, source: require('./assets/quran/022.png') },
    { id: 23, source: require('./assets/quran/023.png') },
    { id: 24, source: require('./assets/quran/024.png') },
    { id: 25, source: require('./assets/quran/025.png') },
    { id: 26, source: require('./assets/quran/026.png') },
    { id: 27, source: require('./assets/quran/027.png') },
    { id: 28, source: require('./assets/quran/028.png') },
    { id: 29, source: require('./assets/quran/029.png') },
    { id: 30, source: require('./assets/quran/030.png') },
    { id: 31, source: require('./assets/quran/031.png') },
    { id: 32, source: require('./assets/quran/032.png') },
    { id: 33, source: require('./assets/quran/033.png') },
    { id: 34, source: require('./assets/quran/034.png') },
    { id: 35, source: require('./assets/quran/035.png') },
    { id: 36, source: require('./assets/quran/036.png') },
    { id: 37, source: require('./assets/quran/037.png') },
    { id: 38, source: require('./assets/quran/038.png') },
    { id: 39, source: require('./assets/quran/039.png') },
    { id: 40, source: require('./assets/quran/040.png') },
    { id: 41, source: require('./assets/quran/041.png') },
    { id: 42, source: require('./assets/quran/042.png') },
    { id: 43, source: require('./assets/quran/043.png') },
    { id: 44, source: require('./assets/quran/044.png') },
    { id: 45, source: require('./assets/quran/045.png') },
    { id: 46, source: require('./assets/quran/046.png') },
    { id: 47, source: require('./assets/quran/047.png') },
    { id: 48, source: require('./assets/quran/048.png') },
    { id: 49, source: require('./assets/quran/049.png') },
    { id: 50, source: require('./assets/quran/050.png') },
    { id: 51, source: require('./assets/quran/051.png') },
    { id: 52, source: require('./assets/quran/052.png') },
    { id: 53, source: require('./assets/quran/053.png') },
    { id: 54, source: require('./assets/quran/054.png') },
    { id: 55, source: require('./assets/quran/055.png') },
    { id: 56, source: require('./assets/quran/056.png') },
    { id: 57, source: require('./assets/quran/057.png') },
    { id: 58, source: require('./assets/quran/058.png') },
    { id: 59, source: require('./assets/quran/059.png') },
    { id: 60, source: require('./assets/quran/060.png') },
    { id: 61, source: require('./assets/quran/061.png') },
    { id: 62, source: require('./assets/quran/062.png') },
    { id: 63, source: require('./assets/quran/063.png') },
    { id: 64, source: require('./assets/quran/064.png') },
    { id: 65, source: require('./assets/quran/065.png') },
    { id: 66, source: require('./assets/quran/066.png') },
    { id: 67, source: require('./assets/quran/067.png') },
    { id: 68, source: require('./assets/quran/068.png') },
    { id: 69, source: require('./assets/quran/069.png') },
    { id: 70, source: require('./assets/quran/070.png') },
    { id: 71, source: require('./assets/quran/071.png') },
    { id: 72, source: require('./assets/quran/072.png') },
    { id: 73, source: require('./assets/quran/073.png') },
    { id: 74, source: require('./assets/quran/074.png') },
    { id: 75, source: require('./assets/quran/075.png') },
    { id: 76, source: require('./assets/quran/076.png') },
    { id: 77, source: require('./assets/quran/077.png') },
    { id: 78, source: require('./assets/quran/078.png') },
    { id: 79, source: require('./assets/quran/079.png') },
    { id: 80, source: require('./assets/quran/080.png') },
    { id: 81, source: require('./assets/quran/081.png') },
    { id: 82, source: require('./assets/quran/082.png') },
    { id: 83, source: require('./assets/quran/083.png') },
    { id: 84, source: require('./assets/quran/084.png') },
    { id: 85, source: require('./assets/quran/085.png') },
    { id: 86, source: require('./assets/quran/086.png') },
    { id: 87, source: require('./assets/quran/087.png') },
    { id: 88, source: require('./assets/quran/088.png') },
    { id: 89, source: require('./assets/quran/089.png') },
    { id: 90, source: require('./assets/quran/090.png') },
    { id: 91, source: require('./assets/quran/091.png') },
    { id: 92, source: require('./assets/quran/092.png') },
    { id: 93, source: require('./assets/quran/093.png') },
    { id: 94, source: require('./assets/quran/094.png') },
    { id: 95, source: require('./assets/quran/095.png') },
    { id: 96, source: require('./assets/quran/096.png') },
    { id: 97, source: require('./assets/quran/097.png') },
    { id: 98, source: require('./assets/quran/098.png') },
    { id: 99, source: require('./assets/quran/099.png') },
    { id: 100, source: require('./assets/quran/100.png') },
    { id: 101, source: require('./assets/quran/101.png') },
    { id: 102, source: require('./assets/quran/102.png') },
    { id: 103, source: require('./assets/quran/103.png') },
    { id: 104, source: require('./assets/quran/104.png') },
    { id: 105, source: require('./assets/quran/105.png') },
    { id: 106, source: require('./assets/quran/106.png') },
    { id: 107, source: require('./assets/quran/107.png') },
    { id: 108, source: require('./assets/quran/108.png') },
    { id: 109, source: require('./assets/quran/109.png') },
    { id: 110, source: require('./assets/quran/110.png') },
    { id: 111, source: require('./assets/quran/111.png') },
    { id: 112, source: require('./assets/quran/112.png') },
    { id: 113, source: require('./assets/quran/113.png') },
    { id: 114, source: require('./assets/quran/114.png') },
    { id: 115, source: require('./assets/quran/115.png') },
    { id: 116, source: require('./assets/quran/116.png') },
    { id: 117, source: require('./assets/quran/117.png') },
    { id: 118, source: require('./assets/quran/118.png') },
    { id: 119, source: require('./assets/quran/119.png') },
    { id: 120, source: require('./assets/quran/120.png') },
    { id: 121, source: require('./assets/quran/121.png') },
    { id: 122, source: require('./assets/quran/122.png') },
    { id: 123, source: require('./assets/quran/123.png') },
    { id: 124, source: require('./assets/quran/124.png') },
    { id: 125, source: require('./assets/quran/125.png') },
    { id: 126, source: require('./assets/quran/126.png') },
    { id: 127, source: require('./assets/quran/127.png') },
    { id: 128, source: require('./assets/quran/128.png') },
    { id: 129, source: require('./assets/quran/129.png') },
    { id: 130, source: require('./assets/quran/130.png') },
    { id: 131, source: require('./assets/quran/131.png') },
    { id: 132, source: require('./assets/quran/132.png') },
    { id: 133, source: require('./assets/quran/133.png') },
    { id: 134, source: require('./assets/quran/134.png') },
    { id: 135, source: require('./assets/quran/135.png') },
    { id: 136, source: require('./assets/quran/136.png') },
    { id: 137, source: require('./assets/quran/137.png') },
    { id: 138, source: require('./assets/quran/138.png') },
    { id: 139, source: require('./assets/quran/139.png') },
    { id: 140, source: require('./assets/quran/140.png') },
    { id: 141, source: require('./assets/quran/141.png') },
    { id: 142, source: require('./assets/quran/142.png') },
    { id: 143, source: require('./assets/quran/143.png') },
    { id: 144, source: require('./assets/quran/144.png') },
    { id: 145, source: require('./assets/quran/145.png') },
    { id: 146, source: require('./assets/quran/146.png') },
    { id: 147, source: require('./assets/quran/147.png') },
    { id: 148, source: require('./assets/quran/148.png') },
    { id: 149, source: require('./assets/quran/149.png') },
    { id: 150, source: require('./assets/quran/150.png') },
    { id: 151, source: require('./assets/quran/151.png') },
    { id: 152, source: require('./assets/quran/152.png') },
    { id: 153, source: require('./assets/quran/153.png') },
    { id: 154, source: require('./assets/quran/154.png') },
    { id: 155, source: require('./assets/quran/155.png') },
    { id: 156, source: require('./assets/quran/156.png') },
    { id: 157, source: require('./assets/quran/157.png') },
    { id: 158, source: require('./assets/quran/158.png') },
    { id: 159, source: require('./assets/quran/159.png') },
    { id: 160, source: require('./assets/quran/160.png') },
    { id: 161, source: require('./assets/quran/161.png') },
    { id: 162, source: require('./assets/quran/162.png') },
    { id: 163, source: require('./assets/quran/163.png') },
    { id: 164, source: require('./assets/quran/164.png') },
    { id: 165, source: require('./assets/quran/165.png') },
    { id: 166, source: require('./assets/quran/166.png') },
    { id: 167, source: require('./assets/quran/167.png') },
    { id: 168, source: require('./assets/quran/168.png') },
    { id: 169, source: require('./assets/quran/169.png') },
    { id: 170, source: require('./assets/quran/170.png') },
    { id: 171, source: require('./assets/quran/171.png') },
    { id: 172, source: require('./assets/quran/172.png') },
    { id: 173, source: require('./assets/quran/173.png') },
    { id: 174, source: require('./assets/quran/174.png') },
    { id: 175, source: require('./assets/quran/175.png') },
    { id: 176, source: require('./assets/quran/176.png') },
    { id: 177, source: require('./assets/quran/177.png') },
    { id: 178, source: require('./assets/quran/178.png') },
    { id: 179, source: require('./assets/quran/179.png') },
    { id: 180, source: require('./assets/quran/180.png') },
    { id: 181, source: require('./assets/quran/181.png') },
    { id: 182, source: require('./assets/quran/182.png') },
    { id: 183, source: require('./assets/quran/183.png') },
    { id: 184, source: require('./assets/quran/184.png') },
    { id: 185, source: require('./assets/quran/185.png') },
    { id: 186, source: require('./assets/quran/186.png') },
    { id: 187, source: require('./assets/quran/187.png') },
    { id: 188, source: require('./assets/quran/188.png') },
    { id: 189, source: require('./assets/quran/189.png') },
    { id: 190, source: require('./assets/quran/190.png') },
    { id: 191, source: require('./assets/quran/191.png') },
    { id: 192, source: require('./assets/quran/192.png') },
    { id: 193, source: require('./assets/quran/193.png') },
    { id: 194, source: require('./assets/quran/194.png') },
    { id: 195, source: require('./assets/quran/195.png') },
    { id: 196, source: require('./assets/quran/196.png') },
    { id: 197, source: require('./assets/quran/197.png') },
    { id: 198, source: require('./assets/quran/198.png') },
    { id: 199, source: require('./assets/quran/199.png') },
    { id: 200, source: require('./assets/quran/200.png') },
    { id: 201, source: require('./assets/quran/201.png') },
    { id: 202, source: require('./assets/quran/202.png') },
    { id: 203, source: require('./assets/quran/203.png') },
    { id: 204, source: require('./assets/quran/204.png') },
    { id: 205, source: require('./assets/quran/205.png') },
    { id: 206, source: require('./assets/quran/206.png') },
    { id: 207, source: require('./assets/quran/207.png') },
    { id: 208, source: require('./assets/quran/208.png') },
    { id: 209, source: require('./assets/quran/209.png') },
    { id: 210, source: require('./assets/quran/210.png') },
    { id: 211, source: require('./assets/quran/211.png') },
    { id: 212, source: require('./assets/quran/212.png') },
    { id: 213, source: require('./assets/quran/213.png') },
    { id: 214, source: require('./assets/quran/214.png') },
    { id: 215, source: require('./assets/quran/215.png') },
    { id: 216, source: require('./assets/quran/216.png') },
    { id: 217, source: require('./assets/quran/217.png') },
    { id: 218, source: require('./assets/quran/218.png') },
    { id: 219, source: require('./assets/quran/219.png') },
    { id: 220, source: require('./assets/quran/220.png') },
    { id: 221, source: require('./assets/quran/221.png') },
    { id: 222, source: require('./assets/quran/222.png') },
    { id: 223, source: require('./assets/quran/223.png') },
    { id: 224, source: require('./assets/quran/224.png') },
    { id: 225, source: require('./assets/quran/225.png') },
    { id: 226, source: require('./assets/quran/226.png') },
    { id: 227, source: require('./assets/quran/227.png') },
    { id: 228, source: require('./assets/quran/228.png') },
    { id: 229, source: require('./assets/quran/229.png') },
    { id: 230, source: require('./assets/quran/230.png') },
    { id: 231, source: require('./assets/quran/231.png') },
    { id: 232, source: require('./assets/quran/232.png') },
    { id: 233, source: require('./assets/quran/233.png') },
    { id: 234, source: require('./assets/quran/234.png') },
    { id: 235, source: require('./assets/quran/235.png') },
    { id: 236, source: require('./assets/quran/236.png') },
    { id: 237, source: require('./assets/quran/237.png') },
    { id: 238, source: require('./assets/quran/238.png') },
    { id: 239, source: require('./assets/quran/239.png') },
    { id: 240, source: require('./assets/quran/240.png') },
    { id: 241, source: require('./assets/quran/241.png') },
    { id: 242, source: require('./assets/quran/242.png') },
    { id: 243, source: require('./assets/quran/243.png') },
    { id: 244, source: require('./assets/quran/244.png') },
    { id: 245, source: require('./assets/quran/245.png') },
    { id: 246, source: require('./assets/quran/246.png') },
    { id: 247, source: require('./assets/quran/247.png') },
    { id: 248, source: require('./assets/quran/248.png') },
    { id: 249, source: require('./assets/quran/249.png') },
    { id: 250, source: require('./assets/quran/250.png') },
    { id: 251, source: require('./assets/quran/251.png') },
    { id: 252, source: require('./assets/quran/252.png') },
    { id: 253, source: require('./assets/quran/253.png') },
    { id: 254, source: require('./assets/quran/254.png') },
    { id: 255, source: require('./assets/quran/255.png') },
    { id: 256, source: require('./assets/quran/256.png') },
    { id: 257, source: require('./assets/quran/257.png') },
    { id: 258, source: require('./assets/quran/258.png') },
    { id: 259, source: require('./assets/quran/259.png') },
    { id: 260, source: require('./assets/quran/260.png') },
    { id: 261, source: require('./assets/quran/261.png') },
    { id: 262, source: require('./assets/quran/262.png') },
    { id: 263, source: require('./assets/quran/263.png') },
    { id: 264, source: require('./assets/quran/264.png') },
    { id: 265, source: require('./assets/quran/265.png') },
    { id: 266, source: require('./assets/quran/266.png') },
    { id: 267, source: require('./assets/quran/267.png') },
    { id: 268, source: require('./assets/quran/268.png') },
    { id: 269, source: require('./assets/quran/269.png') },
    { id: 270, source: require('./assets/quran/270.png') },
    { id: 271, source: require('./assets/quran/271.png') },
    { id: 272, source: require('./assets/quran/272.png') },
    { id: 273, source: require('./assets/quran/273.png') },
    { id: 274, source: require('./assets/quran/274.png') },
    { id: 275, source: require('./assets/quran/275.png') },
    { id: 276, source: require('./assets/quran/276.png') },
    { id: 277, source: require('./assets/quran/277.png') },
    { id: 278, source: require('./assets/quran/278.png') },
    { id: 279, source: require('./assets/quran/279.png') },
    { id: 280, source: require('./assets/quran/280.png') },
    { id: 281, source: require('./assets/quran/281.png') },
    { id: 282, source: require('./assets/quran/282.png') },
    { id: 283, source: require('./assets/quran/283.png') },
    { id: 284, source: require('./assets/quran/284.png') },
    { id: 285, source: require('./assets/quran/285.png') },
    { id: 286, source: require('./assets/quran/286.png') },
    { id: 287, source: require('./assets/quran/287.png') },
    { id: 288, source: require('./assets/quran/288.png') },
    { id: 289, source: require('./assets/quran/289.png') },
    { id: 290, source: require('./assets/quran/290.png') },
    { id: 291, source: require('./assets/quran/291.png') },
    { id: 292, source: require('./assets/quran/292.png') },
    { id: 293, source: require('./assets/quran/293.png') },
    { id: 294, source: require('./assets/quran/294.png') },
    { id: 295, source: require('./assets/quran/295.png') },
    { id: 296, source: require('./assets/quran/296.png') },
    { id: 297, source: require('./assets/quran/297.png') },
    { id: 298, source: require('./assets/quran/298.png') },
    { id: 299, source: require('./assets/quran/299.png') },
    { id: 300, source: require('./assets/quran/300.png') },
    { id: 301, source: require('./assets/quran/301.png') },
    { id: 302, source: require('./assets/quran/302.png') },
    { id: 303, source: require('./assets/quran/303.png') },
    { id: 304, source: require('./assets/quran/304.png') },
    { id: 305, source: require('./assets/quran/305.png') },
    { id: 306, source: require('./assets/quran/306.png') },
    { id: 307, source: require('./assets/quran/307.png') },
    { id: 308, source: require('./assets/quran/308.png') },
    { id: 309, source: require('./assets/quran/309.png') },
    { id: 310, source: require('./assets/quran/310.png') },
    { id: 311, source: require('./assets/quran/311.png') },
    { id: 312, source: require('./assets/quran/312.png') },
    { id: 313, source: require('./assets/quran/313.png') },
    { id: 314, source: require('./assets/quran/314.png') },
    { id: 315, source: require('./assets/quran/315.png') },
    { id: 316, source: require('./assets/quran/316.png') },
    { id: 317, source: require('./assets/quran/317.png') },
    { id: 318, source: require('./assets/quran/318.png') },
    { id: 319, source: require('./assets/quran/319.png') },
    { id: 320, source: require('./assets/quran/320.png') },
    { id: 321, source: require('./assets/quran/321.png') },
    { id: 322, source: require('./assets/quran/322.png') },
    { id: 323, source: require('./assets/quran/323.png') },
    { id: 324, source: require('./assets/quran/324.png') },
    { id: 325, source: require('./assets/quran/325.png') },
    { id: 326, source: require('./assets/quran/326.png') },
    { id: 327, source: require('./assets/quran/327.png') },
    { id: 328, source: require('./assets/quran/328.png') },
    { id: 329, source: require('./assets/quran/329.png') },
    { id: 330, source: require('./assets/quran/330.png') },
    { id: 331, source: require('./assets/quran/331.png') },
    { id: 332, source: require('./assets/quran/332.png') },
    { id: 333, source: require('./assets/quran/333.png') },
    { id: 334, source: require('./assets/quran/334.png') },
    { id: 335, source: require('./assets/quran/335.png') },
    { id: 336, source: require('./assets/quran/336.png') },
    { id: 337, source: require('./assets/quran/337.png') },
    { id: 338, source: require('./assets/quran/338.png') },
    { id: 339, source: require('./assets/quran/339.png') },
    { id: 340, source: require('./assets/quran/340.png') },
    { id: 341, source: require('./assets/quran/341.png') },
    { id: 342, source: require('./assets/quran/342.png') },
    { id: 343, source: require('./assets/quran/343.png') },
    { id: 344, source: require('./assets/quran/344.png') },
    { id: 345, source: require('./assets/quran/345.png') },
    { id: 346, source: require('./assets/quran/346.png') },
    { id: 347, source: require('./assets/quran/347.png') },
    { id: 348, source: require('./assets/quran/348.png') },
    { id: 349, source: require('./assets/quran/349.png') },
    { id: 350, source: require('./assets/quran/350.png') },
    { id: 351, source: require('./assets/quran/351.png') },
    { id: 352, source: require('./assets/quran/352.png') },
    { id: 353, source: require('./assets/quran/353.png') },
    { id: 354, source: require('./assets/quran/354.png') },
    { id: 355, source: require('./assets/quran/355.png') },
    { id: 356, source: require('./assets/quran/356.png') },
    { id: 357, source: require('./assets/quran/357.png') },
    { id: 358, source: require('./assets/quran/358.png') },
    { id: 359, source: require('./assets/quran/359.png') },
    { id: 360, source: require('./assets/quran/360.png') },
    { id: 361, source: require('./assets/quran/361.png') },
    { id: 362, source: require('./assets/quran/362.png') },
    { id: 363, source: require('./assets/quran/363.png') },
    { id: 364, source: require('./assets/quran/364.png') },
    { id: 365, source: require('./assets/quran/365.png') },
    { id: 366, source: require('./assets/quran/366.png') },
    { id: 367, source: require('./assets/quran/367.png') },
    { id: 368, source: require('./assets/quran/368.png') },
    { id: 369, source: require('./assets/quran/369.png') },
    { id: 370, source: require('./assets/quran/370.png') },
    { id: 371, source: require('./assets/quran/371.png') },
    { id: 372, source: require('./assets/quran/372.png') },
    { id: 373, source: require('./assets/quran/373.png') },
    { id: 374, source: require('./assets/quran/374.png') },
    { id: 375, source: require('./assets/quran/375.png') },
    { id: 376, source: require('./assets/quran/376.png') },
    { id: 377, source: require('./assets/quran/377.png') },
    { id: 378, source: require('./assets/quran/378.png') },
    { id: 379, source: require('./assets/quran/379.png') },
    { id: 380, source: require('./assets/quran/380.png') },
    { id: 381, source: require('./assets/quran/381.png') },
    { id: 382, source: require('./assets/quran/382.png') },
    { id: 383, source: require('./assets/quran/383.png') },
    { id: 384, source: require('./assets/quran/384.png') },
    { id: 385, source: require('./assets/quran/385.png') },
    { id: 386, source: require('./assets/quran/386.png') },
    { id: 387, source: require('./assets/quran/387.png') },
    { id: 388, source: require('./assets/quran/388.png') },
    { id: 389, source: require('./assets/quran/389.png') },
    { id: 390, source: require('./assets/quran/390.png') },
    { id: 391, source: require('./assets/quran/391.png') },
    { id: 392, source: require('./assets/quran/392.png') },
    { id: 393, source: require('./assets/quran/393.png') },
    { id: 394, source: require('./assets/quran/394.png') },
    { id: 395, source: require('./assets/quran/395.png') },
    { id: 396, source: require('./assets/quran/396.png') },
    { id: 397, source: require('./assets/quran/397.png') },
    { id: 398, source: require('./assets/quran/398.png') },
    { id: 399, source: require('./assets/quran/399.png') },
    { id: 400, source: require('./assets/quran/400.png') },
    { id: 401, source: require('./assets/quran/401.png') },
    { id: 402, source: require('./assets/quran/402.png') },
    { id: 403, source: require('./assets/quran/403.png') },
    { id: 404, source: require('./assets/quran/404.png') },
    { id: 405, source: require('./assets/quran/405.png') },
    { id: 406, source: require('./assets/quran/406.png') },
    { id: 407, source: require('./assets/quran/407.png') },
    { id: 408, source: require('./assets/quran/408.png') },
    { id: 409, source: require('./assets/quran/409.png') },
    { id: 410, source: require('./assets/quran/410.png') },
    { id: 411, source: require('./assets/quran/411.png') },
    { id: 412, source: require('./assets/quran/412.png') },
    { id: 413, source: require('./assets/quran/413.png') },
    { id: 414, source: require('./assets/quran/414.png') },
    { id: 415, source: require('./assets/quran/415.png') },
    { id: 416, source: require('./assets/quran/416.png') },
    { id: 417, source: require('./assets/quran/417.png') },
    { id: 418, source: require('./assets/quran/418.png') },
    { id: 419, source: require('./assets/quran/419.png') },
    { id: 420, source: require('./assets/quran/420.png') },
    { id: 421, source: require('./assets/quran/421.png') },
    { id: 422, source: require('./assets/quran/422.png') },
    { id: 423, source: require('./assets/quran/423.png') },
    { id: 424, source: require('./assets/quran/424.png') },
    { id: 425, source: require('./assets/quran/425.png') },
    { id: 426, source: require('./assets/quran/426.png') },
    { id: 427, source: require('./assets/quran/427.png') },
    { id: 428, source: require('./assets/quran/428.png') },
    { id: 429, source: require('./assets/quran/429.png') },
    { id: 430, source: require('./assets/quran/430.png') },
    { id: 431, source: require('./assets/quran/431.png') },
    { id: 432, source: require('./assets/quran/432.png') },
    { id: 433, source: require('./assets/quran/433.png') },
    { id: 434, source: require('./assets/quran/434.png') },
    { id: 435, source: require('./assets/quran/435.png') },
    { id: 436, source: require('./assets/quran/436.png') },
    { id: 437, source: require('./assets/quran/437.png') },
    { id: 438, source: require('./assets/quran/438.png') },
    { id: 439, source: require('./assets/quran/439.png') },
    { id: 440, source: require('./assets/quran/440.png') },
    { id: 441, source: require('./assets/quran/441.png') },
    { id: 442, source: require('./assets/quran/442.png') },
    { id: 443, source: require('./assets/quran/443.png') },
    { id: 444, source: require('./assets/quran/444.png') },
    { id: 445, source: require('./assets/quran/445.png') },
    { id: 446, source: require('./assets/quran/446.png') },
    { id: 447, source: require('./assets/quran/447.png') },
    { id: 448, source: require('./assets/quran/448.png') },
    { id: 449, source: require('./assets/quran/449.png') },
    { id: 450, source: require('./assets/quran/450.png') },
    { id: 451, source: require('./assets/quran/451.png') },
    { id: 452, source: require('./assets/quran/452.png') },
    { id: 453, source: require('./assets/quran/453.png') },
    { id: 454, source: require('./assets/quran/454.png') },
    { id: 455, source: require('./assets/quran/455.png') },
    { id: 456, source: require('./assets/quran/456.png') },
    { id: 457, source: require('./assets/quran/457.png') },
    { id: 458, source: require('./assets/quran/458.png') },
    { id: 459, source: require('./assets/quran/459.png') },
    { id: 460, source: require('./assets/quran/460.png') },
    { id: 461, source: require('./assets/quran/461.png') },
    { id: 462, source: require('./assets/quran/462.png') },
    { id: 463, source: require('./assets/quran/463.png') },
    { id: 464, source: require('./assets/quran/464.png') },
    { id: 465, source: require('./assets/quran/465.png') },
    { id: 466, source: require('./assets/quran/466.png') },
    { id: 467, source: require('./assets/quran/467.png') },
    { id: 468, source: require('./assets/quran/468.png') },
    { id: 469, source: require('./assets/quran/469.png') },
    { id: 470, source: require('./assets/quran/470.png') },
    { id: 471, source: require('./assets/quran/471.png') },
    { id: 472, source: require('./assets/quran/472.png') },
    { id: 473, source: require('./assets/quran/473.png') },
    { id: 474, source: require('./assets/quran/474.png') },
    { id: 475, source: require('./assets/quran/475.png') },
    { id: 476, source: require('./assets/quran/476.png') },
    { id: 477, source: require('./assets/quran/477.png') },
    { id: 478, source: require('./assets/quran/478.png') },
    { id: 479, source: require('./assets/quran/479.png') },
    { id: 480, source: require('./assets/quran/480.png') },
    { id: 481, source: require('./assets/quran/481.png') },
    { id: 482, source: require('./assets/quran/482.png') },
    { id: 483, source: require('./assets/quran/483.png') },
    { id: 484, source: require('./assets/quran/484.png') },
    { id: 485, source: require('./assets/quran/485.png') },
    { id: 486, source: require('./assets/quran/486.png') },
    { id: 487, source: require('./assets/quran/487.png') },
    { id: 488, source: require('./assets/quran/488.png') },
    { id: 489, source: require('./assets/quran/489.png') },
    { id: 490, source: require('./assets/quran/490.png') },
    { id: 491, source: require('./assets/quran/491.png') },
    { id: 492, source: require('./assets/quran/492.png') },
    { id: 493, source: require('./assets/quran/493.png') },
    { id: 494, source: require('./assets/quran/494.png') },
    { id: 495, source: require('./assets/quran/495.png') },
    { id: 496, source: require('./assets/quran/496.png') },
    { id: 497, source: require('./assets/quran/497.png') },
    { id: 498, source: require('./assets/quran/498.png') },
    { id: 499, source: require('./assets/quran/499.png') },
    { id: 500, source: require('./assets/quran/500.png') },
    { id: 501, source: require('./assets/quran/501.png') },
    { id: 502, source: require('./assets/quran/502.png') },
    { id: 503, source: require('./assets/quran/503.png') },
    { id: 504, source: require('./assets/quran/504.png') },
    { id: 505, source: require('./assets/quran/505.png') },
    { id: 506, source: require('./assets/quran/506.png') },
    { id: 507, source: require('./assets/quran/507.png') },
    { id: 508, source: require('./assets/quran/508.png') },
    { id: 509, source: require('./assets/quran/509.png') },
    { id: 510, source: require('./assets/quran/510.png') },
    { id: 511, source: require('./assets/quran/511.png') },
    { id: 512, source: require('./assets/quran/512.png') },
    { id: 513, source: require('./assets/quran/513.png') },
    { id: 514, source: require('./assets/quran/514.png') },
    { id: 515, source: require('./assets/quran/515.png') },
    { id: 516, source: require('./assets/quran/516.png') },
    { id: 517, source: require('./assets/quran/517.png') },
    { id: 518, source: require('./assets/quran/518.png') },
    { id: 519, source: require('./assets/quran/519.png') },
    { id: 520, source: require('./assets/quran/520.png') },
    { id: 521, source: require('./assets/quran/521.png') },
    { id: 522, source: require('./assets/quran/522.png') },
    { id: 523, source: require('./assets/quran/523.png') },
    { id: 524, source: require('./assets/quran/524.png') },
    { id: 525, source: require('./assets/quran/525.png') },
    { id: 526, source: require('./assets/quran/526.png') },
    { id: 527, source: require('./assets/quran/527.png') },
    { id: 528, source: require('./assets/quran/528.png') },
    { id: 529, source: require('./assets/quran/529.png') },
    { id: 530, source: require('./assets/quran/530.png') },
    { id: 531, source: require('./assets/quran/531.png') },
    { id: 532, source: require('./assets/quran/532.png') },
    { id: 533, source: require('./assets/quran/533.png') },
    { id: 534, source: require('./assets/quran/534.png') },
    { id: 535, source: require('./assets/quran/535.png') },
    { id: 536, source: require('./assets/quran/536.png') },
    { id: 537, source: require('./assets/quran/537.png') },
    { id: 538, source: require('./assets/quran/538.png') },
    { id: 539, source: require('./assets/quran/539.png') },
    { id: 540, source: require('./assets/quran/540.png') },
    { id: 541, source: require('./assets/quran/541.png') },
    { id: 542, source: require('./assets/quran/542.png') },
    { id: 543, source: require('./assets/quran/543.png') },
    { id: 544, source: require('./assets/quran/544.png') },
    { id: 545, source: require('./assets/quran/545.png') },
    { id: 546, source: require('./assets/quran/546.png') },
    { id: 547, source: require('./assets/quran/547.png') },
    { id: 548, source: require('./assets/quran/548.png') },
    { id: 549, source: require('./assets/quran/549.png') },
    { id: 550, source: require('./assets/quran/550.png') },
    { id: 551, source: require('./assets/quran/551.png') },
    { id: 552, source: require('./assets/quran/552.png') },
    { id: 553, source: require('./assets/quran/553.png') },
    { id: 554, source: require('./assets/quran/554.png') },
    { id: 555, source: require('./assets/quran/555.png') },
    { id: 556, source: require('./assets/quran/556.png') },
    { id: 557, source: require('./assets/quran/557.png') },
    { id: 558, source: require('./assets/quran/558.png') },
    { id: 559, source: require('./assets/quran/559.png') },
    { id: 560, source: require('./assets/quran/560.png') },
    { id: 561, source: require('./assets/quran/561.png') },
    { id: 562, source: require('./assets/quran/562.png') },
    { id: 563, source: require('./assets/quran/563.png') },
    { id: 564, source: require('./assets/quran/564.png') },
    { id: 565, source: require('./assets/quran/565.png') },
    { id: 566, source: require('./assets/quran/566.png') },
    { id: 567, source: require('./assets/quran/567.png') },
    { id: 568, source: require('./assets/quran/568.png') },
    { id: 569, source: require('./assets/quran/569.png') },
    { id: 570, source: require('./assets/quran/570.png') },
    { id: 571, source: require('./assets/quran/571.png') },
    { id: 572, source: require('./assets/quran/572.png') },
    { id: 573, source: require('./assets/quran/573.png') },
    { id: 574, source: require('./assets/quran/574.png') },
    { id: 575, source: require('./assets/quran/575.png') },
    { id: 576, source: require('./assets/quran/576.png') },
    { id: 577, source: require('./assets/quran/577.png') },
    { id: 578, source: require('./assets/quran/578.png') },
    { id: 579, source: require('./assets/quran/579.png') },
    { id: 580, source: require('./assets/quran/580.png') },
    { id: 581, source: require('./assets/quran/581.png') },
    { id: 582, source: require('./assets/quran/582.png') },
    { id: 583, source: require('./assets/quran/583.png') },
    { id: 584, source: require('./assets/quran/584.png') },
    { id: 585, source: require('./assets/quran/585.png') },
    { id: 586, source: require('./assets/quran/586.png') },
    { id: 587, source: require('./assets/quran/587.png') },
    { id: 588, source: require('./assets/quran/588.png') },
    { id: 589, source: require('./assets/quran/589.png') },
    { id: 590, source: require('./assets/quran/590.png') },
    { id: 591, source: require('./assets/quran/591.png') },
    { id: 592, source: require('./assets/quran/592.png') },
    { id: 593, source: require('./assets/quran/593.png') },
    { id: 594, source: require('./assets/quran/594.png') },
    { id: 595, source: require('./assets/quran/595.png') },
    { id: 596, source: require('./assets/quran/596.png') },
    { id: 597, source: require('./assets/quran/597.png') },
    { id: 598, source: require('./assets/quran/598.png') },
    { id: 599, source: require('./assets/quran/599.png') },
    { id: 600, source: require('./assets/quran/600.png') },
    { id: 601, source: require('./assets/quran/601.png') },
    { id: 602, source: require('./assets/quran/602.png') },
    { id: 603, source: require('./assets/quran/603.png') },
    { id: 604, source: require('./assets/quran/604.png') }
]

PAGES.reverse();

export default PAGES;