<template>
    <div class="Student_add">
        <div class="background">
            <div class="background-color">
            <div class="row">
                <div class="col-12 align">
                    <router-link to="/student">
                        <i class="fa fa-chevron-left back" aria-hidden="true"></i>
                    </router-link>
                    <h3>{{adData.job_position}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <img src="https://via.placeholder.com/150x200">
                    <h2>{{adData.company_name}}</h2>
                </div>
            </div>
            </div>
        </div>
        <div class="ad-container">
            <div class="row">
                <div class="col ad-content">
                    <h4>{{adData.job_position}}</h4>
                    <h6 style="opacity:50%;">{{adData.company_name}}</h6><br>
                    <h6>Job description</h6>
                    <p style="font-size:.63em;">{{adData.job_description}}</p>
                    <h6>Requirements</h6>
                    <p style="font-size:.63em;">{{adData.job_requirements}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center favorite">
                    <i class="fa fa-star d-inline" aria-hidden="true" style="margin-right: 10px;"></i>
                    <p class="d-inline">Favorite company</p>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <button class="submitButton" @click="applyForJob">
                        Apply for job position
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <router-link to="/student" class="backButton">
                        Not now
                    </router-link>
                </div>
            </div>
        </div>
        <!-- The Modal -->
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header" style="background-color:#6979F8">
                    <div class="close" id="closeAd">
                        <i class="fa fa-times" aria-hidden="true" @click="closeModal"></i>
                    </div>
                </div>
                <div class="modal-body">
                <p>You are already a candidate at this position</p>
                </div>
                <div class="modal-footer" >
                <div id="closeAd-2" class="CloseAd-footer" >
                    <h5 @click="closeModal">Close</h5>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import store from '@/store.js'
import {Notifications, Auth, Adds, Candidates, Applications} from '@/Services'
export default {
    data(){
        return store;
    },
    async mounted(){
        let response = await Adds.getOne(this.$route.params.id);
        this.adData = response;
        return response;
    },
    methods:{
        async applyForJob(){
            let userInfo = await Auth.getUser();
            let id = userInfo.id;
            let doc = {
                company_id: this.adData.company_id,
                company_name: this.adData.company_name,
                student_id: id,
                student_name: userInfo.username,
                job_description: this.adData.job_description,
                job_requirements: this.adData.job_requirements,
                job_offers: this.job_offers,
                your_skills: this.your_skills,
                your_study: this.your_study,
            };
            await Notifications.insertOne(doc);
            await Candidates.insertOne(doc);
            let response = await Applications.insertOne(doc);
            if(response.data.status === "fail"){
                var modal = document.getElementById("myModal");
                modal.style.display = "block";
                
            }
        },
        closeModal(){
            var modal = document.getElementById("myModal");
            var span = document.getElementById("closeAd");
            var span2 = document.getElementById("closeAd-2");
            span.onclick = ()=>{
                modal.style.display = "none";
            }
            span2.onclick = ()=>{
                modal.style.display = "none";
            }
        }
    }
}
</script>

<style scoped>
    .Student_add{
    overflow-x: hidden;
    }
    .align{
        margin-top: 20px;
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
    /* MODAL */
    .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
    position: relative;
    border: 1px solid #6979F8;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #6979F8;
    ;
    width: 40%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 1s;
    animation-name: animatetop;
    animation-duration: 1s
    }
    .modal-footer{
        display: inline-block;
    }

    /* Add Animation */
    @-webkit-keyframes animatetop {
    from {opacity:0} 
    to {opacity:1}
    }

    @keyframes animatetop {
    from {opacity:0}
    to {opacity:1}
    }
    .button1{
            background-color: #6979F8;
            width:30%;
            height: 50px;
            border-radius: 6px;
            margin-left: 20px;
            color: #FFFFFF;
            font-size: 1em;
            margin-top: 10px;
        }
</style>