<template>
  <div class="settings-page">
    <div class="container page">
        <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <form>
                <fieldset>
                    <fieldset class="form-group">
                        <input class="form-control" type="text" placeholder="URL of profile picture">
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="text" placeholder="Your Name">
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you" v-model="user.bio"></textarea>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="email" placeholder="Email" v-model="user.email">
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="password" placeholder="Password">
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right" @click="update()">
                        Update Settings
                    </button>
                </fieldset>
            </form>
            <hr>
            <button class="btn btn-outline-danger" @click="logOut">
                Or click here to logout.
            </button>
        </div>

        </div>
    </div>
  </div>
</template>

<script>
import {updateUser} from '@/api/user'
import {mapMutations} from 'vuex'
export default {
    middleware: 'auth',
    data () {
        return {
            user: {
                email: "",
                bio: "",
                image: "https://i.stack.imgur.com/xHWG8.jpg"
            }
        }
    },
    methods: {
        ...mapMutations(['clearUser']),
        async update () {
            const {data} = await updateUser({user: this.user})
            console.log(data)
        },
        logOut () {
            this.clearUser()
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>