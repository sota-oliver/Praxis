<template>
    <div class="candidate-overview">
            <div class="background-image">
                <div class="row">
                    <div class="col profile-picture">
                            <img style="border-radius:50%; margin-top:3%;" src="https://via.placeholder.com/160">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <div class="text-center d-block">
                        <h4> {{ student_name }}</h4>
                    </div>
                    <div class="text-center d-block">
                        <h5>{{student_college}}</h5>
                    </div>
                    <div class="text-center d-block">
                        <h6>{{ student_birth }}</h6>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="data">
                        <div class="lines">
                            <b>Professional skills</b>
                        </div>
                        <div class="data1">
                            <p>{{student_skills}}</p>
                        </div>
                        <div class="lines">
                            <b>Personal skills</b>
                        </div>
                        <div class="data2">
                            <p>{{student_personal}}</p>
                        </div>
                    </div>
                     <div class="row contact">
                        <div class="col">
                            <div class="contact">
                                <i class="fa fa-map-marker" aria-hidden="true">{{ student_address}}</i>
                                <i class="fa fa-phone" aria-hidden="true">{{student_phoneNum}}</i>
                                <i class="fa fa-envelope" aria-hidden="true">{{ student_email}}</i>
                            </div>
                        </div>
                     </div>
                        <div class="row contact">
                        <div class="col">
                            <div class="social">
                                <i class="fa fa-google d-inline" aria-hidden="true" style="color:#db4a39; margin:0;"></i>
                                <i class="fa fa-twitter d-inline social-align" aria-hidden="true" style="color:#00acee;"></i>
                                <i class="fa fa-facebook-square d-inline social-align" aria-hidden="true" style="color:#3b5998;"></i>
                                <i class="fa fa-linkedin d-inline social-align" aria-hidden="true" style="color:#0e76a8;"></i>
                            </div>
                        </div>
                     </div>
                    <div class="row">
                        <div class="col">
                            <button class="editButton" @click="editProfile">Edit</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button class="logoutButton" @click="logout">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import store from '@/store.js'
import {Auth} from '@/Services'


export default {
    data(){
        return store;
    },
    methods:{
        editProfile() {
            this.profileSetupComplete = false;
            this.$router.push({name: 'Student setup profile'})
        },
        async logout(){
            let loggedout = await Auth.logout();
            console.log("Logged out",loggedout)
            if(loggedout == true){
                this.$router.push({path: '/login'})
                this.access = false;
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    
    h2{
        padding-top:1%;
        margin-bottom:1%;
        color:#6979F8;
        
    }
    .candidate-overview{
        overflow-x: hidden;
    }
    
    .back-button{
        position: absolute;
        right:5%;
        top:32%;
        z-index: 10;
    }
    a:hover{
        text-decoration: none;
    }
    .back-button i{
        color:#EB5757;
    }
    .background-image{
        background-image: url('../assets/praxis-naslovna.png');
        background-position: center;
        background-size: cover;
        border-radius: 0 0 35% 35%;
        
        
    }
    .editButton{
        border: 0;
        border-radius: 10px;
        padding: 10px 50px 10px 50px;
        margin: 40px 0 40px 0;
        background: #6979F8;
        color: white;
    }
    .logoutButton{
        border: 0;
        border-radius: 10px;
        padding: 10px 40px 10px 40px;
        background: #EB5757;;
        color: white;

    }
    h4{
        color: white;
        font-weight: 600;
        margin-top: 2%;
        margin-bottom: 0%;

    }
    h5{
        color: white;
        font-weight: 500;
        margin-top: 1.5%;

        
    }
    h6{
        color: rgba(255, 255, 255, 0.6);
        font-weight: 500;
        margin-top: 2.5%;
        margin-bottom: 3%;
        
    }
    i{
        margin-bottom: 2%;
        
        display: block; 
        text-align: left;
        margin-top: 5%;
        font-size: 20px;
        
    }
    .data{
        text-align: left;
        margin-bottom: 3%;
        margin-top: 5%;
    }
    .contact i{
        margin-left: 5%;
        text-align: left;
    }
    .lines{
        margin-bottom: 1%;
    }
    .data1{
        margin-bottom:3%;
    }
    .data2{
        margin-bottom:2%;
    }
     .social{
        margin-top:5%;
        padding-bottom:3%;
        font-size: 30px;  
    }
    .social-align{
        margin-left: 10%;
    }

    @media(min-width: 800px){
        .background-image{
            border-radius: 0;
        }
    @media(min-width: 800px){
        i{
        
        text-align: center;
        font-size: 25px;
    }
        }
        .data{
            text-align: center;
            
        }
}
   
    
    
</style>