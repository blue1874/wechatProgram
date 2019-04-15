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
    words: [{ word: "へや", property: "名", meaning: "房间，屋子", status: 0 },
      { word: "にわ", property: "名", meaning: "院子", status: 0 },
      { word: "いえ", property: "名", meaning: "家", status: 0 },
      { word: "いま", property: "名", meaning: "起居室", status: 0 },
      { word: "れいぞうこ", property: "名", meaning: "冰箱", status: 0 },
      { word: "かべ", property: "名", meaning: "墙壁", status: 0 },
      { word: "スイッチ", property: "名", meaning: "开关", status: 0 },
      { word: "ほんだな", property: "名", meaning: "书架", status: 0 },
      { word: "ベッド", property: "名", meaning: "床", status: 0 },
      { word: "ねこ", property: "名", meaning: "猫", status: 0 },
      { word: "いぬ", property: "名", meaning: "狗", status: 0 },
      { word: "はこ", property: "名", meaning: "盒子，箱子", status: 0 },
      { word: "めがね", property: "名", meaning: "眼镜", status: 0 },
      { word: "ビデオ", property: "名", meaning: "录像机", status: 0 },
      { word: "サッカーボール", property: "名", meaning: "足球", status: 0 },
      { word: "ビール", property: "名", meaning: "啤酒", status: 0 },
      { word: "ウイスキー", property: "名", meaning: "威士忌", status: 0 },
      { word: "こども", property: "名", meaning: "孩子，小孩", status: 0 },
      { word: "きょうだい", property: "名", meaning: "兄弟姐妹", status: 0 },
      { word: "りょうしん", property: "名", meaning: "父母，双亲", status: 0 },
      { word: "いもうと", property: "名", meaning: "妹妹", status: 0 },
      { word: "おとこ", property: "名", meaning: "男", status: 0 },
      { word: "おんな", property: "名", meaning: "女", status: 0 },
      { word: "せいと", property: "名", meaning: "学生", status: 0 },
      { word: "うえ", property: "名", meaning: "上面", status: 0 },
      { word: "そと", property: "名", meaning: "外面", status: 0 },
      { word: "なか", property: "名", meaning: "里面，内部，中间", status: 0 },
      { word: "した", property: "名", meaning: "下面", status: 0 },
      { word: "まえ", property: "名", meaning: "前，前面", status: 0 },
      { word: "たてもの", property: "名", meaning: "大楼（平假名）", status: 0 },
      { word: "ビル", property: "名", meaning: "大楼（片假名）", status: 0 },
      { word: "えいがかん", property: "名", meaning: "电影院", status: 0 },
      { word: "びじゅつかん", property: "名", meaning: "美术馆", status: 0 },
      { word: "たいいくかん", property: "名", meaning: "体育馆", status: 0 },
      { word: "はくぶつかん", property: "名", meaning: "博物馆", status: 0 },
      { word: "としょかん", property: "名", meaning: "图书馆", status: 0 },
      { word: "こうえん", property: "名", meaning: "公园", status: 0 },
      { word: "どうぶつえん", property: "名", meaning: "动物园", status: 0 },
      { word: "ゆうえんち", property: "名", meaning: "游乐园", status: 0 },
      { word: "えき", property: "名", meaning: "车站", status: 0 },
      { word: "くうこう", property: "名", meaning: "机场", status: 0 },
      { word: "しやくしょ", property: "名", meaning: "市政所", status: 0 },
      { word: "しょうぼうしょ", property: "名", meaning: "消防所", status: 0 },
      { word: "けいさつしょ", property: "名", meaning: "警察局", status: 0 },
      { word: "こうばん", property: "名", meaning: "派出所", status: 0 },
      { word: "びょういん", property: "名", meaning: "医院", status: 0 },
      { word: "ぎんこう", property: "名", meaning: "银行", status: 0 },
      { word: "ゆうびんきょく", property: "名", meaning: "邮局", status: 0 },
      { word: "こうじょう", property: "名", meaning: "工厂", status: 0 },
      { word: "げきじょう", property: "名", meaning: "剧场", status: 0 },
      { word: "ちゅうしゃじょう", property: "名", meaning: "停车场", status: 0 },
      { word: "がっこう", property: "名", meaning: "学校", status: 0 },
      { word: "おみせ", property: "名", meaning: "商店", status: 0 },
      { word: "ほんや", property: "名", meaning: "书店", status: 0 },
      { word: "やおや", property: "名", meaning: "蔬菜店", status: 0 },
      { word: "にくや", property: "名", meaning: "肉店", status: 0 },
      { word: "さかなや", property: "名", meaning: "鱼店", status: 0 },
      { word: "そばや", property: "名", meaning: "荞麦面店", status: 0 },
      { word: "とこや", property: "名", meaning: "理发店", status: 0 },]
