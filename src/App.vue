<template>
    <div id="app">
        <Nav :user="user" @logout="logout" />
        <router-view :user="user" @logout="logout" />
    </div>
</template>
<script>
    import Nav from './components/partials/Nav.vue';
    const fb = require('./auth/index.js');
    import Firebase from "firebase";
    // import index from "./auth/index.js";

    export default {
        name: 'app',
        data: function () {
            return {
                user: null
            };
        },
        methods: {
            logout: function () {
                Firebase.auth()
                    .signOut()
                    .then(() => {
                        this.user = null;
                        this.$router.push("/login");
                    });
            }
        },
        mounted() {
            fb.auth.onAuthStateChanged(user => {
                if (user) {
                    this.user = user;
                }
            })
            // Old Pull data, keeping for now in case I need it to pull API info
            /*index.collection("users")
                .doc("kVFy3N7iDxNf8iFjox9V")
                .get()
                .then(snapshot => {
                    this.user = snapshot.data().name;
                });*/
        },
        components: {
            Nav
        }
    };
</script>
<style lang="scss">
    @import "node_modules/bootstrap/scss/bootstrap";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
