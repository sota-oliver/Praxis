<template>
    <div id="Company-home" class="container nasswidth">
        <div class="row">
                <div class="col">
                    <center><p id="top-nav" class="head"></p></center>
                </div>
                
        </div>
        <div class="row container-margin">
                <div class="col">
                    <Noadds v-if="noadds"/>
                     <ManageProfile v-if="manageProfile"/>

                   <!--  <div class="nesto" :key="adGetContent.id" v-for="adGetContent in polje">
                        <Ad :adGetContent="adContent"/>
                    </div> -->
                    <div v-if="companyHome">
                        <div :key="cardAd.id" v-for="cardAd in cardsAdds">
                            <Ad :infoAd="cardAd"/>
                        </div>
                    </div>
                    <div v-if="companyCandidates">
                        <div :key="cardCandidate.id" v-for="cardCandidate in cardsCandidates">
                            <Candidate  :infoCandidate="cardCandidate"/>
                        </div>
                    </div>
                    <div v-if="companyNotifications">
                        <div :key="cardNotification.id" v-for="cardNotification in cardsNotifications">
                            <Notification :infoNotification="cardNotification"/>
                        </div>
                    </div>
                    <Profile v-if="companyProfile"/>
                </div>
                
        </div>

        
        
              <div class="row bottom-nav">
                <div class="col" style="padding: 0!important;">
                    <div class="row bottom">
                        <div class="col-5">
                            <div class="row">
                                <div id="bottom_home_ads_button" class="col" @click="adds_active"> 
                                    <i id="home_ads_button" class="fa fa-th-large" aria-hidden="true"></i>
                                </div>
                                <div id="bottom_candidates_button" class="col" @click="candidates_active">
                                    <i id="candidates_button" class="fa fa-users" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 pluswrapper">
                           <div class="plus" id="plus">
                                    <router-link to="/create-add">
                                    <i v-if="companyHome" class="fa fa-plus" aria-hidden="true" style="color:white;"></i>
                                    </router-link>
                                    <i v-if="companyCandidates" class="fa fa-check" aria-hidden="true" style="color:white;" @click="acceptCandidates"></i>
                                    <i v-if="companyNotifications" class="fa fa-trash" aria-hidden="true" style="color:white;"></i>
                                    <i v-if="companyProfile" class="fa fa-floppy-o" aria-hidden="true" style="color:white;"></i>
                                
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="row">
                                <div id="bottom_notifications_button" class="col" @click="notifications_active">
                                <i id="notifications_button" class="fa fa-bell" aria-hidden="true"></i>
                                </div>
                                <div id="bottom_profile_button" class="col" @click="profile_active">
                                    <i v-if="!companyProfile" id="profile_button" class="fas fa-cog" aria-hidden="true" style="color: #0D0C2C;"></i>
                                    <i v-if="companyProfile" @click="logout" id="profile_button" class="fas fa-power-off" aria-hidden="true" style="color: #EB5757;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import store from '@/store.js'
import Noadds from '@/components/Noadds.vue'
import Ad from '@/components/Ad.vue'
import Candidate from '@/components/Candidate.vue'
import Notification from '@/components/Notification.vue'
import ManageProfile from '@/components/ManageProfile.vue'
import Profile from '@/components/Profile.vue'
import { Adds, Notifications, Auth, Candidates} from '@/Services'

