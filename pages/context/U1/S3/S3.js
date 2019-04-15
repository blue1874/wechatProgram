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
    words: [{ word: "ホテル", property: "名", meaning: "宾馆", status: 0 },
      { word: "コンビニ", property: "名", meaning: "便利店", status: 0 },
      { word: "きっさてん", property: "名", meaning: "咖啡馆", status: 0 },
      { word: "びょういん", property: "名", meaning: "医院", status: 0 },
      { word: "ほんや", property: "名", meaning: "书店", status: 0 },
      { word: "レストラン", property: "名", meaning: "餐馆，西餐馆", status: 0 },
      { word: "ビル", property: "名", meaning: "大楼，大厦", status: 0 },
      { word: "たてもの", property: "名", meaning: "大楼，建筑物", status: 0 },
      { word: "うりば", property: "名", meaning: "柜台，出售处", status: 0 },
      { word: "トイレ", property: "名", meaning: "厕所，盥洗室", status: 0 },
      { word: "いりぐち", property: "名", meaning: "入口", status: 0 },
      { word: "じむしょ", property: "名", meaning: "事务所，办事处", status: 0 },
      { word: "うけつけ", property: "名", meaning: "接待处", status: 0 },
      { word: "バーゲンかいじょう", property: "名", meaning: "降价处理大卖场", status: 0 },
      { word: "エスカレーター", property: "名", meaning: "自动扶梯", status: 0 },
      { word: "ふく", property: "名", meaning: "衣服", status: 0 },
      { word: "コート", property: "名", meaning: "风衣，大水", status: 0 },
      { word: "デジカメ", property: "名", meaning: "数码相机", status: 0 },
      { word: "くに", property: "名", meaning: "国，国家", status: 0 },
      { word: "ちず", property: "名", meaning: "地图", status: 0 },
      { word: "となり", property: "名", meaning: "旁边", status: 0 },
      { word: "しゅうへん", property: "名", meaning: "附近，周边", status: 0 },
      { word: "きょう", property: "名", meaning: "今天", status: 0 },
      { word: "すいようび", property: "名", meaning: "星期三", status: 0 },
      { word: "もくようび", property: "名", meaning: "星期四", status: 0 },
      { word: "ここ", property: "代", meaning: "这里，这儿", status: 0 },
      { word: "そこ", property: "代", meaning: "那里，那儿", status: 0 },
      { word: "あそこ", property: "代", meaning: "那里，那儿", status: 0 },
      { word: "こちら", property: "代", meaning: "这儿，这边", status: 0 },
      { word: "そちら", property: "代", meaning: "那儿，那边", status: 0 },
      { word: "あちら", property: "代", meaning: "那儿，那边", status: 0 },
      { word: "どこ", property: "疑", meaning: "哪里，哪儿", status: 0 },
      { word: "どちら", property: "疑", meaning: "哪儿，哪边", status: 0 },
      { word: "あのう", property: "叹", meaning: "请问，对不起", status: 0 },
      { word: "シャンハイ", property: "专", meaning: "上海", status: 0 },
      { word: "とうきょう", property: "专", meaning: "东京", status: 0 },
      { word: "いくら", property: "短语", meaning: "多少钱", status: 0 },
      { word: " ひゃく", property: "数", meaning: "100", status: 0 },
      { word: "にひゃく", property: "数", meaning: "200", status: 0 },
      { word: "さんびゃく", property: "数", meaning: "300", status: 0 },
      { word: "よんひゃく", property: "数", meaning: "400", status: 0 },
      { word: "ごひゃく", property: "数", meaning: "500", status: 0 },
      { word: "ろっぴゃく", property: "数", meaning: "600", status: 0 },
      { word: "ななひゃく", property: "数", meaning: "700", status: 0 },
      { word: "なっぴゃく", property: "数", meaning: "800", status: 0 },
      { word: "きゅうひゃく", property: "数", meaning: "900", status: 0 },
      { word: "さん", property: "数", meaning: "1000", status: 0 },
      { word: "にせん", property: "数", meaning: "2000", status: 0 },
      { word: "さんぜん", property: "数", meaning: "3000", status: 0 },
      { word: "よんせん", property: "数", meaning: "4000", status: 0 },
      { word: "ごせん", property: "数", meaning: "5000", status: 0 },
      { word: "ろくせん", property: "数", meaning: "6000", status: 0 },
      { word: "ななせん", property: "数", meaning: "7000", status: 0 },
      { word: "はっせん", property: "数", meaning: "8000", status: 0 },
      { word: "きゅうせん", property: "数", meaning: "9000", status: 0 },
      { word: "いちまん", property: "数", meaning: "10000", status: 0 },
      { word: "じゅうまん", property: "数", meaning: "100000", status: 0 },
      { word: "ひゃくまん", property: "数", meaning: "1000000", status: 0 },
      { word: "いっせんまん", property: "数", meaning: "10000000", status: 0 },
      { word: "いちおく", property: "数", meaning: "100000000", status: 0 },
      { word: "きゅうせんに", property: "数", meaning: "9002", status: 0 },
      { word: "きゅうせんにじゅう", property: "数", meaning: "9020", status: 0 },
      { word: "きゅうせんにひゃく", property: "数", meaning: "9200", status: 0 }]
