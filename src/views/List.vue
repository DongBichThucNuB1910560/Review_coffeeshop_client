<template>
<!-- <v-app id="inspire"> -->
<!-- <v-row> -->
<v-col cols="2">
    <v-sheet rounded="lg">

        <v-list color="transparent" v-if="user">

            <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title">
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-sheet>
</v-col>
<!-- </v-row> -->
<!-- </v-app> -->
</template>

<script>
import axios from 'axios';

export default {
    // computed:{
    //     ...mapGetters({
    //         whatever: 'Auth/isLoggedIn',
    //     })
    // },
    name: 'List',
    props: ['user'],
    data: () => ({
        // user: null,

        items: [{
                title: "Home",
                link: "/"
            },
            {
                title: "Add Post",
                link: "/add-post"
            },
            {
                title: "About",
                link: "/about"
            },
        ]
    }),
    methods: {
        Logout() {
            // localStorage.clear()
            localStorage.removeItem('token')
            // this.user = null
            this.$router.push('/login').catch(() => {});
        }
    },
    async created() {
        const res = await axios.get('http://localhost:5500/api/users/profile', {
            'Authorization': localStorage.getItem('token')
        })
        this.user = res.data.user
        console.log(this.user)
        // this.$store.dispatch('user', response.data)
        // this.$router.push('/').catch(() => {});
    }

}
</script>
