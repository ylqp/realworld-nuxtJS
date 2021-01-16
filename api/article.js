// import request from '@/utils/request'
import {request} from '@/plugins/request'

// 获取文章列表
export const getArticles = params => {
    return request({
        methods: 'GET',
        url: '/api/articles',
        params
    })
}
// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

// 创建文章
export const createArticle = data => {
    return request({
        method: 'POST',
        url: '/api/articles',
        data
    })
}
// 获取用户文章列表
export const getYourFeedArticles = params => {
    return request({
      method: 'GET',
      url: '/api/articles/feed',
      params,
      // headers: {
      //   // 添加用户身份，数据格式：Token空格Token数据
      //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDgxMTYsInVzZXJuYW1lIjoibHB6OTk5IiwiZXhwIjoxNTk3NzQxNTA4fQ.2yO8Fss4hYnvsIN2UYHsutQ1hmYqSSAA-UrIRnP4DOY`
      // }
    })
  }