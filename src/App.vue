<template>
<v-app id="inspire">
    <v-app-bar app color="white" flat>
        <v-container class="py-0 fill-height">
            <v-img max-height="45" max-width="45" src="./assets/koppee_logo.svg"></v-img>
            <v-btn href="/" text>
                Koppee
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn href="/login" text v-if="!user">
                Login
            </v-btn>
            <!-- <v-title>Hi, {{this.user.name}}</v-title> -->
            <v-btn text href="javascript:void(0)" v-if="user" @click="Logout">
                Logout
            </v-btn>

        </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
        <v-container>
            <v-row>
                <List :user="user"></List>

                <v-col>
                    <v-sheet min-height="70vh" rounded="lg">
                        <router-view :user="user"></router-view>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import axios from 'axios';
import List from '../src/views/List.vue';

export default {
    // computed:{
    //     ...mapGetters({
    //         whatever: 'Auth/isLoggedIn',
    //     })
    // },
    name: 'App',
    // props: ['user'],
    components: {
        List
    },
    data: () => ({
        user: null,
        links: [
            'Koppee',
        ],
        // items: [{
        //         title: "Home",
        //         link: "/"
        //     },
        //     {
        //         title: "Add Post",
        //         link: "/add-post"
        //     },
        //     {
        //         title: "About",
        //         link: "/about"
        //     },
        // ]
    }),
    methods: {
        Logout() {
            // localStorage.clear()
            localStorage.removeItem('token')
            this.user = null
            this.$router.push('/login');
        }
    },
    async created() {
        const res = await axios.get('http://localhost:5500/api/users/profile',{
            'Authorization' : localStorage.getItem('token')
        })
        this.user = res.data.user
        console.log(this.user)

        // this.$store.dispatch('user', response.data)
        // this.$router.push('/').catch(() => {});
    }

}
</script>