,
    exercises: [
      { question: '（にわ）に　本が　あります。', options: [{ op: 'A', value: '家', status: 0 }, { op: 'B', value: '居間', status: 0 }, { op: 'C', value: '部屋', status: 0 }, { op: 'D', value: '庭', status: 0 }], correctAns: ['D'] },
{ question: '本棚の　上に　（はこ）が　あります。', options: [{ op: 'A', value: '箱', status: 0 }, { op: 'B', value: '犬', status: 0 }, { op: 'C', value: '猫', status: 0 }, { op: 'D', value: '眼鏡', status: 0 }], correctAns: ['A'] },
{ question: '食堂の　隣に　（としょしつ）が　あります。', options: [{ op: 'A', value: '図書館', status: 0 }, { op: 'B', value: '図書室', status: 0 }, { op: 'C', value: '公園', status: 0 }, { op: 'D', value: '場所', status: 0 }], correctAns: ['B'] },
{ question: 'ベッドの　上に　（こども）　が　います。', options: [{ op: 'A', value: '妹', status: 0 }, { op: 'B', value: '弟', status: 0 }, { op: 'C', value: '子供', status: 0 }, { op: 'D', value: '息子', status: 0 }], correctAns: ['C'] },
{ question: 'ーご（兄弟）が　いますか。\nーはい、妹が　います。', options: [{ op: 'A', value: 'きゅうたい', status: 0 }, { op: 'B', value: 'きょうたい', status: 0 }, { op: 'C', value: 'きゅうだい', status: 0 }, { op: 'D', value: 'きょうだい', status: 0 }], correctAns: ['D'] },
{ question: '近くに　（地下鉄）が　あります。', options: [{ op: 'A', value: 'ちかてつ', status: 0 }, { op: 'B', value: 'ちがてつ', status: 0 }, { op: 'C', value: 'ちかでつ', status: 0 }, { op: 'D', value: 'ちがでつ', status: 0 }], correctAns: ['A'] },
{ question: 'わたしの　（両親）は　東京に　います。', options: [{ op: 'A', value: 'きょうたい', status: 0 }, { op: 'B', value: 'きょうだい', status: 0 }, { op: 'C', value: 'りょうしん', status: 0 }, { op: 'D', value: 'りょしん', status: 0 }], correctAns: ['C'] },
{ question: 'あの　（男）の子は　生徒です。', options: [{ op: 'A', value: 'おんな', status: 0 }, { op: 'B', value: 'おとこ', status: 0 }, { op: 'C', value: 'おとめ', status: 0 }, { op: 'D', value: 'おとな', status: 0 }], correctAns: ['B'] },
{ question: '部屋に　ねこ（　）。', options: [{ op: 'A', value: 'が　あります', status: 0 }, { op: 'B', value: 'が　います', status: 0 }, { op: 'C', value: 'に　あります', status: 0 }, { op: 'D', value: 'に　います', status: 0 }], correctAns: ['B'] },
{ question: '図書館は　どこ（　）か。', options: [{ op: 'A', value: 'が　あります', status: 0 }, { op: 'B', value: 'が　います', status: 0 }, { op: 'C', value: 'に　あります', status: 0 }, { op: 'D', value: 'に　います', status: 0 }], correctAns: ['C'] },
{ question: 'にわに　犬（　）　猫が　います。', options: [{ op: 'A', value: 'の', status: 0 }, { op: 'B', value: 'と', status: 0 }, { op: 'C', value: 'は', status: 0 }, { op: 'D', value: 'が', status: 0 }], correctAns: ['B'] },
{ question: '壁（　）　スイッチが　あります。', options: [{ op: 'A', value: 'の', status: 0 }, { op: 'B', value: 'の　うえに', status: 0 }, { op: 'C', value: 'の　そとに', status: 0 }, { op: 'D', value: 'に', status: 0 }], correctAns: ['D'] },
{ question: '李さんの　傘は　どこ（　）。', options: [{ op: 'A', value: 'に　ありますか', status: 0 }, { op: 'B', value: 'が　ありますか', status: 0 }, { op: 'C', value: 'にですか', status: 0 }, { op: 'D', value: 'がですか', status: 0 }], correctAns: ['A'] },
{ question: 'ー美術館は　どこに　ありますか。\n－（　）、あそこです。', options: [{ op: 'A', value: 'あのう', status: 0 }, { op: 'B', value: 'ええと', status: 0 }, { op: 'C', value: 'あっ', status: 0 }, { op: 'D', value: 'えっ', status: 0 }], correctAns: ['B'] },
{ question: '（　）は　体育館に　います。', options: [{ op: 'A', value: '本', status: 0 }, { op: 'B', value: 'サッカーボール', status: 0 }, { op: 'C', value: '李さん', status: 0 }, { op: 'D', value: '李さんの　ボール', status: 0 }], correctAns: ['C'] },
{ question: '居間に　だれ（　）　いません。', options: [{ op: 'A', value: 'か', status: 0 }, { op: 'B', value: 'が', status: 0 }, { op: 'C', value: 'は', status: 0 }, { op: 'D', value: 'も', status: 0 }], correctAns: ['D']},
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
      url: '../S4/word/recog',
    })
  },

  testBegin: function()
  {
    wx.navigateTo({
      url: '../S4/exercise/recog',
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