export default {
    data(){
        return store;
    },
    mounted(){

        if(this.companyCandidates){
            document.getElementById("candidates_button").style.opacity = "100%";
            document.getElementById("bottom_candidates_button").style.borderTop = "#6979F8";
            document.getElementById("bottom_home_ads_button").style.borderTop = "none";
            document.getElementById("bottom_notifications_button").style.borderTop = "none";
            document.getElementById("bottom_profile_button").style.borderTop = "none";
            document.getElementById("home_ads_button").style.opacity = "50%";
            document.getElementById("notifications_button").style.opacity = "50%";
            document.getElementById("profile_button").style.opacity = "50%";
            document.getElementById("top-nav").innerHTML = 'Candidates';
            

            this.companyNotifications = false;
            this.companyHome = false;
            this.manageProfile = false;
             this.companyProfile = false;
            this.companyCandidates = true;
        }
        if(this.manageProfileAtStart){
              document.getElementById("profile_button").style.opacity = "100%";
                document.getElementById("bottom_profile_button").style.borderTop = "#6979F8";
                document.getElementById("bottom_home_ads_button").style.borderTop = "none";
                document.getElementById("bottom_candidates_button").style.borderTop = "none";
                document.getElementById("bottom_notifications_button").style.borderTop = "none";
                document.getElementById("home_ads_button").style.opacity = "50%";
                document.getElementById("candidates_button").style.opacity = "50%";
                document.getElementById("notifications_button").style.opacity = "50%";
                document.getElementById("top-nav").innerHTML = 'Profile';

                    this.companyHome = false;
                    this.companyCandidates = false;
                    this.companyNotifications = false;
                    this.manageProfile = false;
                    this.companyProfile= true;

                }

                if(!this.manageProfileAtStart){
                document.getElementById("home_ads_button").style.opacity = "100%";
                document.getElementById("bottom_home_ads_button").style.borderTop = "#6979F8";
                document.getElementById("bottom_candidates_button").style.borderTop = "none";
                document.getElementById("bottom_notifications_button").style.borderTop = "none";
                document.getElementById("bottom_profile_button").style.borderTop = "none";
                document.getElementById("candidates_button").style.opacity = "50%";
                document.getElementById("notifications_button").style.opacity = "50%";
                document.getElementById("profile_button").style.opacity = "50%";
                document.getElementById("top-nav").innerHTML = 'My adds';

                   this.companyCandidates = false;
                    this.companyNotifications = false;
                    this.companyProfile = false;
                    this.manageProfile = false;
                    this.companyHome = true;

                }
            
            if(this.companyHome){
            this.fetchAdds();
            document.getElementById("top-nav").innerHTML = 'My adds';}
           

    },

    methods:{
        async fetchNotifications(){
            let userInfo = await Auth.getUser();
            let id = userInfo.id;
            this.cardsNotifications = await Notifications.getAll(id);
        },
        async fetchAdds(){
            this.cardsAdds = await Adds.getAllAdds();
        },
        async fetchCandidates(){
            let userInfo = await Auth.getUser();
            let id = userInfo.id;
            this.cardsCandidates = await Candidates.getAll(id)
        },
        async logout(){
            let loggedout = await Auth.logout();
            console.log("Logged out",loggedout)
            if(loggedout == true){
                this.$router.push({path: '/login'})
                this.access = false;
            }
        },
        async acceptCandidates(){
            let userInfo = await Auth.getUser();
            let comp_id = userInfo.id;
            let id = this.selectedCandidate;
            let accept = {
                accepted: true,
                company_id: comp_id,
                student_id: this.selectedStudent,
            }
            this.acceptedCandidate = await Candidates.updateOne(id, accept)
        },
        
    adds_active() {
      document.getElementById("home_ads_button").style.opacity = "100%";
      document.getElementById("bottom_home_ads_button").style.borderTop = "#6979F8";
      document.getElementById("bottom_candidates_button").style.borderTop = "none";
      document.getElementById("bottom_notifications_button").style.borderTop = "none";
      document.getElementById("bottom_profile_button").style.borderTop = "none";
      document.getElementById("candidates_button").style.opacity = "50%";
      document.getElementById("notifications_button").style.opacity = "50%";
      document.getElementById("profile_button").style.opacity = "50%";
      document.getElementById("top-nav").innerHTML = 'My adds';
      
      this.fetchAdds();

       this.companyCandidates = false;
       this.companyNotifications = false;
       this.companyProfile = false;
       this.manageProfile = false;
       this.companyHome = true;
       
      
    },
    candidates_active() {
      document.getElementById("candidates_button").style.opacity = "100%";
      document.getElementById("bottom_candidates_button").style.borderTop = "#6979F8";
      document.getElementById("bottom_home_ads_button").style.borderTop = "none";
      document.getElementById("bottom_notifications_button").style.borderTop = "none";
      document.getElementById("bottom_profile_button").style.borderTop = "none";
      document.getElementById("home_ads_button").style.opacity = "50%";
      document.getElementById("notifications_button").style.opacity = "50%";
      document.getElementById("profile_button").style.opacity = "50%";
      document.getElementById("top-nav").innerHTML = 'Candidates';

      this.fetchCandidates();


      this.companyNotifications = false;
      this.companyHome = false;
      this.manageProfile = false;
      this.companyProfile = false;
      this.companyCandidates = true;

    },
    notifications_active() {
      document.getElementById("notifications_button").style.opacity = "100%";
      document.getElementById("bottom_notifications_button").style.borderTop = "#6979F8";
      document.getElementById("bottom_home_ads_button").style.borderTop = "none";
      document.getElementById("bottom_candidates_button").style.borderTop = "none";
      document.getElementById("bottom_profile_button").style.borderTop = "none";
      document.getElementById("home_ads_button").style.opacity = "50%";
      document.getElementById("candidates_button").style.opacity = "50%";
      document.getElementById("profile_button").style.opacity = "50%";
      document.getElementById("top-nav").innerHTML = 'Notifications';

      this.fetchNotifications();

        
        this.companyHome = false;
        this.companyCandidates = false;
        this.manageProfile = false;
        this.companyProfile = false;
        this.companyNotifications = true;
    },
    profile_active() {
      
      document.getElementById("profile_button").style.opacity = "100%";
      document.getElementById("bottom_profile_button").style.borderTop = "#6979F8";
      document.getElementById("bottom_home_ads_button").style.borderTop = "none";
      document.getElementById("bottom_candidates_button").style.borderTop = "none";
      document.getElementById("bottom_notifications_button").style.borderTop = "none";
      document.getElementById("home_ads_button").style.opacity = "50%";
      document.getElementById("candidates_button").style.opacity = "50%";
      document.getElementById("notifications_button").style.opacity = "50%";
      document.getElementById("top-nav").innerHTML = 'Profile';

        this.companyHome = false;
        this.companyCandidates = false;
        this.companyNotifications = false;
        
        

        if(this.manageProfile){
            this.companyProfile=false;
        }
        else {
            this.companyProfile=true;
            this.manageProfile=false;
        }
          
    },
   
    
    plus(){
        var plus = document.getElementById("plus");

        plus.onclick = function() {
           this.job_position = '';
           this.job_description = '';
           this.job_requirements = '';
           this.job_pluses = '';
           this.your_study = '';
           this.your_skills = '';
        }
    },
    },
    components: {
        Noadds,
        Ad,
        Candidate,
        Notification,
        ManageProfile,
        Profile,
  },
}
</script>

