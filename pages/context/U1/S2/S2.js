
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
    words: [{ word: "ざっし", property: "名", meaning: "杂志", status: 0 },
    { word: "じしょ", property: "名", meaning: "词典", status: 0 },
    { word: "カメラ", property: "名", meaning: "照相机", status: 0 },
    { word: "テレビ", property: "名", meaning: "电视机", status: 0 },
    { word: "パソコン", property: "名", meaning: "个人电脑", status: 0 },
    { word: "ラジオ", property: "名", meaning: "收音机", status: 0 },
    { word: "でんわ", property: "名", meaning: "电话", status: 0 },
    { word: "つくえ", property: "名", meaning: "桌子，书桌", status: 0 },
    { word: "いす", property: "名", meaning: "椅子", status: 0 },
    { word: "かぎ", property: "名", meaning: "钥匙，锁", status: 0 },
    { word: "とけい", property: "名", meaning: "钟，表", status: 0 },
    { word: "てちょう", property: "名", meaning: "记事本", status: 0 },
    { word: "しゃしん", property: "名", meaning: "照片", status: 0 },
    { word: "くるま", property: "名", meaning: "车", status: 0 },
    { word: "じてんしゃ", property: "名", meaning: "自行车", status: 0 },
    { word: "おみやげ", property: "名", meaning: "礼物", status: 0 },
    { word: "めいさんひん", property: "名", meaning: "特产，名产", status: 0 },
    { word: "シルク", property: "名", meaning: "丝绸", status: 0 },
    { word: "ハンカチ", property: "名", meaning: "手绢", status: 0 },
    { word: "かいしゃ", property: "名", meaning: "公司", status: 0 },
    { word: "かた", property: "名", meaning: "（敬称）位，人", status: 0 },
    { word: "ひと", property: "名", meaning: "人", status: 0 },
    { word: "かぞく", property: "名", meaning: "家人，家属", status: 0 },
    { word: "はは", property: "名", meaning: "（我）母亲", status: 0 },
    { word: "おかあさん", property: "名", meaning: "母亲", status: 0 },
    { word: "にほんご", property: "名", meaning: "日语", status: 0 },
    { word: "ちゅうごくご", property: "名", meaning: "汉语，中文", status: 0 },
    { word: "これ", property: "代", meaning: "这，这个", status: 0 },
    { word: "それ", property: "代", meaning: "那，那个", status: 0 },
    { word: "あれ", property: "代", meaning: "那，那个", status: 0 },
    { word: "どれ", property: "疑", meaning: "哪个", status: 0 },
    { word: "なん", property: "疑", meaning: "什么", status: 0 },
    { word: "だれ", property: "疑", meaning: "谁", status: 0 },
    { word: "どなた", property: "疑", meaning: "哪位", status: 0 },
    { word: "この", property: "连体", meaning: "这，这个", status: 0 },
    { word: "その", property: "连体", meaning: "那，那个", status: 0 },
    { word: "あの", property: "连体", meaning: "那，那个", status: 0 },
    { word: "どの", property: "连体", meaning: "哪个", status: 0 },
    { word: "えっ", property: "叹", meaning: "啊", status: 0 },
    { word: "わあ", property: "叹", meaning: "哇", status: 0 },
    { word: "ええ", property: "叹", meaning: "（应答）嗯，是", status: 0 },
    { word: "ながしま", property: "专", meaning: "长岛", status: 0 },
    { word: "にほん", property: "专", meaning: "日本", status: 0 },
    { word: "ロンドン", property: "专", meaning: "伦敦", status: 0 },
    { word: "ありがとうございます", property: "短语", meaning: "谢谢", status: 0 },
    { word: "おいくつ", property: "短语", meaning: "多大", status: 0 },
      { word: "そふ", property: "名", meaning: "（我）祖父", status: 0 },
      { word: "そぼ", property: "名", meaning: "（我）祖母", status: 0 },
      { word: "りょうしん", property: "名", meaning: "（我）父母", status: 0 },
      { word: "ちち", property: "名", meaning: "（我）父亲", status: 0 },
      { word: "はは", property: "名", meaning: "（我）母亲", status: 0 },
      { word: "むすこ", property: "名", meaning: "（我）儿子", status: 0 },
      { word: "むすめ", property: "名", meaning: "（我）女儿", status: 0 },
      { word: "きょうだい", property: "名", meaning: "（我）兄弟姐妹", status: 0 },
      { word: "あに", property: "名", meaning: "（我）哥哥", status: 0 },
      { word: "あね", property: "名", meaning: "（我）姐姐", status: 0 },
      { word: "おとうと", property: "名", meaning: "（我）弟弟", status: 0 },
      { word: "いもうと", property: "名", meaning: "（我）妹妹", status: 0 },
      { word: "おじ", property: "名", meaning: "（我）伯伯，叔叔，舅舅，姑父", status: 0 },
      { word: "おば", property: "名", meaning: "（我）伯母，婶婶，姑姑，舅妈", status: 0 },
      { word: "おじいさん", property: "名", meaning: "（别人）祖父", status: 0 },
      { word: "おばあさん", property: "名", meaning: "（别人）祖母", status: 0 },
      { word: "ごりょうしん", property: "名", meaning: "（别人）父母", status: 0 },
      { word: "おとうさん", property: "名", meaning: "（别人）父亲", status: 0 },
      { word: "おかあさん", property: "名", meaning: "（别人）母亲", status: 0 },
      { word: "むすこさん", property: "名", meaning: "（别人）儿子", status: 0 },
      { word: "むすめさん", property: "名", meaning: "（别人）女儿", status: 0 },
      { word: "ごきょうだい", property: "名", meaning: "（别人）兄弟姐妹", status: 0 },
      { word: "おにいさん", property: "名", meaning: "（别人）哥哥", status: 0 },
      { word: "おねえさん", property: "名", meaning: "（别人）姐姐", status: 0 },
      { word: "おとうとさん", property: "名", meaning: "（别人）弟弟", status: 0 },
      { word: "いもうとさん", property: "名", meaning: "（别人）妹妹", status: 0 },
    { word: "おじさん", property: "名", meaning: "（别人）伯伯，叔叔，舅舅，姑父", status: 0 },
    { word: "おばさん", property: "名", meaning: "（别人）伯母，婶婶，姑姑，舅妈", status: 0 },
    {word:"れい／ぜろ", property:"数", meaning:"0（2种）", status:0},
{word:"いち", property:"数", meaning:"1", status:0},
{word:"に", property:"数", meaning:"2", status:0},
{word:"さん", property:"数", meaning:"3", status:0},
{word:"し／よん", property:"数", meaning:"4（2种）", status:0},
{word:"ご", property:"数", meaning:"5", status:0},
{word:"ろく", property:"数", meaning:"6", status:0},
{word:"しち／なな", property:"数", meaning:"7（2种）", status:0},
{word:"はち", property:"数", meaning:"8", status:0},
{word:"く／きゅう", property:"数", meaning:"9（2种）", status:0},
{word:"じゅう", property:"数", meaning:"10", status:0},
{word:"じゅういち", property:"数", meaning:"11", status:0},
{word:"じゅうに", property:"数", meaning:"12", status:0},
{word:"じゅうさん", property:"数", meaning:"13", status:0},
{word:"じゅうし／じゅうよん", property:"数", meaning:"14（2种）", status:0},
{word:"じゅうご", property:"数", meaning:"15", status:0},
{word:"じゅうろく", property:"数", meaning:"16", status:0},
{word:"じゅうしち／じゅうなな", property:"数", meaning:"17（2种）", status:0},
{word:"じゅうはち", property:"数", meaning:"18", status:0},
{word:"じゅうく／じゅうきゅう", property:"数", meaning:"19（2种）", status:0},
{word:"にじゅう", property:"数", meaning:"20", status:0},
{word:"さんじゅう", property:"数", meaning:"30", status:0},
{word:"よんじゅう", property:"数", meaning:"40", status:0},
{word:"ごじゅう", property:"数", meaning:"50", status:0},
{word:"ろくじゅう", property:"数", meaning:"60", status:0},
{word:"ななじゅう", property:"数", meaning:"70", status:0},
{word:"はちじゅう", property:"数", meaning:"80", status:0},
{word:"きゅうじゅう", property:"数", meaning:"90", status:0},
{word:"ひやく", property:"数", meaning:"100", status:0},
{word:"れいてんいち", property:"数", meaning:"0.1", status:0},
{word:"さんぶんのに", property:"数", meaning:"三分之二", status:0},
{word:"れい／ぜろ", property:"数", meaning:"0（2种）", status:0},
{word:"いち", property:"数", meaning:"1", status:0},
{word:"に", property:"数", meaning:"2", status:0},
{word:"さん", property:"数", meaning:"3", status:0},
{word:"し／よん", property:"数", meaning:"4（2种）", status:0},
{word:"ご", property:"数", meaning:"5", status:0},
{word:"ろく", property:"数", meaning:"6", status:0},
{word:"しち／なな", property:"数", meaning:"7（2种）", status:0},
{word:"はち", property:"数", meaning:"8", status:0},
{word:"く／きゅう", property:"数", meaning:"9（2种）", status:0},
{word:"じゅう", property:"数", meaning:"10", status:0},
{word:"じゅういち", property:"数", meaning:"11", status:0},
{word:"じゅうに", property:"数", meaning:"12", status:0},
{word:"じゅうさん", property:"数", meaning:"13", status:0},
{word:"じゅうし／じゅうよん", property:"数", meaning:"14（2种）", status:0},
{word:"じゅうご", property:"数", meaning:"15", status:0},
{word:"じゅうろく", property:"数", meaning:"16", status:0},
{word:"じゅうしち／じゅうなな", property:"数", meaning:"17（2种）", status:0},
{word:"じゅうはち", property:"数", meaning:"18", status:0},
{word:"じゅうく／じゅうきゅう", property:"数", meaning:"19（2种）", status:0},
{word:"にじゅう", property:"数", meaning:"20", status:0},
{word:"さんじゅう", property:"数", meaning:"30", status:0},
{word:"よんじゅう", property:"数", meaning:"40", status:0},
{word:"ごじゅう", property:"数", meaning:"50", status:0},
{word:"ろくじゅう", property:"数", meaning:"60", status:0},
{word:"ななじゅう", property:"数", meaning:"70", status:0},
{word:"はちじゅう", property:"数", meaning:"80", status:0},
{word:"きゅうじゅう", property:"数", meaning:"90", status:0},
{word:"ひやく", property:"数", meaning:"100", status:0},
{word:"れいてんいち", property:"数", meaning:"0.1", status:0},
{word:"さんぶんのに", property:"数", meaning:"三分之二", status:0},
{ word: "れい／ぜろ", property: "数", meaning: "0（2种）", status: 0 },
{ word: "いち", property: "数", meaning: "1", status: 0 },
{ word: "に", property: "数", meaning: "2", status: 0 },
{ word: "さん", property: "数", meaning: "3", status: 0 },
{ word: "し／よん", property: "数", meaning: "4（2种）", status: 0 },
{ word: "ご", property: "数", meaning: "5", status: 0 },
{ word: "ろく", property: "数", meaning: "6", status: 0 },
{ word: "しち／なな", property: "数", meaning: "7（2种）", status: 0 },
{ word: "はち", property: "数", meaning: "8", status: 0 },
{ word: "く／きゅう", property: "数", meaning: "9（2种）", status: 0 },
{ word: "じゅう", property: "数", meaning: "10", status: 0 },
{ word: "じゅういち", property: "数", meaning: "11", status: 0 },
{ word: "じゅうに", property: "数", meaning: "12", status: 0 },
{ word: "じゅうさん", property: "数", meaning: "13", status: 0 },
{ word: "じゅうし／じゅうよん", property: "数", meaning: "14（2种）", status: 0 },
{ word: "じゅうご", property: "数", meaning: "15", status: 0 },
{ word: "じゅうろく", property: "数", meaning: "16", status: 0 },
{ word: "じゅうしち／じゅうなな", property: "数", meaning: "17（2种）", status: 0 },
{ word: "じゅうはち", property: "数", meaning: "18", status: 0 },
{ word: "じゅうく／じゅうきゅう", property: "数", meaning: "19（2种）", status: 0 },
{ word: "にじゅう", property: "数", meaning: "20", status: 0 },
{ word: "さんじゅう", property: "数", meaning: "30", status: 0 },
{ word: "よんじゅう", property: "数", meaning: "40", status: 0 },
{ word: "ごじゅう", property: "数", meaning: "50", status: 0 },
{ word: "ろくじゅう", property: "数", meaning: "60", status: 0 },
{ word: "ななじゅう", property: "数", meaning: "70", status: 0 },
{ word: "はちじゅう", property: "数", meaning: "80", status: 0 },
{ word: "きゅうじゅう", property: "数", meaning: "90", status: 0 },
{ word: "ひやく", property: "数", meaning: "100", status: 0 },
{ word: "れいてんいち", property: "数", meaning: "0.1", status: 0 },
{ word: "さんぶんのに", property: "数", meaning: "三分之二", status: 0 },
]
,
    exercises: [
      { question: 'これは　（かさ）です。', options: [{ op: 'A', value: '靴', status: 0 }, { op: 'B', value: '本', status: 0 }, { op: 'C', value: '傘', status: 0 }, { op: 'D', value: '机', status: 0 }], correctAns: ['C'] },
      { question: 'それは　（じしょ）です。', options: [{ op: 'A', value: '新聞', status: 0 }, { op: 'B', value: '辞書', status: 0 }, { op: 'C', value: '雑誌', status: 0 }, { op: 'D', value: '時計', status: 0 }], correctAns: ['B'] },
      { question: 'あれは　だれの（しゃしん）ですか。', options: [{ op: 'A', value: '写真', status: 0 }, { op: 'B', value: '時計', status: 0 }, { op: 'C', value: '車', status: 0 }, { op: 'D', value: '照片', status: 0 }], correctAns: ['A'] },
      { question: 'これは　（なん）ですか。', options: [{ op: 'A', value: '母', status: 0 }, { op: 'B', value: '誰', status: 0 }, { op: 'C', value: '人', status: 0 }, { op: 'D', value: '何', status: 0 }], correctAns: ['D'] },
      { question: 'これは　わたしの　（自転車）です。', options: [{ op: 'A', value: 'してんしゃ', status: 0 }, { op: 'B', value: 'じてんしゃ', status: 0 }, { op: 'C', value: 'しでんしゃ', status: 0 }, { op: 'D', value: 'じでんしゃ', status: 0 }], correctAns: ['B'] },
      { question: 'これは　（お土産）です、どうぞ。', options: [{ op: 'A', value: 'おみやげ', status: 0 }, { op: 'B', value: 'おみやけ', status: 0 }, { op: 'C', value: 'おとさん', status: 0 }, { op: 'D', value: 'おどさん', status: 0 }], correctAns: ['A'] },
      { question: 'あれは　李さんの　（鉛筆）です。', options: [{ op: 'A', value: 'えんひつ', status: 0 }, { op: 'B', value: 'せんひつ', status: 0 }, { op: 'C', value: 'えんぴつ', status: 0 }, { op: 'D', value: 'せんぴつ', status: 0 }], correctAns: ['C'] },
      { question: 'わたしの　（母）は　40歳です。', options: [{ op: 'A', value: 'ちち', status: 0 }, { op: 'B', value: 'はは', status: 0 }, { op: 'C', value: 'かあ', status: 0 }, { op: 'D', value: 'とう', status: 0 }], correctAns: ['B'] },
      { question: 'ー小野さんの　本は　（　）ですか。\nーこれです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'なに', status: 0 }, { op: 'C', value: 'どれ', status: 0 }, { op: 'D', value: 'だれ', status: 0 }], correctAns: ['C'] },
      { question: 'ーこれは　お土産です、どうぞ。\n－（　）', options: [{ op: 'A', value: 'どうも　すみません', status: 0 }, { op: 'B', value: 'はい、どうぞ', status: 0 }, { op: 'C', value: 'はい、そうです', status: 0 }, { op: 'D', value: 'ありがとうございます', status: 0 }], correctAns: ['D'] },
      { question: 'ーこれは中国の名産品です、（　）。', options: [{ op: 'A', value: 'どうぞ', status: 0 }, { op: 'B', value: 'どうも', status: 0 }, { op: 'C', value: 'どう', status: 0 }, { op: 'D', value: 'こちらこそ', status: 0 }], correctAns: ['A'] },
      { question: 'ーこれは　だれのパソコンですか。\n－（　）は　李さんのです。', options: [{ op: 'A', value: 'これ', status: 0 }, { op: 'B', value: 'それ', status: 0 }, { op: 'C', value: 'あれ', status: 0 }, { op: 'D', value: 'どれ', status: 0 }], correctAns: ['B'] },
      { question: 'ーあなたは（　）ですか。\nー26歳です。', options: [{ op: 'A', value: 'おいくつ', status: 0 }, { op: 'B', value: 'なん', status: 0 }, { op: 'C', value: 'だれ', status: 0 }, { op: 'D', value: 'どの', status: 0 }], correctAns: ['A'] },
      { question: 'ーこれは　（　）の　カメラですか。\nーわたしのです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'なに', status: 0 }, { op: 'C', value: 'どれ', status: 0 }, { op: 'D', value: 'だれ', status: 0 }], correctAns: ['D'] },
      { question: 'ーあれは　雑誌ですか。\nーいいえ、（　）は　辞書です。', options: [{ op: 'A', value: 'これ', status: 0 }, { op: 'B', value: 'それ', status: 0 }, { op: 'C', value: 'あれ', status: 0 }, { op: 'D', value: 'どれ', status: 0 }], correctAns: ['C'] },
      { question: 'ーわたしは学生です。\nー（　）。ー学生です。　', options: [{ op: 'A', value: 'はっ', status: 0 }, { op: 'B', value: 'えっ', status: 0 }, { op: 'C', value: 'あっ', status: 0 }, { op: 'D', value: 'ええ', status: 0 }], correctAns: ['B'] },
      { question: 'ーこれは　（　）ですか。\nーそれは　かばんです。', options: [{ op: 'A', value: 'なん', status: 0 }, { op: 'B', value: 'なに', status: 0 }, { op: 'C', value: 'どれ', status: 0 }, { op: 'D', value: 'だれ', status: 0 }], correctAns: ['A'], },
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
      url: '../S2/word/recog',
    })
  },

  testBegin: function()
  {
    wx.navigateTo({
      url: '../S2/exercise/recog',
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