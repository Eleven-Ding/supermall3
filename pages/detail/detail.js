// pages/detail/detail.js
import {
  getDetail,
  Goods,
  Shop,
  getCommend
} from '../../service/detail'
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */

  data: {
    navList: ['商品', '参数', '评论', '推荐'],
    currentIndex: 0,
    TopImage: [], //轮播图数据
    goods: {}, //轮播图下的信息
    shop:[],//店铺信息
    detailInfo:{},//下面的图片
    shopParamsInfo:{},//商品的参数
    goodsComment:{},//这里暂时只展示一个评论
    commendInfo:[],//商品推荐数据
    isShow:false,//是否显示
    position:[0,1000,2000,3000],
    iid:0,
    lowNowPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取传过来的id
    const iid = options.id
    getDetail(iid).then(res => {
      //console.log(res)
      const data=res.data.result
      //请求轮播图数据
      //console.log(res)
      const list = res.data.result.itemInfo.topImages
      this.setData({
        //保存轮播图数据
        TopImage: list,
        iid:iid,
        lowNowPrice:res.data.result.itemInfo.lowNowPrice
      })
      let GoodsComment={}
      if(data.rate.cRate!==0)
      GoodsComment=data.rate.list[0]
      this.setData({
        // 保存轮播图下的信息
        goods:new Goods(data.itemInfo,data.columns,data.shopInfo.services),
        //保存店铺信息
        shop:new Shop(data.shopInfo),
        //保存图片信息
        detailInfo:data.detailInfo,
        shopParamsInfo:data.itemParams,
        //保存评论信息
       goodsComment:GoodsComment
      })
    })
    getCommend().then(res=>{
      //console.log(res)
      this.setData({
        commendInfo:res.data.data.list
      })
    })
  },
  changeIndex(options) {
    //console.log(options)
    //获取点击的index
    const index = options.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
    //在此之前 首先要获取到每个组件的offsetTop
    //在点击的时候跳转到相对应的位置
    wx.pageScrollTo({
     scrollTop: this.data.position[index]
    })
  },
  backHome() {
    wx.navigateBack()
  },
  onPageScroll(options){
    const scrollTop=options.scrollTop
    let flag=scrollTop>=1000
    if(flag!=this.data.isShow)
    this.setData({
      isShow:flag
    })
    let index=0
    if(scrollTop>=this.data.position[3])
    index=3
    else if(scrollTop>=this.data.position[2])
    index=3
    else if(scrollTop>=this.data.position[1])
    index=1

    if(index!==this.data.currentIndex)
    this.setData({
      currentIndex:index
    })
  },
  backTop(){
    wx.pageScrollTo({
    scrollTop:0
    })
  },
  imageLoad(){
    //在这里取到所有组件的offsetTop
    wx.createSelectorQuery().select("#params").boundingClientRect(rect=>{
      // console.log(rect)
      this.setData({
        "position[1]":rect.top-44
      })
    }).exec()
    wx.createSelectorQuery().select("#comment").boundingClientRect(rect=>{
      // console.log(rect)
      this.setData({
        "position[2]":rect.top-44
      })
    }).exec()
    wx.createSelectorQuery().select("#commend").boundingClientRect(rect=>{
      // console.log(rect)
      this.setData({
        "position[3]":rect.top-44
      })
    }).exec()
  },
  addcart(options){
    //需要轮播图的一张图片
    //需要标题
    //需要描述
    //需要价格
    //需要iid
    const product={}
    product.image=this.data.TopImage[0]
    product.title=this.data.goods.title
    product.desc=this.data.goods.desc
    product.price=this.data.lowNowPrice
    product.iid=this.data.iid
    product.count=1
    product.isSelect=true//默认是选上的
    app.add(product).then(res=>{
      wx.showToast({
        title: res,
        mask:true
      })
    })
  }
})