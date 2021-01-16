// import request from '@/utils/request'
import {request} from '@/plugins/request'


// 获取作者信息
export const getProfile = username => {
    return request({
        method: 'GET',
        url: `/api/profiles/${username}`,
    })
}


