<template>
    <div class="Signup">
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Sign Up</h3>
                    </div>
                    <div class="card-body">
                        <form v-if="this.authorized == 1" @submit.prevent="register">
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-at"></i></span>
                                </div>
                                <input v-model="student_email" type="email" class="form-control" placeholder="email">
                                
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input v-model="student_name" type="text" class="form-control" placeholder="full name">
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-university"></i></span>
                                </div>
                                <input v-model="student_college" type="text" class="form-control" placeholder="college">
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-graduation-cap"></i></span>
                                </div>
                                <input v-model="student_skills" type="text" class="form-control" placeholder="study">
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input v-model="password" type="password" class="form-control" placeholder="password">
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="check"><i class="fas fa-check-double"></i></span>
                                </div>
                                <input v-model="passwordConfirm" type="password" class="form-control" placeholder="confirm password">
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Submit" class="btn login_btn">
                            </div>
                        </form>
                        <form v-if="this.authorized == 2" @submit.prevent="register">
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-at"></i></span>
                                </div>
                                <input v-model="company_email" type="email" class="form-control" placeholder="email">
                                
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-signature"></i></span>
                                </div>
                                <input v-model="company_name" type="text" class="form-control" placeholder="full name">
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-info-circle"></i></span>
                                </div>
                                <input v-model="company_description" type="text" class="form-control" placeholder="description">
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input v-model="password" type="password" class="form-control" placeholder="password">
                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="check"><i class="fas fa-check-double"></i></span>
                                </div>
                                <input v-model="passwordConfirm" type="password" class="form-control" placeholder="confirm password">
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Submit" class="btn login_btn">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store.js'
import {Users, Auth} from '@/Services'
export default {
    data(){
        return store;
    },
    methods:{
        async register(){
            if(this.password === this.passwordConfirm){
                if(this.authorized == 1){
                    let userData = {
                        email: this.student_email,
                        username: this.student_name,
                        password: this.password,
                        college: this.student_college,
                        study: this.student_skills,
                        authorized: this.authorized,
                        
                    }
                    let success = await Users.insertOne(userData);
                    console.log(userData)

                    if(success){
                        await Auth.login(this.email, this.password, this.authorized);
                        this.$router.push({name: "Student home"})
                    }
                }else if(this.authorized == 2){
                    let userData = {
                        username: this.company_name,
                        password: this.password,
                        email: this.company_email,
                        description: this.company_description,
                        authorized: this.authorized,
                    }
                    let success = await Users.insertOne(userData);
                    let result = success.data;
                    console.log('Result', result)

                    if(success){
                        await Auth.login(this.email, this.password, this.authorized);
                        this.$router.push({name: "Company-home"})
                    }
                }
            }else{
                document.getElementById("check").style.backgroundColor = "#EB5757"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.Signup{
    margin-top: 12%;
}
.container{
height: 100%;
align-content: center;
}
.card{
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: #6979F8;
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
margin-top: 20px;
margin-bottom: 20px;
}

.card-footer{
    padding: 12px;
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