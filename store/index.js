const cookieparser = process.server ? require('cookieparser') :undefined
const Cookie = process.client ? require('js-cookie') : undefined //process.client 为nuxt特有
export const state = () => {
    return {
        // 当前
        user: null
    }
}

export const mutations = {
    setUser (state, data) {
        state.user = data
    },
    clearUser (state) {
        state.user = null
        Cookie.set('user', null)
    }
}

export const actions = {
    // 服务端渲染期间自动调用
    // 作用： 初始化容器数据，传递数据给客户端使用
    nuxtServerInit ({ commit }, { req }) {
        let user = null

        // 
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {

            }
        }
        commit('setUser',user)
    }

}