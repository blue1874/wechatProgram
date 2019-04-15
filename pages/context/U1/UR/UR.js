// pages/context/theFirstUnit/theFirstUnit.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // height: 0,
    currentData: 0,
    chosenWord: [],
    state: 0,
    words: [{ word: "げんかん", property: "名", meaning: "玄关，门厅", status: false },
      { word: "ろうか", property: "名", meaning: "走廊", status: false },
      { word: "トイレ", property: "名", meaning: "卫生间，厕所", status: false },
      { word: "よくしつ", property: "名", meaning: "浴室，洗澡间", status: false },
      { word: "せんめんじょ", property: "名", meaning: "盥洗室", status: false },
      { word: "だいどころ", property: "名", meaning: "厨房", status: false },
      { word: "いま", property: "名", meaning: "起居室", status: false },
      { word: "しんしつ", property: "名", meaning: "卧室", status: false },
      { word: "わしつ", property: "名", meaning: "日式房间", status: false },
      { word: "ベランダ", property: "名", meaning: "阳台", status: false },
      { word: "にわ", property: "名", meaning: "院子", status: false },
      { word: "やね", property: "名", meaning: "屋顶，房顶", status: false },
      { word: "ボスト", property: "名", meaning: "信箱", status: false },
      { word: "ガレージ", property: "名", meaning: "汽车房，车库", status: false },
      { word: "ドア", property: "名", meaning: "门", status: false },
      { word: "まど", property: "名", meaning: "窗户", status: false },
      { word: "カーテン", property: "名", meaning: "窗帘", status: false },
      { word: "エアコン", property: "名", meaning: "空调", status: false },
      { word: "ソファー", property: "名", meaning: "沙发", status: false },
      { word: "テーブル", property: "名", meaning: "桌子", status: false },
      { word: "じゅうたん", property: "名", meaning: "地毯", status: false },
      { word: "フローリング", property: "名", meaning: "木质地板", status: false },
      { word: "でんわ", property: "名", meaning: "电话", status: false },
      { word: "リモコン", property: "名", meaning: "遥控器", status: false },
      { word: "ごみばこ", property: "名", meaning: "垃圾箱", status: false },
      { word: "ほんだな", property: "名", meaning: "书架", status: false },
      { word: "ビデオ", property: "名", meaning: "录像机", status: false },
      { word: "まないた", property: "名", meaning: "切菜板", status: false },
      { word: "ほうちょう", property: "名", meaning: "菜刀", status: false },
      { word: "だいどころようせんざい", property: "名", meaning: "厨房用洗涤剂", status: false },
      { word: "ふきん", property: "名", meaning: "抹布", status: false },
      { word: "ながし", property: "名", meaning: "洗碗池，水池", status: false },
      { word: "じゃぐち", property: "名", meaning: "水龙头", status: false },
      { word: "なべ", property: "名", meaning: "锅", status: false },
      { word: "オーブン", property: "名", meaning: "烤炉，烤箱", status: false },
      { word: "でんしレンジ", property: "名", meaning: "微波炉", status: false },
      { word: "しょっきだな", property: "名", meaning: "餐具柜，碗橱", status: false },
      { word: "れいぞうこ", property: "名", meaning: "冰箱", status: false },
      { word: "せんめんだい", property: "名", meaning: "洗脸台", status: false },
      { word: "かがみ", property: "名", meaning: "镜子", status: false },
      { word: "はブラシ", property: "名", meaning: "牙刷", status: false },
      { word: "ドライヤー", property: "名", meaning: "吹风机", status: false },
      { word: "タオル", property: "名", meaning: "毛巾", status: false },
      { word: "シャワー", property: "名", meaning: "淋浴", status: false },
      { word: "バスタブ", property: "名", meaning: "浴槽，浴缸", status: false },
      { word: "せっけん", property: "名", meaning: "肥皂，香皂", status: false },
      { word: "シャンプー", property: "名", meaning: "洗发水", status: false },
      { word: "せんたくき", property: "名", meaning: "洗衣机", status: false },
      { word: "かんそうき", property: "名", meaning: "烘干机", status: false },
      { word: "たいじゅうけい", property: "名", meaning: "体重秤", status: false },
      { word: "べんき", property: "名", meaning: "马桶", status: false },
      { word: "トイレットペーパー", property: "名", meaning: "卫生纸", status: false },
      { word: "ベッド", property: "名", meaning: "床", status: false },
      { word: "まくら", property: "名", meaning: "枕头", status: false },
      { word: "シーツ", property: "名", meaning: "床单", status: false },
      { word: "かけぶとん", property: "名", meaning: "被子", status: false },
      { word: "でんきスタンド", property: "名", meaning: "台灯", status: false },
      { word: "めざましどけい", property: "名", meaning: "闹钟", status: false },
      { word: "クローゼット", property: "名", meaning: "衣柜", status: false },
      { word: "しょうじ", property: "名", meaning: "拉门，拉窗", status: false },
      { word: "おしいれ", property: "名", meaning: "壁橱", status: false },
      { word: "ふすま", property: "名", meaning: "隔扇", status: false },
      { word: "ざぶとん", property: "名", meaning: "座垫", status: false },
      { word: "たたみ", property: "名", meaning: "草垫，草席", status: false },]
