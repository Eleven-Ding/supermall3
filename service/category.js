import request from "./network";


export function getCategory() {
  return request({
    url: 'http://152.136.185.210:8000/api/n3/category'
  })
}

  export function getSubcategory(maitKey) {
  return request({
    url: 'http://152.136.185.210:8000/api/n3/subcategory',
    data: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: 'http://152.136.185.210:8000/api/n3/subcategory/detail',
    data: {
      miniWallkey,
      type
    },
  
  })
}