<style lang="scss">
    #home_ads_button{
    color: #0D0C2C;
    opacity: 100%;
  }
  #bottom_home_ads_button{
    border-top: 3px solid #6979F8;
  }
  #candidates_button{
    color: #0D0C2C;
    opacity: 50%;
  }
  #notifications_button{
    color: #0D0C2C;
    opacity: 50%;
  }
  #profile_button{
    color: #0D0C2C;
    opacity: 50%;
  }

    .head{
        color: #6979F8;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
        font-size: 2em;
        font-weight: bold;
        padding: 40px;
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        line-height: 10px;
        

    }
    
    .container-margin{
       margin-top: 6em; 
       margin-bottom: 5%;
    }
    .plus{
        position: relative;
        border-radius: 50%;
        background-color: #6979F8;
        color: white;
        z-index: 10;
        bottom: 50%;
        margin-left: 15%;
        margin-right: 15%;
        height: 50px;
        width: 50px;
        display:inline-block;
        }
    .pluswrapper{
        text-align: center;
    }
    
    .bottom{
        font-size: 2em;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
        width: 100%;
        margin:0;
   

        
    }
    .nasswidth{
        overflow-x: hidden;
        width:100%;
        max-width: 100%;
        margin: 0;
        padding:0;
    }

    .bottom-nav{
        position: fixed;
        bottom: 0;
        width:100%;
        margin:0;
        padding:0;
        background-color: white;
    }
    
   
</style>