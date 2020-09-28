<template>
    <div class="Login">
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Login</h3>
                        <div class="d-flex justify-content-end social_icon">
                            <span><i class="fab fa-facebook-square icon"></i></span>
                            <span><i class="fab fa-google-plus-square icon"></i></span>
                            <span><i class="fab fa-twitter-square icon"></i></span>
                        </div>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input v-model="email" type="text" class="form-control" placeholder="username">
                                
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input v-model="password" type="password" class="form-control" placeholder="password">
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Login" class="btn login_btn">
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="justify-content-center links">
                            Don't have an account?
                            <router-link class="signup-btn" to="/signup">Sign up</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Auth} from '@/Services'
import store from '@/store'
export default {
    data(){
        return store;
    },
    methods:{
        async login(){
            let success = await Auth.login(this.email, this.password, this.authorized);
            console.log('Result', success)

            if(success == true && this.authorized == 1){
                this.$router.push({name: "Student home"})
            }else if(success == true && this.authorized == 2){
                this.$router.push({name: "Company-home"})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.Login{
    margin-top: 12%;
}
.container{
height: 100%;
align-content: center;
}
.card{
height: 370px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: #6979F8;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: white;
}
.icon{
    background-color: #6979F8;
    line-height: .9;
    width: 56px;
    border-radius: 7px;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: #0D0C2C;
margin-top: 25px;
margin-bottom: 20px;
}

.card-footer{
    padding: 12px;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: white;
color: #0D0C2C;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: #0D0C2C;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: #0D0C2C;
background-color: white;
width: 100px;
margin-top: 20px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.signup-btn{
margin-left: 4px;
text-decoration: none;
color: #0D0C2C;
}
</style>