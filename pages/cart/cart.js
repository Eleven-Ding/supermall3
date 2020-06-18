// pages/cart/cart.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cartlist:app.getlist()
    })
  },
  onShow(){
    //在这里也设置一下bottom里的count sum\
    this.resetBottom()
    this.setData({
      cartlist:app.getlist()
    })
  },
  resetBottom(){
    let count=0
    let sum=0
    if(app.getlist().length!==0)
    for(let i=0;i<app.getlist().length;i++){
      if(app.getlist()[i].isSelect){
        count+=app.getlist()[i].count
        sum+=app.getlist()[i].count*app.getlist()[i].price
      }
    }
    this.selectComponent("#bottom").setData({
      count:count,
      sum:sum.toFixed(2),
      isSelectAll:app.getSelectAll()
    })
  },
  changeBottom(){
    this.resetBottom()
  },
  isSelectAll(){
    this.resetBottom()
    this.setData({
      cartlist:app.getlist()
    })
  }
}) 