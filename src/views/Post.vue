<template>
<v-container>
    <v-row>
        <v-col sm="10" class="pa-4 mx-auto">
            <v-card class="pa-2">
                <v-img height="480" width="756" :src="`http://localhost:5500/${post.image}`"></v-img>
                <v-card-actions class="pb-0">
                    <v-row class="mt-1 mx-1">
                        <v-col sm="2">
                            <v-btn small outlined color="primary">{{post.category}}</v-btn>
                        </v-col>
                        <v-col sm="10" class="d-flex justify-end" v-if="user">
                            <v-btn class="mx-2" fab dark small color="error" @click="removePost(post._id)" >
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab dark small color="success" :to="{name: 'edit-post', params:{ id: post._id }}">
                                <v-icon dark>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-subtitle class="headline">
                    <h3>{{post.title}}</h3>
                </v-card-subtitle>
                <v-card-text class="grey--text">
                    <p>{{post.content}}</p>
                    <p>{{post.created}}</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import API from '../api';
import axios from 'axios';

export default {
    name: 'Post',
    // computed: {
    //     user() {
    //         return !!window.localStorage.getItem('token')
    //     }
    // },
    data() {
        return {
            post: {},
            user: null,
        };
    },
    async created() {
        const response = await API.getPostById(this.$route.params.id);
        this.post = response;

        const res = await axios.get('http://localhost:5500/api/users/profile',{
            'Authorization' : localStorage.getItem('token')
        })
        this.user = res.data.user
    },
    methods: {
        async removePost(id) {
            const response = await API.deletePostById(id);
            this.$router.push({
                name: 'home',
                params: {
                    message: response.message
                }
            });
        }
    }
}
</script>
