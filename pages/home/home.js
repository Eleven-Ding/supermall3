// pages/home/home.js
import {
  getHomeGoodsData
} from '../../service/home'
import {
  getMultiData
} from '../../service/home'

Page({
  data: {
    banners: [],
    recommend: [],
    InfoList: ['新款', '流行', '精选'],
    goods: {
      new: {
        page: 0,
        list: []
      },
      pop: {
        page: 0,
        list: []
      },
      sell: {
        page: 0,
        list: []
      }
    },
    currentType: 'new',
    types:['new','pop','sell'],
    isFixed:false,
    top:0,
    PositionY:0,
    currentIndex:0
  },
  getHomeGoods(type) {
    //console.log(type)
    const page = this.data.goods[type].page + 1;

    getHomeGoodsData(type, page).then(res => {
      // console.log(res)

      const oldlist = this.data.goods[type].list
      const list = res.data.data.list
      oldlist.push(...list)
      const typekey = `goods.${type}.list`
      const typekey2 = `goods.${type}.page`
      this.setData({
        [typekey]: oldlist,
        [typekey2]: page
      })
    })
  },
  onLoad: function (options) {
    wx.request({
      url:"http://47.92.39.166:8124/about",
      success:res=>{ 
        console.log(res)
      }
    })
    //这里先把轮播的数据请求过来
    getMultiData().then(res => {
      //将数据保存下来
      //console.log(res)
      const banners = res.data.data.banner.list //轮播图数据
      const recommend = res.data.data.recommend.list
      this.setData({
        banners: banners,
        recommend: recommend
      })
    })
    //请求展示的商品
    //创建一个组件 用来展示当前list里面东西
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
   //console.log(this.data.goods)

  },
  tabClick(options) {
    //在这里改变currentType
    const index = options.detail
    this.setData({
      currentType:this.data.types[index],
      currentIndex:index
    })
    // console.log(this.selectComponent("#tab1").data.currentIndex)
    this.selectComponent("#tab1").setData({
      currentIndex:this.data.currentIndex
    })
    // console.log(this.selectComponent("#tab2"))
    this.selectComponent("#tab2").setData({
      currentIndex:this.data.currentIndex
    })
  },
  tabClick1(options) {
    //在这里改变currentType
    const index = options.detail
    this.setData({
      currentType:this.data.types[index],
      currentIndex:index
    })
    // console.log(  this.selectComponent("#tab2").data.currentIndex)
    this.selectComponent("#tab1").setData({
      currentIndex:this.data.currentIndex
    })
    // console.log(this.selectComponent("#tab2"))
    this.selectComponent("#tab2").setData({
      currentIndex:this.data.currentIndex
    })
  },
  onReachBottom(){
    //设置上拉加载更多
    this.getHomeGoods(this.data.currentType)
  },

  onPageScroll(options){
    this.setData({
      PositionY:options.scrollTop
    })
    const flag=options.scrollTop>=this.data.top
    if(flag!=this.data.isFixed){
      this.setData({
        isFixed:flag
      })
    }
  },
  backTop(){
    console.log('2333')
    wx.pageScrollTo({
     scrollTop:0
    })
  },  
  handImageLoad(){
    wx.createSelectorQuery().select("#tab1").boundingClientRect(rect=>{
      //console.log(rect)
      this.setData({
        top:rect.top
      })
    }).exec()
  },
  goodsClick(options){
    
    const iid=options.detail
    console.log(iid)
    // 将iid传到详情页 再从详情页请求数据u
    const url= `/pages/detail/detail?id=${iid}`
    wx.navigateTo({
      url:url
    })
  }
})