,
    exercises: [{ question: '1.（看汉字选假名）李さんは　東京（大学）の　学生です。', options: [{ op: 'A', value: 'たいかく', status: 0 }, { op: 'B', value: 'だいかく', status: 0 }, { op: 'C', value: 'たいがく', status: 0 }, { op: 'D', value: 'だいがく', status: 0 }], correctAns: ['D'] },
{ question: '2.これは　（3000）円です。　', options: [{ op: 'A', value: 'さんせん', status: 0 }, { op: 'B', value: 'さんぜん', status: 0 }, { op: 'C', value: 'よんせん', status: 0 }, { op: 'D', value: 'よんぜん', status: 0 }], correctAns: ['B'] },
{ question: '3.（机）の上に　地図が　あります。', options: [{ op: 'A', value: 'つくえ', status: 0 }, { op: 'B', value: 'いす', status: 0 }, { op: 'C', value: 'き', status: 0 }, { op: 'D', value: 'いき', status: 0 }], correctAns: ['A'] },
{ question: '4.あれは　（家族）の　写真です。', options: [{ op: 'A', value: 'じゃそく', status: 0 }, { op: 'B', value: 'じゃぞく', status: 0 }, { op: 'C', value: 'かそく', status: 0 }, { op: 'D', value: 'かぞく', status: 0 }], correctAns: ['D'] },
{ question: '5.これは　だれの　（辞書）ですか。', options: [{ op: 'A', value: 'ししょ', status: 0 }, { op: 'B', value: 'じしょ', status: 0 }, { op: 'C', value: 'ししょう', status: 0 }, { op: 'D', value: 'じしょう', status: 0 }], correctAns: ['B'] },
{ question: '6.（受付）は　このビルの　3階に　あります。', options: [{ op: 'A', value: 'うっつけ', status: 0 }, { op: 'B', value: 'うっけ', status: 0 }, { op: 'C', value: 'うけつけ', status: 0 }, { op: 'D', value: 'うけっつ', status: 0 }], correctAns: ['C'] },
{ question: '7.（食堂）は　だれも　いません。', options: [{ op: 'A', value: 'しょくとう', status: 0 }, { op: 'B', value: 'しょとう', status: 0 }, { op: 'C', value: 'しょくどう', status: 0 }, { op: 'D', value: 'しょどう', status: 0 }], correctAns: ['C'] },
{ question: '8.よろしくお（願い）します。', options: [{ op: 'A', value: 'ねがい', status: 0 }, { op: 'B', value: 'ねかい', status: 0 }, { op: 'C', value: 'ちかい', status: 0 }, { op: 'D', value: 'ちがい', status: 0 }], correctAns: ['A'] },
{ question: '9.これは　（雑誌）です。', options: [{ op: 'A', value: 'ざし', status: 0 }, { op: 'B', value: 'ざっし', status: 0 }, { op: 'C', value: 'さし', status: 0 }, { op: 'D', value: 'さっし', status: 0 }], correctAns: ['B'] },
{ question: '10.これは　わたしの　（息子）です。', options: [{ op: 'A', value: 'むすめ', status: 0 }, { op: 'B', value: 'おとめ', status: 0 }, { op: 'C', value: 'むすこ', status: 0 }, { op: 'D', value: 'おとな', status: 0 }], correctAns: ['C'] },
{ question: '11.いすの　（下）に　猫が　います。', options: [{ op: 'A', value: 'うえ', status: 0 }, { op: 'B', value: 'した', status: 0 }, { op: 'C', value: 'なか', status: 0 }, { op: 'D', value: 'そと', status: 0 }], correctAns: ['B'] },
{ question: '12.私は　（一人）暮らしです。', options: [{ op: 'A', value: 'ひとり', status: 0 }, { op: 'B', value: 'ふたり', status: 0 }, { op: 'C', value: 'いちじん', status: 0 }, { op: 'D', value: 'いちにん', status: 0 }], correctAns: ['A'] },
{ question: '13.（看假名选汉字）あなたの　（じてんしゃ）は　どちらですか。', options: [{ op: 'A', value: '自動車', status: 0 }, { op: 'B', value: '車', status: 0 }, { op: 'C', value: '自転車', status: 0 }, { op: 'D', value: '電話', status: 0 }], correctAns: ['C'] },
{ question: '14.これは　名古屋の　お（みやげ）です、どうぞ。', options: [{ op: 'A', value: '名産', status: 0 }, { op: 'B', value: '名産品', status: 0 }, { op: 'C', value: '都産', status: 0 }, { op: 'D', value: '土産', status: 0 }], correctAns: ['D'] },
{ question: '15.会議室の　となりは　（としょしつ）です。', options: [{ op: 'A', value: '図書室', status: 0 }, { op: 'B', value: '読書室', status: 0 }, { op: 'C', value: '図書館', status: 0 }, { op: 'D', value: '読書館', status: 0 }], correctAns: ['A'] },
{ question: '16.あなたの　（そふ）は　おいくつですか。', options: [{ op: 'A', value: '祖父', status: 0 }, { op: 'B', value: '祖母', status: 0 }, { op: 'C', value: '母', status: 0 }, { op: 'D', value: '父', status: 0 }], correctAns: ['A'] },
{ question: '17.これは　（くるま）の　かぎです。', options: [{ op: 'A', value: '傘', status: 0 }, { op: 'B', value: '本', status: 0 }, { op: 'C', value: '家', status: 0 }, { op: 'D', value: '車', status: 0 }], correctAns: ['D'] },
{ question: '18.男の　人は　車の　（うしろ）に　います。', options: [{ op: 'A', value: '裏', status: 0 }, { op: 'B', value: '後ろ', status: 0 }, { op: 'C', value: '表', status: 0 }, { op: 'D', value: '外', status: 0 }], correctAns: ['B'] },
{ question: '19.これは　JC企画の（しゃちょう）です。', options: [{ op: 'A', value: '社員', status: 0 }, { op: 'B', value: '社長', status: 0 }, { op: 'C', value: '店員', status: 0 }, { op: 'D', value: '店長', status: 0 }], correctAns: ['B'] },
{ question: '20.（きょう）は　木曜日です。', options: [{ op: 'A', value: '今', status: 0 }, { op: 'B', value: '今度', status: 0 }, { op: 'C', value: '明日', status: 0 }, { op: 'D', value: '今日', status: 0 }], correctAns: ['D'] },
{ question: '21.（选词填空）わたしの　部屋は　8（　）に　あります。', options: [{ op: 'A', value: '階', status: 0 }, { op: 'B', value: '本', status: 0 }, { op: 'C', value: '阶', status: 0 }, { op: 'D', value: '层', status: 0 }], correctAns: ['A'] },
{ question: '22.林さんは　中国人ですか　（　）ですか。', options: [{ op: 'A', value: '中国', status: 0 }, { op: 'B', value: '社員', status: 0 }, { op: 'C', value: '日本人', status: 0 }, { op: 'D', value: '学生', status: 0 }], correctAns: ['C'] },
{ question: '23.はじめまして、私は　李です、（　）。', options: [{ op: 'A', value: 'すみません', status: 0 }, { op: 'B', value: 'どうぞよろしく', status: 0 }, { op: 'C', value: 'ありがとう', status: 0 }, { op: 'D', value: 'こちらこそ', status: 0 }], correctAns: ['B'] },
{ question: '24.父の　父は　（　）です。', options: [{ op: 'A', value: 'おとうさん', status: 0 }, { op: 'B', value: 'おかあさん', status: 0 }, { op: 'C', value: 'おじいさん', status: 0 }, { op: 'D', value: 'おばあさん', status: 0 }], correctAns: ['C'] },
{ question: '25.北京旅行社は　中国の（　）です。', options: [{ op: 'A', value: '学生', status: 0 }, { op: 'B', value: '先生', status: 0 }, { op: 'C', value: '社員', status: 0 }, { op: 'D', value: '企業', status: 0 }], correctAns: ['D'] },
{ question: '26.（　）は　日本の町です。', options: [{ op: 'A', value: '北京', status: 0 }, { op: 'B', value: '横浜', status: 0 }, { op: 'C', value: '犬', status: 0 }, { op: 'D', value: '机', status: 0 }], correctAns: ['B'] },
{ question: '27.マンションの　隣は　（　）です。', options: [{ op: 'A', value: 'ホテル', status: 0 }, { op: 'B', value: 'カメラ', status: 0 }, { op: 'C', value: 'フランス', status: 0 }, { op: 'D', value: 'パソコン', status: 0 }], correctAns: ['A'] },
{ question: '28.（同义句转换）あなたは　（何歳ですか）。', options: [{ op: 'A', value: 'いくらですか', status: 0 }, { op: 'B', value: 'いつですか', status: 0 }, { op: 'C', value: 'なんじですか', status: 0 }, { op: 'D', value: 'おいくつですか', status: 0 }], correctAns: ['D'] },
{ question: '29.李さんの　部屋は　（どこですか）。', options: [{ op: 'A', value: 'いくらですか', status: 0 }, { op: 'B', value: 'どこにですか', status: 0 }, { op: 'C', value: 'いくらに　ありますか', status: 0 }, { op: 'D', value: 'どこに　ありますか', status: 0 }], correctAns: ['D'] },
{ question: '30.受付は　（どこですか）。', options: [{ op: 'A', value: 'どちらですか。', status: 0 }, { op: 'B', value: 'どらちですか', status: 0 }, { op: 'C', value: 'どちらにですか', status: 0 }, { op: 'D', value: 'どらちにですか', status: 0 }], correctAns: ['A']},
    ],
  },

  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData == e.target.dataset.current) {
      return 0;
    } 
    else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  //单词选中事件
  wordChosen: function(e) {
    const that = this;
    var i = e.target.dataset.index;
    if (app.globalData.chosenWord.indexOf(that.data.words[i]) == -1) 
    {
      that.data.words[i].status = 1;
      app.globalData.chosenWord.push(that.data.words[i]);
      console.log(app.globalData.chosenWord);
    }
    else 
    {
      app.globalData.chosenWord.splice(app.globalData.chosenWord.indexOf(that.data.words[i]), 1);
      that.data.words[i].status = 0;
      console.log(app.globalData.chosenWord);
    }
    if (app.globalData.chosenWord.length > 0) that.data.state = 1;
    else if (app.globalData.chosenWord.length == 0) that.data.state = 0;
    that.setData({
      words: that.data.words,
      state: that.data.state
    })
  },

  wordAllChosen: function(e) {
    const that = this;
    for(var i = 0; i < that.data.words.length; i++) {
      if (app.globalData.chosenWord.indexOf(that.data.words[i]) == -1) 
      {
        that.data.words[i].status = 1;
        app.globalData.chosenWord.push(that.data.words[i]);
        console.log(app.globalData.chosenWord);
      }
    }
    that.setData({
      words: that.data.words,
      state: 1
    })
  },

  wordUnChosen: function (e) {
    const that = this;
    for (var i = 0; i < that.data.words.length; i++) {
      if (app.globalData.chosenWord.indexOf(that.data.words[i]) == -1) {
        that.data.words[i].status = 1;
        app.globalData.chosenWord.push(that.data.words[i]);
        console.log(app.globalData.chosenWord);
      }
      else {
        app.globalData.chosenWord.splice(app.globalData.chosenWord.indexOf(that.data.words[i]), 1);
        that.data.words[i].status = 0;
        console.log(app.globalData.chosenWord);
      }
      if (app.globalData.chosenWord.length > 0) that.data.state = 1;
      else if (app.globalData.chosenWord.length == 0) that.data.state = 0;
    }
    that.setData({
      words: that.data.words,
      state: that.data.state
    })
  },

  wordInput: function(e) {
    wx.navigateTo({
      url: '../UR/word/recog',
    })
  },

  testBegin: function()
  {
    wx.navigateTo({
      url: '../UR/exercise/recog',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //进入页面清空单词及练习数组，防止其他页面的数据影响到本页面
    app.globalData.chosenWord = [];
    app.globalData.wrongWord = [];
    app.globalData.chosenExercise = [];
    app.globalData.wrongExercise = [];
    app.globalData.chosenExerciseNumber = 0;
    app.globalData.chosenWordNumber = 0;
    app.globalData.wordNumber = this.data.words.length;
    console.log("pageheight：", this.data.height);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // if (getCurrentPages().length >= 1) {
    //   wx.navigateBack({
    //     delta: 1
    //   })
    // }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})