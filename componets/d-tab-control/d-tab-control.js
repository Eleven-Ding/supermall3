// componets/d-tab-control/d-tab-control.js
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    InfoList:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeIndex(event){
     //console.log(event)
      const index=event.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('tabClick',index)
    }
  }
})
