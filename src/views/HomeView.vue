<template>
<v-container>
    <v-alert dense text type="success" dark dismissible v-if="this.$route.params.message">
        {{this.$route.params.message}}
    </v-alert>
    <v-row no-gutter>
        <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
            <v-card class="pa-1" :to="{name: 'post', params: {id: post._id}}">
                <v-img height="250" width="300" :src="`http://localhost:5500/${post.image}`"></v-img>
                <v-btn class="ml-4 mt-3" small outlined color="indigo">
                    {{post.category}}
                </v-btn>
                <v-card-title class="headline">
                    {{post.title}}
                </v-card-title>
                <v-card-text class="py-0">
                    <p>{{post.content.substr(0, 200)+'...'}}</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import API from '../api';
export default {
    name: 'Home',
    // props: ['user'],
    data() {
        return {
            posts: [],
            // user: null
        };
    },
    async created() {
        this.posts = await API.getAllPost();
         // const res = await axios.get('api/users/profile')
    }
}
</script>
