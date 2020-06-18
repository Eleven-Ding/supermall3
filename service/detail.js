import request from './network'

export function getDetail(iid) {
  return request({
    url:'http://152.136.185.210:8000/api/n3/detail',
    data:{
      iid
    }
  })
}
export function getCommend() {
  return request({
    url:'http://152.136.185.210:8000/api/n3/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}
export class Shop{
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.fans=shopInfo.cFans;
    this.sell=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods;
    this.url=shopInfo.shopUrl;
  }
}
export class GoodsParams{
  constructor(info,rule) {
    this.image = info.images ? info.images[0] : '';
    this.set=info.set
    this.desc=rule.desc
    this.disclaimer=rule.disclaimer
    this.tables=rule.tables[0]/*~~~*/
  }
}