,
    exercises: [
      { question: 'ーすみません、（ほんや）は　どこですか。', options: [{ op: 'A', value: '八百屋', status: 0 }, { op: 'B', value: '本屋', status: 0 }, { op: 'C', value: '翻訳', status: 0 }, { op: 'D', value: '銀行', status: 0 }], correctAns: ['B'] },
{ question: 'ここは　（きっさてん）です。', options: [{ op: 'A', value: '図書館', status: 0 }, { op: 'B', value: '食堂', status: 0 }, { op: 'C', value: '傘店', status: 0 }, { op: 'D', value: '喫茶店', status: 0 }], correctAns: ['D'] },
{ question: '銀行の　（となり）は　図書館です。', options: [{ op: 'A', value: '隣', status: 0 }, { op: 'B', value: '辺', status: 0 }, { op: 'C', value: '右', status: 0 }, { op: 'D', value: '左', status: 0 }], correctAns: ['A'] },
{ question: '今日は　（すいようび）ですか。', options: [{ op: 'A', value: '金曜日', status: 0 }, { op: 'B', value: '木曜日', status: 0 }, { op: 'C', value: '日曜日', status: 0 }, { op: 'D', value: '水曜日', status: 0 }], correctAns: ['D'] },
{ question: 'ーあのう、（売り場）は　どこですか。', options: [{ op: 'A', value: 'いりくち', status: 0 }, { op: 'B', value: 'はいりくち', status: 0 }, { op: 'C', value: 'うりば', status: 0 }, { op: 'D', value: 'うりは', status: 0 }], correctAns: ['C'] },
{ question: 'ー東京の　（地図）は　どこですか。', options: [{ op: 'A', value: 'ちす', status: 0 }, { op: 'B', value: 'ぢす', status: 0 }, { op: 'C', value: 'ちず', status: 0 }, { op: 'D', value: 'ぢず', status: 0 }], correctAns: ['C'] },
{ question: '昨日は　（木曜日）です。', options: [{ op: 'A', value: 'もうようび', status: 0 }, { op: 'B', value: 'もくようび', status: 0 }, { op: 'C', value: 'もうようひ', status: 0 }, { op: 'D', value: 'もくゆうひ', status: 0 }], correctAns: ['B'] },
{ question: '（食堂）は　このビルの　3階です。', options: [{ op: 'A', value: 'しょくどう', status: 0 }, { op: 'B', value: 'しょうどう', status: 0 }, { op: 'C', value: 'しょくとう', status: 0 }, { op: 'D', value: 'しょうとう', status: 0 }], correctAns: ['A'] },
{ question: 'ーホテルは　（　）ですか。\n－そこです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'どれ', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どこ', status: 0 }], correctAns: ['D'] },
{ question: 'ーあのひとは　（　）ですか。\nー小野さんです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'どれ', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どこ', status: 0 }], correctAns: ['C'] },
{ question: 'ーあなたの　傘は　（　）ですか。\n－これです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'どれ', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どこ', status: 0 }], correctAns: ['B'] },
{ question: 'ーあれは　（　）ですか。\nーあれは　病院です。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'どれ', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どこ', status: 0 }], correctAns: ['A'] },
{ question: 'ー病院は　どちらですか。\n－（　）。', options: [{ op: 'A', value: 'あらちです。', status: 0 }, { op: 'B', value: 'あちらです。', status: 0 }, { op: 'C', value: 'あのうです', status: 0 }, { op: 'D', value: 'どちらです。', status: 0 }], correctAns: ['B'] },
{ question: 'ーここは　病院です（　）、銀行ですか。', options: [{ op: 'A', value: 'か', status: 0 }, { op: 'B', value: 'が', status: 0 }, { op: 'C', value: 'は', status: 0 }, { op: 'D', value: 'の', status: 0 }], correctAns: ['A'] },
{ question: 'ー（　）、すみません。\n－何ですか。', options: [{ op: 'A', value: 'あの', status: 0 }, { op: 'B', value: 'その', status: 0 }, { op: 'C', value: 'あのう', status: 0 }, { op: 'D', value: 'そのう', status: 0 }], correctAns: ['C'] },
{ question: 'ーこの雑誌（　）　いくらですか。', options: [{ op: 'A', value: 'か', status: 0 }, { op: 'B', value: 'も', status: 0 }, { op: 'C', value: 'は', status: 0 }, { op: 'D', value: 'の', status: 0 }], correctAns: ['C']},
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
      url: '../S3/word/recog',
    })
  },

  testBegin: function()
  {
    wx.navigateTo({
      url: '../S3/exercise/recog',
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