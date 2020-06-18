// pages/cart/childcomponents/cartbottom/cartbottom.js
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    sum:0,
    isSelectAll:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeSelectAll(){
      //改变当前的
      //改变上面商品的 
      //改变app.js里面的
      this.setData({
        isSelectAll:!this.data.isSelectAll
      })
      app.changeSelectAll()
      
      this.triggerEvent('isSelectAll')
    }
  }
})
