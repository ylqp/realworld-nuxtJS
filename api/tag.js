// import request from '@/utils/request'
import {request} from '@/plugins/request'

// 获取文章列表
export const getTags = () => {
    return request({
        methods: 'GET',
        url: '/api/tags',
    })
}