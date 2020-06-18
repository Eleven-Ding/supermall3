// pages/cart/childcomponents/cartitem/cart-item.js
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeselect(){
      //改变自身的值
      this.setData({
        "product.isSelect":!this.properties.product.isSelect
      })
      //改app.js里的值
      app.check(this.properties.product.iid)
      //再改bottom的值
      this.triggerEvent("changeBottom")
    },


    
    sub(){
      //改变现在的
      //先判断是不是小于等于
      if(this.properties.product.count>1)
      this.setData({
        "product.count":this.properties.product.count-1
      })
       //改变app.js里的
      app.changecount(-1,this.properties.product.iid)
            //改变bottom里的
            this.triggerEvent("changeBottom")
    },
    add(){
      this.setData({
        "product.count":this.properties.product.count+1
      })
      app.changecount(1,this.properties.product.iid)

      this.triggerEvent("changeBottom")
    }
  }
})
