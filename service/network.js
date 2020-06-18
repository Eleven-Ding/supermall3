export default function request(options){

  return new Promise((resolve,reject)=>{
    wx.request({
      timeout:2000,
      url: options.url,
      method:options.method||'get',
      data:options.data||{},
      success:(res)=>{
        resolve(res)
      },
      fail:(err)=>{
        reject(err)
      }
    })
  })
}