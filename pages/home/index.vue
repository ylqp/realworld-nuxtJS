<template>
  <div class="home-page">

    <div class="banner">
        <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
        </div>
    </div>

    <div class="container page">
        <div class="row">

        <div class="col-md-9">
            <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
                <li v-if="user" class="nav-item">
                    <!-- <a class="nav-link disabled" href="">Your Feed</a> -->
                    <nuxt-link class="nav-link" :to="{
                        name: 'home',
                        query: {
                            tab: 'your_feed'
                        }
                    }">Your Feed</nuxt-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link active" href="">Global Feed</a> -->
                    <nuxt-link class="nav-link" :to="{
                        name: 'home',
                        query: {
                            tab: 'global_feed'
                        }
                    }">Global Feed</nuxt-link>
                </li>
            </ul>
            </div>
            <div class="article-preview"
                v-for="article in articles"
                :key="article.sulg"
                >
                <div class="article-meta">
                    <nuxt-link :to="{
                        name: 'profile',
                        params: {
                            username: article.author.username
                        }
                    }">
                        <img :src="article.author.image" />
                    </nuxt-link>
                    <div class="info">
                        <nuct-link class="author" :to="{
                            name: 'profile',
                            params: {
                                username: article.author.username
                            }
                        }">
                            {{article.author.username}}
                        </nuct-link>
                        <span class="date">{{article.createdAt}}</span>
                    </div>
                    <button class="btn btn-outline-primary btn-sm pull-xs-right">
                    <i class="ion-heart"></i> 29
                    </button>
                </div>
                <nuxt-link class="preview-link"
                    :to="{
                        name: 'article',
                        params: {
                            slug: article.slug
                        }
                    }"
                >
                    <h1>{{article.title}}</h1>
                    <p>{{article.description}}</p>
                    <span>Read more...</span>
                </nuxt-link>
            </div>
            <div class="article-preview" v-show="!articles.length">
                No articles are here... yet.
            </div>
        </div>
        <!-- 分页 -->
        <nav>
            <ul class="pagination">
                <li class="page-item"
                    v-for="aa in totalPage"
                    :key="aa"
                >
                    <nuxt-link class="page-link" 
                                :to="{
                                    name: 'home',
                                    query: {
                                        page: aa,
                                        tag: $route.query.tag
                                    }
                                }"

                    >{{ aa }}</nuxt-link>
                </li>
            </ul>
        </nav>
        <!-- /分页 -->
        <div class="col-md-3">
            <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
                <nuxt-link  
                    :to="{
                        name: 'home',
                        query: {
                            tag: tag
                        }
                    }" 
                    class="tag-pill tag-default"
                    v-for="tag in tags"
                    :key="tag"
                    >{{tag}}</nuxt-link>
            </div>
            </div>
        </div>

        </div>
    </div>

  </div>
</template>

<script>
import {getArticles,getYourFeedArticles} from '@/api/article'
import {getTags} from '@/api/tag'
import { mapState } from 'vuex'
export default {
    name: 'HomeIndex',
    async asyncData( { query } ) {
        
        const limit = 20
        const page = Number.parseInt(query.page || 1)
        const tab = query.tab || 'global_feed'
        const loadArticles = tab === 'global_feed' ? getArticles : getYourFeedArticles
        const { data } = await loadArticles({
            limit: limit,
            offset: (page - 1) * limit
        })
        const { data: tagData } = await getTags()
        // return data
        return {
            articles: data.articles,
            articlesCount: data.articlesCount,
            tags: tagData.tags,
            limit
        }

    },
    watchQuery: ['page', 'tag', 'tab'],
    computed: {
        ...mapState(['user']),
        totalPage () {
            return  Math.ceil(this.articlesCount / this.limit)
            
        }
    }
}
</script>

<style>

</style>