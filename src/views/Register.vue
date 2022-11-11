<template>
<v-app id="inspire">
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="8">
                    <v-card class="elevation-12">
                        <v-row class="fill-height">
                            <v-col cols="12" md="4" class="black">
                                <v-card-text class="white--text mt-12">
                                    <h1 class="text-center display-1">Welcome Back!</h1>
                                    <h5 class="text-center">To Keep connected with us please login with your personnel info</h5>
                                </v-card-text>
                                <div class="text-center">
                                    <v-btn rounded outlined dark href="/login">Sign in</v-btn>
                                </div>
                            </v-col>
                            <v-col cols="12" md="8">
                                <v-card-text class="mt-12">
                                    <h1 class="text-center display-2 grey--text">Create Account</h1>

                                    <h4 class="text-center mt-4">Ensure your email for registration</h4>
                                    <v-form>
                                        <v-text-field label="Username" name="Username" type="text" v-model="username" color="grey--text" />
                                        <v-text-field label="Name" name="Name" v-model="name" type="text" color="grey--text" />
                                        <v-text-field label="Email" name="Email" v-model="email" type="text" color="grey--text" />

                                        <v-text-field id="password" label="Password" name="password" v-model="password" type="password" color="grey--text" />
                                        <v-text-field id="Confirmpassword" label="Confirm Password" name="confirm_password" v-model="confirm_password" type="password" color="grey--text" />
                                    </v-form>
                                </v-card-text>
                                <div class="text-center mt-n5">
                                    <v-btn rounded dark @click="onSubmit" >SIGN UP</v-btn>
                                </div>
                            </v-col>
                        </v-row>
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
    name: 'Register',
    data() {
        return {
            username: '',
            password: '',
            confirm_password: '',
            name: '',
            email: ''
        }
    },
    methods: {
        async onSubmit() {
            // const data = {
            //     username: this.username,
            //     password: this.password,
            //     confirm_password: this.confirm_password,
            //     name: this.name,
            //     email: this.email
            // }
             await axios.post('http://localhost:5500/api/users/register', {
                username: this.username,
                password: this.password,
                confirm_password: this.confirm_password,
                name: this.name,
                email: this.email
            });
            this.$router.push('/login').catch(() => {});
        }
    }
};
</script>
