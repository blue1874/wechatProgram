// pages/context/U1/S1/exercise/recog.js
const app = getApp();
var startX, endX;
var moveFlag = true;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    ap:{
      'A': 0, 'B': 1, 'C': 2,'D': 3,'E': 4,'F': 5,'G': 6,'H': 7,'I': 8,'J': 9,'K': 10,'L': 11,'M': 12,'N': 13,'O': 14,'P': 15,'Q': 16,'R': 17,'S': 18,'T': 19,'U': 20,'V': 21,'W': 22,'X': 23,'Y': 24, 'Z': 25,
},
    page: 1,
    currentAnimation: '',
    wrongFlag: false,
    hasInput: false,
    hasChosen: false,
    exercises: [],
    wrongExercise: [],
    currentNumber: 1,
    totalNumber: 1,
    chosenOptions: [],
    correctOps: [],
    maxOptionLength: 4,
    section: '',
    exerciseTitle: '',
  },

  //my function
  //返回选择界面
  // gotoSelect: function () {
  //   const that = this;
  //   wx.navigateTo({
  //     url: '../select/select?section=' + that.data.section,
  //   })
  // },
  touchStart: function (e) {
    startX = e.touches[0].pageX; // 获取触摸时的原点
    moveFlag = true;
  },

  touchMove: function (e) {
    endX = e.touches[0].pageX; // 获取触摸时的原点
    if (moveFlag) {
      if (endX - startX > 50) {
        console.log("move right");
        this.rightMove();
        moveFlag = false;
      }
      if (startX - endX > 50) {
        console.log("move left");
        this.leftMove();
        moveFlag = false;
      }
    }
  },    

  touchEnd: function (e) {
    moveFlag = true; // 回复滑动事件
  },

  leftMove() {
    var that = this;
    var page = that.data.page;
    var currentNumber = that.data.currentNumber;
    if (page == currentNumber) {
      // wx.showToast({
      //   title: '请先完成当前练习！',
      // })
      return;
    }
    this.setData({
      currentAnimation: 'animated slideOutLeft'
    })

    setTimeout(function () {
      that.setData({
        page: page + 1,
        currentAnimation: ''
      });
    }, 800)
  },

  rightMove() {
    var that = this;
    var page = that.data.page;
    if (this.data.page == 1) {
      return
    }
    this.setData({
      currentAnimation: 'animated slideOutRight'
    })

    setTimeout(function () {
      that.setData({
        page: page - 1,
        currentAnimation: ''
      });
    }, 800)
  },

  init: function() {
    const that = this;
    var chosenOptions = new Array();
    var correctOps = new Array();
    for(var i = 1; i <= that.data.exercises.length; i++)
    {
      chosenOptions[i] = new Array();
      correctOps[i] = new Array();
      for (var j = 1; j<= that.data.maxOptionLength; j++) {
        chosenOptions[i].push(false);
        correctOps[i].push(false);
      }
    }
    //console.lo
    that.setData({
      chosenOptions: chosenOptions,
      correctOps: correctOps,
    });
  },

  chosen: function (e) {
    const that = this;
    var i1 = that.data.ap[e.target.dataset.index];
    //console.log("选项字母转数字：", i1)
    var chosenOptions = that.data.chosenOptions;
    var page = that.data.page;
    var currentNumber = that.data.currentNumber;
    var ex = that.data.exercises[currentNumber - 1];
    var correctAns = ex.correctAns;
    var hasChosen = that.data.hasChosen;
    if(page != currentNumber) return;
    if (correctAns.length == 1) //单选题
    {
      for (var i = 0; i < chosenOptions[currentNumber].length; i++)
        chosenOptions[currentNumber][i] = (i == i1 ? true : false);  
    }
    else //多选题
    {
      for (var i = 0; i < chosenOptions[currentNumber].length; i++)
        chosenOptions[currentNumber][i1] = chosenOptions[currentNumber][i1] ? false : true;
    }
    for (var j = 0; j< chosenOptions.length; j++)
      if (chosenOptions[currentNumber][j]) hasChosen = true;
    that.setData({
      chosenOptions: chosenOptions,
      hasChosen: hasChosen,
    })
  },

  //点击提交或小键盘的确定按钮事件
  input: function (e) {
    const that = this;
    var chosenOptions = that.data.chosenOptions;
    var page = that.data.page;
    var currentNumber = that.data.currentNumber;
    var options = that.data.exercises[currentNumber - 1].options;
    var inputOptions = [];
    var correctAns = that.data.exercises[currentNumber - 1].correctAns;
    var correctOps = that.data.correctOps;
    //console.log("options:", options);
    for (var j = 0; j < chosenOptions[currentNumber].length; j++)
      if (chosenOptions[currentNumber][j])
        inputOptions.push(String.fromCharCode(j + 65));
    console.log('输入的选项为：', inputOptions);
    console.log('正确选项为：', correctAns);
    for (var j = 0; j < correctAns.length; j++) {
      //console.log(that.data.ap[correctAns[j]])
      correctOps[currentNumber][that.data.ap[correctAns[j]]] = true;
    }
    if ((inputOptions.toString() == correctAns.toString())) {
        wx.showToast({
          title: '正确！',
          icon: 'success',
          duration: 1000
        })
      //直接跳转下一题
      that.setData({
          wrongFlag: false,
          hasInput: false,
          hasChosen: false,
          chosenOptions: chosenOptions,
          correctOps: correctOps,
          currentNumber: currentNumber + 1,
        });
      that.leftMove();
      }
      else {
        wx.showToast({
          title: '错误',
          image: '/img/icon/error.png',
          duration: 1000
        })
        //错误后高亮显示正确答案
      // for (var j = 0; j < correctAns.length; j++)
      // {
      //   //console.log(that.data.ap[correctAns[j]])
      //   correctOps[currentNumber][that.data.ap[correctAns[j]]] = true;
      // }
      that.data.wrongExercise.push(that.data.exercises[currentNumber - 1]);
      that.setData({ 
        wrongFlag: true,
        hasInput: true,
        wrongExercise: that.data.wrongExercise, 
        correctOps: correctOps
      });
      console.log("wrongExercises has been changed to", that.data.wrongExercise)
      }
    if (currentNumber > that.data.totalNumber) {
      wx.redirectTo({
        url: '../exercise/result?exercises=' + JSON.stringify(that.data.exercises) + '&wrongExercise=' + JSON.stringify(that.data.wrongExercise) + '&section=' + that.data.section + '&exerciseTitle=' + that.data.exerciseTitle,
      })
    }
  },

  wrongComfirm: function () {
    const that = this;
    that.setData({ 
      wrongFlag: false, 
      hasInput: false,
      hasChosen: false,
      chosenOptions: that.data.chosenOptions,
      correctOps: that.data.correctOps,
      currentNumber: (that.data.currentNumber + 1),
      })
    that.leftMove();
    if (that.data.currentNumber > that.data.totalNumber) {
      wx.redirectTo({
        url: '../exercise/result?exercises=' + JSON.stringify(that.data.exercises) + '&wrongExercise=' + JSON.stringify(that.data.wrongExercise) + '&section=' + that.data.section + '&exerciseTitle=' + that.data.exerciseTitle,
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
    that.data.currentNumber = 1;
    that.data.totalNumber = that.data.exercises.length;
    that.init();
    that.setData({ 
      exercises: that.data.exercises,
      currentNumber: that.data.currentNumber,
      totalNumber: that.data.totalNumber,
      section: that.data.section,
      exerciseTitle: options.exerciseTitle,
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