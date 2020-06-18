// pages/detail/childcomponents/DetailGoodsInfo/DetailGoodsInfo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailInfo:{
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
    imageLoad(){
      this.triggerEvent('imageLoad')//将事件发射出去
    }
  }
})
