App({
  globalData:{
    cartlsit:[],
    index:0,
    selectAll:true
  },
  add(obj){
    //先通过iid从原先的购物车去找有没有这个商品
    //如果没有就 加进去  如果有 就+1
    return new Promise((resolve,reject)=>{
      const product=this.globalData.cartlsit.find(item=>{
        return item.iid===obj.iid
      })
      //如果里面没有 就加进去
      if(!product){
        this.globalData.cartlsit.push(obj)
        resolve('添加购物车成功！')
      }else{
        product.count++
        resolve('该商品数量+1')
      }
    })

  },
  getlist(){
    return this.globalData.cartlsit
  },
  check(iid){
  const product=  this.globalData.cartlsit.find(item=>{
     return  item.iid===iid
    })
    product.isSelect=!product.isSelect

    //遍历
    for(let i=0;i<this.globalData.cartlsit.length;i++){
      if(!this.globalData.cartlsit[i].isSelect){
      this.globalData.selectAll=false
      return 
      }
    }
    this.globalData.selectAll=true
  },
  changecount(options,iid){
    //console.log(options)
    const product=this.globalData.cartlsit.find(item=>{
      return item.iid===iid
    })
    product.count+=options
   // console.log(this.globalData.cartlsit)
  },
  changeSelectAll(){
    this.globalData.selectAll=!this.globalData.selectAll
    //全部改成select
    for(let i=0;i<this.globalData.cartlsit.length;i++){
      this.globalData.cartlsit[i].isSelect=this.globalData.selectAll
    }
   // console.log(this.getlist())
  },
  getSelectAll(){
    return this.globalData.selectAll
  }
})