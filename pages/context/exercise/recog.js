// pages/context/U1/S1/exercise/recog.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ap:{
      'A': 0,
      'B': 1,
      'C': 2,
      'D': 3,
      'E': 4,
      'F': 5,
      'G': 6,
      'H': 7,
      'I': 8,
      'J': 9,
      'K': 10,
      'L': 11,
      'M': 12,
      'N': 13,
      'O': 14,
      'P': 15,
      'Q': 16,
      'R': 17,
      'S': 18,
      'T': 19,
      'U': 20,
      'V': 21,
      'W': 22,
      'X': 23,
      'Y': 24,
      'Z': 25,
},
    wrongFlag: false,
    hasInput: false,
    hasChosen: false,
    exercises: [],
    wrongExercise: [],
    currentNumber: 1,
    totalNumber: 1,
    chosenOptions: [],
    correctOp: [],
    maxOptionLength: 10,
    section: ''
  },

  //my function
  //返回选择界面
  gotoSelect: function () {
    const that = this;
    wx.navigateTo({
      url: '../select/select?section=' + that.data.section,
    })
  },

  init: function() {
    const that = this;
    that.data.chosenOptions = [];
    that.data.correctOp = [];
    for (var i = 0; i < that.data.maxOptionLength; i++) {
      that.data.chosenOptions.push(false);
      that.data.correctOp.push(false);
    }
    that.setData({
      chosenOptions: that.data.chosenOptions,
      correctOp: that.data.correctOp,
    });
  },

  chosen: function (e) {
    const that = this;
    var i1 = that.data.ap[e.target.dataset.index];
    console.log("选项字母转数字：", i1)
    var chosenOptions = that.data.chosenOptions;
    var ex = that.data.exercises[that.data.currentNumber - 1];
    var correctAns = ex.correctAns;
    var hasChosen = that.data.hasChosen;


    if (correctAns.length == 1) //单选题
    {
      for (var i = 0; i < chosenOptions.length; i++)
        chosenOptions[i] = (i == i1 ? true : false);  
    }
    else //多选题
    {
      for (var i = 0; i < chosenOptions.length; i++)
        chosenOptions[i1] = chosenOptions[i1] ? false : true;
    }
    for (var j = 0; j < chosenOptions.length; j++)
      if (chosenOptions[j]) hasChosen = true;


    that.setData({
      chosenOptions: chosenOptions,
      hasChosen: hasChosen,
    })
  },

  //点击提交或小键盘的确定按钮事件
  input: function (e) {
    const that = this;
    var chosenOptions = that.data.chosenOptions;
    var options = that.data.exercises[that.data.currentNumber - 1].options;
    var inputOptions = [];
    var correctAns = that.data.exercises[that.data.currentNumber - 1].correctAns;
    var correctOp = that.data.correctOp;
    //console.log("options:", options);
    for (var j = 0; j < chosenOptions.length; j++)
      if(chosenOptions[j])
        inputOptions.push(String.fromCharCode(j + 65));
    console.log('输入的选项为：', inputOptions);
    console.log('正确选项为：', correctAns);
    if ((inputOptions.toString() == correctAns.toString())) {
        wx.showToast({
          title: '正确！',
          icon: 'success',
          duration: 1000
        })
      //直接跳转下一题
      that.init();
      that.setData({
          wrongFlag: false,
          hasInput: false,
          hasChosen: false,
          currentNumber: that.data.currentNumber + 1,  
        });
      }
      else {
        wx.showToast({
          title: '错误',
          image: '/img/icon/error.png',
          duration: 1000
        })
        //错误后高亮显示正确答案
      for (var j = 0; j < correctAns.length; j++)
      {
        //console.log(that.data.ap[correctAns[j]])
        correctOp[that.data.ap[correctAns[j]]] = true;
      }
      that.data.wrongExercise.push(that.data.exercises[that.data.currentNumber - 1]);
      that.setData({ 
        wrongFlag: true,
        hasInput: true,
        wrongExercise: that.data.wrongExercise, 
        correctOp: correctOp
      });
      console.log("wrongExercises has been changed to", that.data.wrongExercise)
      }
    if (that.data.currentNumber > that.data.totalNumber) {
      wx.redirectTo({
        url: '../exercise/result?exercises=' + JSON.stringify(that.data.exercises) + '&wrongExercise=' + JSON.stringify(that.data.wrongExercise) + '&section=' + that.data.section,
      })
    }
  },

  wrongComfirm: function () {
    const that = this;
    that.init();
    that.setData({ 
      wrongFlag: false, 
      hasInput: false,
      hasChosen: false,
      currentNumber: (that.data.currentNumber + 1), 
      })
    if (that.data.currentNumber > that.data.totalNumber) {
      wx.redirectTo({
        url: '../exercise/result?exercises=' + JSON.stringify(that.data.exercises) + '&wrongExercise=' + JSON.stringify(that.data.wrongExercise) + '&section=' + that.data.section,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受选择好的数组，并且洗牌
  onLoad: function (options) {
    const that = this;
    that.data.exercises = JSON.parse(options.exercises);
    that.data.section = options.section;
    that.init();
    that.data.currentNumber = 1;
    that.data.totalNumber = that.data.exercises.length;
    that.setData({ 
      exercises: that.data.exercises,
      currentNumber: that.data.currentNumber,
      totalNumber: that.data.totalNumber,
      section: that.data.section,
      });
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