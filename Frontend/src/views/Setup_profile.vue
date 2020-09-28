<template>
    <div class="create-add">
            <div class="row">
                <div class="col">
                    <div class="back-button" id="myBtn">
                        <i class="fa fa-chevron-left" aria-hidden="true" @click="closeAd"></i>
                    </div>
                    <h3>My profile</h3>
                </div>
            </div>
            <div class="row">
                <div class="col text-center">
                    <ul class="progressbar">
                        <li :class="{active : currentStep >= 1}" >Basic information</li>
                        <li :class="{active : currentStep >= 2}" >Education & skills</li>
                        <li :class="{active : currentStep >= 3}" >Picture & social</li>
                    </ul>
                </div>
            </div>
            <div class="row" >
                <div class="col">
                    <StudentStep1 v-if="this.currentStep === 1"/>
                    <StudentStep2 v-else-if="this.currentStep === 2"/>
                    <StudentStep3 v-else-if="this.currentStep === 3"/>
                </div>
            </div>
            <div class="row create-add-bottom">
                <div class="col-6" >
                    <div class="create-add-bottom-back" >
                    <h5 @click="previousStep" >Back</h5>
                    
                    </div>
                </div>
                <div class="col-6">
                    <div class="create-add-bottom-next">
                    
                    <button class="button" type="button" @click="nextStep">Next!</button>
                    </div>
                </div>
            </div>
    <!-- The Modal -->
    <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header" style="background-color:#6979F8">
            <div class="close" id="closeAd">
                <i class="fa fa-times" aria-hidden="true" @click="closeAd"></i>
            </div>
        </div>
        <div class="modal-body">
        <p>Are you sure you want to discard current profile changes</p>
        <p>Confirm to quit</p>
        </div>
        <div class="modal-footer" >
        <router-link style="text-decoration: none;" to="/student">
        <button class="button1" type="button">Yes</button>
        </router-link>
        <div id="closeAd-2" class="CloseAd-footer" >
            <h5 @click="closeAd">Cancel</h5>
        </div>
        </div>
    </div>

    </div>
    </div>

</template>
<script>
import store from '@/store.js'
import {Users} from '@/Services'
import StudentStep1 from '@/components/StudentStep1.vue'
import StudentStep2 from '@/components/StudentStep2.vue'
import StudentStep3 from '@/components/StudentStep3.vue'

export default {
    data(){
        return store;
    },
    mounted(){
        this.currentStep=1;
    },
    methods:{
        async changeData(){
            let cursor = localStorage.getItem("user");
            let result = JSON.parse(cursor);
            let id = result.id;
            let replaceData = {
                username: this.student_name,
                student_birth: this.student_birth,
                student_town: this.student_town,
                student_email: this.student_email,
                student_college: this.student_college,
                student_skills: this.student_skills,
                student_personal: this.student_personal,
                student_phoneNum: this.student_phoneNum,
                student_address: this.student_address,
                student_photo: this.student_photo,
                student_social: this.student_social,
                student_oib: this.student_oib,
            };
            await Users.replaceOne(id, replaceData);
            this.$router.push({name: 'Student home'})
            this.profileSetupComplete = true;
        },
        
        nextStep(){
            if(this.currentStep < 3){
                this.currentStep +=1;
            }else{
                this.changeData();
            }
            
        },
        previousStep(){
            if(this.currentStep > 1){
                this.currentStep -=1;
            }else{
                this.$router.push({name: 'Student-home'})
            }
        },
        closeAd(){
            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");

             // Get the <span> element that closes the modal
            var span = document.getElementById("closeAd");
            var span2 = document.getElementById("closeAd-2");
           

            // When the user clicks the button, open the modal 
            btn.onclick = function() {
            modal.style.display = "block";
            }
            // When the user clicks on <span> (x), close the modal
            span2.onclick = function() {
            modal.style.display = "none";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
            modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            }
            
        },
        
        
    },
    components:{
        StudentStep1,
        StudentStep2,
        StudentStep3,

    },
}
</script>

<style lang="scss" scoped>
    h1{
        margin-top:1.5%;
        margin-bottom:1.5%;
    }
    .create-add{
        overflow-x: hidden;
    }
    
    .back-button{
        position:absolute;
        left:40px;
        top:40%;
        z-index: 1000;
        color:#6979F8;
    }
    h3{
        color: #6979F8;
    }
    h5{
        color: #6979F8;
        
        
    }
    .progressbar {
      counter-reset: step;
      margin-top: 50px;
      margin-left: 40px;
  }
  .progressbar li {
      list-style-type: none;
      width: 32%;
      float: left;
      font-size: .9em;
      font-weight: 600;
      position: relative;
      text-align: center;
      text-transform: uppercase;
      color: #7d7d7d;
  }
  .progressbar li:before {
      width: 50px;
      height: 50px;
      content: counter(step);
      counter-increment: step;
      line-height: 50px;
      border: 2px solid #7d7d7d;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      z-index: 2;
      background-color:white;
;
  }
  .progressbar li:after {
      width: 100%;
      height: 2px;
      content: '';
      position: absolute;
      background-color: #7d7d7d;
      top: 25px;
      left: -50%;
      z-index: -1;
  }
  .progressbar li:first-child:after {
      content: none;
  }
  .progressbar li.active {
      color: #6979F8;
  }
  .progressbar li.active:before {
      border-color: #6979F8;
      color:white;
      background-color: #6979F8;
  }
  .progressbar li.active + li:after {
      background-color: #6979F8;
  }

  .create-add-bottom{
      
      position: fixed;
      bottom: 3%;
      width: 100%;
  }
  .create-add-bottom-back{
      position: absolute;
      top:40%;
      left:40%;
      

     
  }
  .CloseAd-footer{
      cursor:pointer;
       padding-top:2%;
        padding-left:4%;
  }
  /* The Modal (background) */
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