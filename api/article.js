import request from '@/utils/request'

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