// componets/d-goods-item/d-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsInfo:{
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
    goodsClick(event){
      const iid= this.properties.goodsInfo.iid
    
       this.triggerEvent('goodsClick',iid)
      //把iid传出去
    }
  }
})
