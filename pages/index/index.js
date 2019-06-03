//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    islogin: true,
    isaccount1: false,
    ispassword1: false,
    isaccount2: false,
    ispassword2:false,
    account1: '',
    password1: '',
    account2: '',
    password2: '',
  },
  //事件处理函数
  account1Input(e) {
    if (e.detail.value=== '') {
      this.setData({
        isaccount1: true,
      })
    }else{
      this.setData({
        isaccount1: false,
      })
    }
    this.setData({
      account1: e.detail.value
    })
  },
  password1Input(e) {
    if (e.detail.value === '') {
      this.setData({
        ispassword1: true,
      })
    } else {
      this.setData({
       ispassword1: false,
      })
    }
    this.setData({
      password1: e.detail.value
    })
  },
  account2Input(e) {
    if (e.detail.value === '') {
      this.setData({
        isaccount2: true,
      })
    } else {
      this.setData({
        isaccount2: false,
      })
    }
    this.setData({
      account2: e.detail.value
    })
  },
  password2Input(e) {
    if (e.detail.value === '') {
      this.setData({
        ispassword2: true,
      })
    } else {
      this.setData({
        ispassword2: false,
      })
    }
    this.setData({
      password2: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  login() {
    console.log(this.data.account1, this.data.password1, this.data.account2, this.data.password2)
    if (this.data.account1 === '' || this.data.password1 === '') {
      this.setData({
        isaccount1: true,
        ispassword1: true
      })
    } else {
      wx.navigateTo({
        url: '../unlock/unlock'
      })
    }
  },
  register() {
    console.log(this.data.account1, this.data.password1, this.data.account2, this.data.password2)
    if (this.data.account2 === '' ){
      this.setData({
        isaccount2: true,
      })
    }else if( this.data.password2 === '') {
      this.setData({
        ispassword2: true
      })
    } else {
      wx.navigateTo({
        url: '../unlock/unlock'
      })
    }
  },
  onLoad: function() {}
})