<template>
    <div class="candidate-overview">
            <div class="row">
                <div class="col">
                    <div class="back-button" id="myBtn">
                        <router-link to="/company">
                        <i class="fa fa-chevron-left" aria-hidden="true" @click="candidates_active"></i>
                        </router-link>
                    </div>
                    <h2>Candidates</h2>
                </div>
            </div>
            <div class="background-image">
                <div class="row">
                    <div class="col profile-picture">
                            <img style="border-radius:50%; margin-top:3%;" src="https://via.placeholder.com/160">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <div class="text-center d-block">
                        <h4> {{infoCandidate.name}}</h4>
                    </div>
                    <div class="text-center d-block">
                        <h5>{{infoCandidate.study}}</h5>
                    </div>
                    <div class="text-center d-block">
                        <h6>{{ student_age_ad }}</h6>
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
                            <p>{{student_skills_ad}}</p>
                        </div>
                        <div class="lines">
                            <b>Personal skills</b>
                        </div>
                        <div class="data2">
                            <p>{{student_personal_ad}}</p>
                        </div>
                    </div>
                     <div class="row contact">
                        <div class="col">
                            <div class="contact">
                                <i class="fa fa-map-marker" aria-hidden="true">{{ student_address_ad}}</i>
                                <i class="fa fa-phone" aria-hidden="true">{{student_phoneNum_ad}}</i>
                                <i class="fa fa-envelope" aria-hidden="true">{{ student_email_ad}}</i>
                            </div>
                        </div>
                     </div>
                        <div class="row contact">
                        <div class="col">
                            <div class="social">
                                <i class="fa fa-google d-inline" aria-hidden="true" style="color:#db4a39;"></i>
                                <i class="fa fa-twitter d-inline social-align" aria-hidden="true" style="color:#00acee;"></i>
                                <i class="fa fa-facebook-square d-inline social-align" aria-hidden="true" style="color:#3b5998;"></i>
                                <i class="fa fa-linkedin d-inline social-align" aria-hidden="true" style="color:#0e76a8;"></i>
                            </div>
                        </div>
                     </div>

                </div>
            </div>
    </div>
</template>

<script>
import store from '@/store.js'
import  {Users}  from '@/Services';

export default {
    props: ['infoCandidate'],
    data(){
        return store;
    },
    async mounted(){
        this.cardCandidate = await Users.getOne(this.infoCandidate.id);
        console.log(this.cardCandidate)
    },
    methods:{
        candidates_active() {
      


      this.companyNotifications = false;
      this.companyHome = false;
      this.manageProfile = false;
      this.companyCandidates = true;

    },
    }
}
</script>

<style lang="scss" scoped>
    
    h2{
        padding-top:1%;
        margin-top:1%;
        margin-bottom:1%;
        color:#6979F8;
        
    }
    .candidate-overview{
        overflow-x: hidden;
    }
    
    .back-button{
        position:absolute;
        left:5%;
        top:40%;
        z-index: 1000;
        color:#6979F8;
    }
    .background-image{
        background-image: url('../assets/praxis-naslovna.png');
        background-position: center;
        background-size: cover;
        border-radius: 0 0 35% 35%;
        
        
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