import request from './network'

export  function getMultiData(){
  return request({
    url:'http://152.136.185.210:8000/api/n3/home/multidata'
  })
}
export  function getHomeGoodsData(type,page) {
  return request({
    url:'http://152.136.185.210:8000/api/n3/home/data',
    data:{
      type,
      page/*
           * 这个是把数据加到url中的
           */
    }
  })
}