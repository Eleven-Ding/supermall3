// pages/about/childcomponents/leftNavBar/leftnavbar.js
import {getSubcategory,getCategoryDetail} from '../../../../service/category'
const _this=this
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    list:{
      type:Array,
      value:[],
      observer:function(){
        if(typeof(this.properties.list[0])!="undefined"){
        const maitKey=this.properties.list[0].maitKey
        getSubcategory(maitKey).then(res=>{
          //console.log(res.data.data.list)
          this.setData({
            catelist:res.data.data.list
          })
        }) 

        getCategoryDetail(this.data.miniWallkey,this.data.currentType[0]).then(res=>{
          //console.log(res)
          this.setData({
            categoods:res.data,
          })
        })
      }
    }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
    catelist:[],
    categoods:[],
    type:['新款','流行','精选'],
    currentType:['new','pop','sell'],
    miniWallkey:10062603,
    currentIndex2:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(options){
      //console.log(options)
      const index=options.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })

     // 把里面的maitKey取出来
    const maitKey=this.properties.list[index].maitKey
    const miniWallkey=this.properties.list[index].miniWallkey
    //console.log(miniWallkey)
    //获取对应的数据  
    getSubcategory(maitKey).then(res=>{
      this.setData({
        catelist:res.data.data.list,
        miniWallkey:miniWallkey
      })
      getCategoryDetail(this.data.miniWallkey,this.data.currentType[this.data.currentIndex2]).then(res=>{
        this.setData({
          categoods:res.data
        })
      }) 
    })

   

    },
    dtabclick(options){
      //console.log(options)
      const index=options.detail//得到index
      getCategoryDetail(this.data.miniWallkey,this.data.currentType[index]).then(res=>{
        this.setData({
          categoods:res.data,
          currentIndex2:index
        })
      })
    },
    goodsClick(options){
      const iid=options.detail;
      const url= `/pages/detail/detail?id=${iid}`
      wx.navigateTo({
        url:url
      })
    }
  }
})
