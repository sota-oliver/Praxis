<template>
    <div class="Student_add">
        <div class="background">
            <div class="background-color">
            <div class="row">
                <div class="col-12">
                    <router-link to="/create-add">
                        <i class="fa fa-chevron-left back" aria-hidden="true"></i>
                    </router-link>
                    <h3>{{job_position}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <img src="https://via.placeholder.com/150x200">
                    <h2>{{userData.username}}</h2>
                </div>
            </div>
            </div>
        </div>
        <div class="ad-container">
            <div class="row" style="height: 500px;">
                <div class="col ad-content">
                    <h4>{{job_position}}</h4>
                    <h6 style="opacity:50%;">{{job_position}}</h6><br>
                    <h6>Job description</h6>
                    <p style="font-size:.63em;">{{job_description}}</p>
                    <h6>Requirements</h6>
                    <p style="font-size:.63em;">{{job_requirements}}</p>
                </div>
            </div>
            
            <div class="row">
                <div class="col text-center">
                    <router-link to="/company">
                    <button class="submitButton" @click="postAd">
                        Create add
                    </button>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <router-link to="/create-add">
                    <button class="backButton">
                        Not now
                    </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store.js'
import {Adds, Auth} from '@/Services'
export default {
    data(){
        return store;
    },
    async mounted(){
        this.userData = await Auth.getUser();
    },
    methods:{
        async postAd(){
            let userInfo = await Auth.getUser();
            let id = userInfo.id;
            let doc = {
                company_id: id,
                company_name: userInfo.username,
                job_position: this.job_position,
                job_description: this.job_description,
                job_requirements: this.job_requirements,
                job_offers: this.job_offers,
                your_skills: this.your_skills,
                your_study: this.your_study,
            };
            this.newAd = await Adds.insertOne(doc);
        },
    }
}

</script>

<style lang="scss">
.Student_add{
    overflow-x: hidden;
}
    .back{
        position: fixed;
        left: 4%;
        top: 5%;
    }
    .background-color{
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%);
        margin:0;
    }
    .ad-container{
        padding:50px 0 30px 0;
        width: 100%;
    }
    .ad-content{
        height: 100px;
        width: 100px;
    }
    .submitButton{
        padding: 15px;
        margin: 50px 0 20px 0;
        border-radius: 10px;
        border:0;
        background-color: #6979F8;
        color: white;
    }
    .backButton{
        cursor: pointer;
        border: 0;
        background: 0;
        color: #6979F8;
    }
    .backButton:visited{
        border:0; 
    }
    .favorite{
        margin-top: 50px;
    }
    @media (max-width: 768px) { 
        .ad-content{
            text-align: left;
            margin-left: 30px;
        }
    }
</style>