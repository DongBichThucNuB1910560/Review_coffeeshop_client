<template>
<v-app id="inspire">
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="8">
                    <v-card class="elevation-12">
                        <!-- <v-overlay :value="overlay" > -->
                        <v-row class="fill-height">
                            <v-col cols="12" md="8">
                                <v-card-text class="mt-12">
                                    <h1 class="text-center grey--text display-2 ">Sign in to Koppe</h1>

                                    <h4 class="text-center mt-4 grey--text">Ensure your email for registration</h4>
                                    <v-form>
                                        <v-text-field label="Username" name="username" v-model="username" type="text" color="grey--text" />

                                        <v-text-field id="password" label="Password" name="password" v-model="password" type="password" color="grey--text" />
                                    </v-form>
                                    <h3 class="text-center grey--text mt-4">Forgot your password ?</h3>
                                </v-card-text>
                                <div class="text-center mt-3 mb-3">
                                    <v-btn type="submit" rounded dark @click="onSubmit">SIGN IN</v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4" class=" black">
                                <v-card-text class="grey--text mt-12">
                                    <h1 class="text-center display-1">Hello, Friend!</h1>
                                    <h5 class="text-center">Enter your personal details and start journay with us</h5>
                                </v-card-text>
                                <div class="text-center">
                                    <v-btn rounded outlined dark href="/register">SIGN UP</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                        <!-- </v-overlay> -->
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
import axios from 'axios';
export default {

    name: 'Login',

    data() {
        return {
            username: '',
            password: ''
        }
    },

    methods: {
        // ...mapActions(['login']),
        async onSubmit() {
            const response = await axios.post('http://localhost:5500/api/users/login', {
                username: this.username,
                password: this.password

            });

            localStorage.setItem('token', response.data.token)
            // this.$store.dispatch('user', response.data.user)
           
            this.$router.push('/').catch(() => {});
            // const user = {
            //     username: this.username,
            //     password: this.password
            // }
            // this.login(user).then(res => {
            //     if (res.data.success) {
            //         this.$router.push("/");
            //     }
            // }).catch(error => {
            //     console.log(error)
            // });
        }
    }
};
</script>
