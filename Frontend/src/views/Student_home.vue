<template>
  <div class="student_home" id="student_home">
    <div class="row">
        <div class="col">
          <div class="student_home-nav">
            <div class="row">
              <img class="logo" src="https://via.placeholder.com/50">
              <div class="col home-left" id="home-left">
                  <input v-model="searchTerm" id="searchBar" type="text" placeholder="Search...">
                  <i v-if="!profileActive" id="searchIcon" class="fa fa-search" aria-hidden="true" @click="showSearch"></i>
              </div>
              <div class="col home-mid" id="home-mid">
                <p id="navigationText"></p>
              </div>
              <div class="col home-right" id="home-right">
                <i v-if="!profileActive" id="searchIcon" class="fa fa-filter" aria-hidden="true" @click="showFilter"></i>
              </div>
              <div class="col webNavBar">
                <ul class="navBarList">
                  <li class="d-inline">
                    <i class="fa fa-home" aria-hidden="true" @click="home_active"></i>
                  </li>
                  <li class="d-inline">
                    <i class="fa fa-folder" aria-hidden="true" @click="folder_active"></i>
                  </li>
                  <li class="d-inline">
                    <i class="fa fa-cog" aria-hidden="true" @click="cog_active"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!profileActive" class="row webSearchBar">
        <div class="col">
          <input v-model="searchTerm" id="searchBarWeb" type="text" placeholder="Search...">
          <i v-if="searchBarWebActive" id="closeIconWeb" class="fa fa-times searchWeb" aria-hidden="true" @click="openSearchWeb"></i>
          
          <i v-if="!searchBarWebActive"  id="searchIconWeb" class="fa fa-search searchWeb" aria-hidden="true" @click="openSearchWeb"></i>
          
        </div>
      </div>
      <div v-if="!profileActive" class="row webFilterBar">
        <div class="col">
          <i v-if="!searchBarWebActive" class="fa fa-filter filterWeb" aria-hidden="true" @click="showFilter" id="expander"></i>
          <i v-if="searchBarWebActive" class="fa fa-search searchTermWeb" aria-hidden="true" @click="fetchStudentCards" id="expander"></i>
        </div>
      </div>
    <div class="home_student" id="home_container">
      <div class="row">
        <div class="col-12">
          
            <div v-if="homeActive" class="col-12">
              <div :key="cardStudent.id" v-for="cardStudent in cardsStudents">
                  <Student_card class="Student-card" :id="cardStudent.id" :infoAdd="cardStudent"/>
              </div>
            </div>
          
        </div>
        <div v-if="applicationsActive" class="col-12">
          <div :key="cardApplication.id" v-for="cardApplication in cardsApplications">
                <Application_card :infoApplication="cardApplication"/>
            </div>
        </div>
        <div v-if="profileActive" class="col-12">
          <Manage_profile v-if="!profileSetupComplete"/>
          <Student_profile v-if="profileSetupComplete"/>
        </div>
      </div>
    </div>
    <div class="row bottom-section">
        <div class="col-12">
          <div class="row bottom-nav">
            <div id="bottom-home_button" class="col-4 bottom-nav_button" @click="home_active">
              <a href="#" class="button-select">
                <i id="home-button" class="fa fa-home" aria-hidden="true"></i>
              </a>
            </div>
            <div id="bottom-folder_button" class="col-4 bottom-nav_button" @click="folder_active">
              <a href="#" class="button-select">
                <i id="folder-button" class="fa fa-folder" aria-hidden="true"></i>
              </a>
            </div>
            <div id="bottom-cog_button" class="col-4 bottom-nav_button" @click="cog_active">
              <a href="#" class="button-select">
                <i id="cog-button" class="fa fa-cog" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="filter">
        <div class="row">
          <div class="col filter-top_small"><h5>ALL</h5></div>
          <div class="col filter-top_big"><h3>Filters</h3></div>
          <div class="col filter-top_small" @click="showFilter"><h5>CLOSE</h5></div> 
        </div>
        <div class="row">
          <div class="col-4"><label class="filter-label">Job positions</label></div>
          <div class="col-6 filter-label_line"></div>
        </div>
        <div class="row">
          <div class="col" style="margin-top: 30px;">
            <label class="container input-checkbox">Frontend developer
              <input type="checkbox" value="Frontend developer">
              <span class="checkmark"></span>
            </label>

            <label class="container input-checkbox">Backend developer
              <input type="checkbox" value="Backend developer">
              <span class="checkmark"></span>
            </label>

            <label class="container input-checkbox">Accountant
              <input type="checkbox" value="Accountant">
              <span class="checkmark"></span>
            </label>

            <label class="container input-checkbox">Administrator
              <input type="checkbox" value="Administrator">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Student_profile from '@/components/Student_profile.vue';
import Manage_profile from '@/components/Manage_profile.vue';
import Application_card from '@/components/Application_card.vue';
import Student_card from '@/components/Student_card.vue';
import store from '@/store.js';
import {Adds, Auth, Applications} from '@/Services';

export default {
  name: 'Student_home',
  data(){
    return store;
  },
  components:{
    Student_card,
    Application_card,
    Manage_profile,
    Student_profile,
  },
  mounted(){
    document.getElementById("navigationText").innerHTML = "Home";
    if(this.homeActive){
        this.fetchAllStudentCards();
        document.getElementById("navigationText").innerHTML = 'Home';}
    if(this.profileActive === true){
      document.getElementById("navigationText").innerHTML = "Profile";
    }
  },
  methods:{
    async fetchStudentCards(){
        this.cardsStudents = await Adds.GetAllAdds(this.searchTerm);
        },
    
    async fetchAllStudentCards(){
        this.cardsStudents = await Adds.getAllAdds(this.cardStudent.id);
        },
    
    async fetchAplications(){
            let userInfo = await Auth.getUser();
            let id = userInfo.id;
            this.cardsApplications = await Applications.getAll(id)
            console.log(this.cardsApplications)
        },/* 
    select: function(event) {
            event.currentTarget.id;
            console.log(event.currentTarget.id);
            this.$router.push({path: "full-ad"})
        }, */
    showSearch(){
      /* var searchVar = document.getElementById("searchBar"); */
      var closeSearchContainer = document.getElementById("home_container");
      /* var closeSearchBottom = document.getElementById("bottom-nav"); */

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == closeSearchContainer) {
          closeSearchContainer.style.display = "none";
        }
      }
      document.getElementById("searchBar").style.display = "block";
      
      document.getElementById("home-mid").style.display = "none";
      document.getElementById("home-right").style.display = "none";
      document.getElementById("searchBar").style.marginLeft = "50px";
      document.getElementById("searchBar").style.zIndex = "10";
      document.getElementById("searchBar").style.marginTop = "10px";
      document.getElementById("searchBar").style.marginBottom = "20px";
      document.getElementById("searchIcon").style.zIndex = "10";
      document.getElementById("searchIcon").style.position = "absolute";
      document.getElementById("searchIcon").style.left = "15px";
      document.getElementById("searchIcon").style.top = "15px";
    },
    openSearchWeb(){
      if(this.searchBarWebActive){
        document.getElementById("searchBarWeb").style.display = "none";
        
        this.searchBarWebActive = false;
      }else{
        document.getElementById("searchBarWeb").style.display = "block";
        this.searchBarWebActive = true;
      }
      
    },
    showFilter(){
      if(this.filterOpen === false){
        document.getElementById("filter").style.display = "block";
        this.filterOpen = true;
      }else{
        this.filterOpen = false;
        if(document.getElementById("filter").style.display === "block" && this.filterOpen === false){
        document.getElementById("filter").style.display = "none";
      }
      }
    },
    home_active() {
      document.getElementById("home-button").style.opacity = "100%";
      document.getElementById("bottom-home_button").style.borderTop = "3px solid #6979F8";
      document.getElementById("bottom-folder_button").style.borderTop = "none";
      document.getElementById("bottom-cog_button").style.borderTop = "none";
      document.getElementById("folder-button").style.opacity = "50%";
      document.getElementById("cog-button").style.opacity = "50%";
      document.getElementById("navigationText").innerHTML = "Home";

      this.fetchAllStudentCards();
      

      this.homeActive = true;
      this.applicationsActive = false;
      this.profileActive = false;
    },
    folder_active() {
      document.getElementById("folder-button").style.opacity = "100%";
      document.getElementById("bottom-folder_button").style.borderTop = "3px solid #6979F8";
      document.getElementById("bottom-home_button").style.borderTop = "none";
      document.getElementById("bottom-cog_button").style.borderTop = "none";
      document.getElementById("home-button").style.opacity = "50%";
      document.getElementById("cog-button").style.opacity = "50%";
      document.getElementById("navigationText").innerHTML = "Applications";

      this.fetchAplications();

      this.applicationsActive = true;
      this.homeActive = false;
      this.profileActive = false;

      
    },
    cog_active() {
      document.getElementById("cog-button").style.opacity = "100%";
      document.getElementById("bottom-cog_button").style.borderTop = "3px solid #6979F8";
      document.getElementById("bottom-folder_button").style.borderTop = "none";
      document.getElementById("bottom-home_button").style.borderTop = "none";
      document.getElementById("folder-button").style.opacity = "50%";
      document.getElementById("home-button").style.opacity = "50%";
      document.getElementById("navigationText").innerHTML = "Profile";
      this.profileActive = true;
      this.homeActive = false;
      this.applicationsActive = false;
    },
  }
}
  
</script>

<style lang="scss" scoped>
  .logo{
    display:none;
    height: 50px;
    width: 50px;
    margin-top: 10px;
    margin-left: 15px; 
  }
  .d-inline{
    padding: 20px;
  }
  .webNavBar{
    display:none;
    text-align: right;
  }
  .navButtons{
    color: #6979F8; 
  }

  .webSearchBar{
    position: fixed;
    top: 100px;
    width: 100%;
    margin-left: 4%;
    text-align: center;
    z-index: 10;
  }
  .webFilterBar{
    position: fixed;
    top: 100px;
    width: 100%;
    right: 4%;
    text-align: center;
    z-index: 10;
  }
  i{
    cursor: pointer;
  }

  #filter{
    display:none;
    position: fixed;
    z-index: 11;
    top: -500px;
    width: 100%;
    height: 500px;
    background-color: white;
    
    -webkit-animation: slide 3s forwards;
    animation: slide 0.5s forwards;
  }
  @-webkit-keyframes slide {
      100% { top: 0; }
  }
  @keyframes slide {
    100% { top: 0; }
  }
  .filter-top_small{
    margin-top: 30px;
  } 
  h3{
    margin-top: 25px;
    font-weight: 600;
  }
  .filter-label{
    margin-left: 50px;
    margin-top: 20px;
    color: #C1C1D4;
  }
  .filter-label_line{
    height:35px;
    border-bottom: 0.5px solid #C1C1D4;
  }

  .container {
  display: block;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  .container input:checked ~ .checkmark {
    background-color: #6979F8;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .input-checkbox{
    margin-left: 145px;
    text-align: left;
    line-height: 1.2;
  }




  .webSearchBar{
    display:none;
  }
  #searchBarWeb{
    display:none;
    position: fixed;
    left: 7%;
    top: 100px;
    height: 50px;
    width: 0;
    font-size: 50%;
    opacity: 50%;
    padding-left: 10px;
    background: white;
    border: 1px solid #6979F8;
    -webkit-animation: widthWeb .8s ease forwards;
    animation: widthWeb .8s ease forwards;
  }
  .filterWeb{
    position: fixed;
    right: 4%;
    top: 105px;
    height: 50px;
    font-size: 2em;
    color: #6979F9;
  }
  .searchTermWeb{
    position: fixed;
    right: 4%;
    top: 105px;
    height: 50px;
    font-size: 2em;
    color: #6979F9;
  }
  @-webkit-keyframes widthWeb {
      100% { width: 85%; }
  }
  @keyframes widthWeb {
    100% { width: 85%; }
  }
  .searchWeb{
    position: fixed;
    left: 3%;
    top: 108px;
    font-size: 30px;
    color: #6979F8;
    cursor: pointer;
  }
  .home_student{
    margin-bottom:130px;
    margin-top:90px;
  }
  .student_home{
    height:100%;
    position: relative;
    overflow-x: hidden;
  }
  #home-button{
    color: #0D0C2C;
    opacity: 100%;
  }
  #bottom-home_button{
    border-top: 3px solid #6979F8;
  }
  #folder-button{
    color: #0D0C2C;
    opacity: 50%;
  }
  #cog-button{
    color: #0D0C2C;
    opacity: 50%;
  }
  .student_home-nav{
    position: fixed;
    top:0%;
    color: #6979F8;
    background-color: white;
    z-index: 10;
    width:100%;
    font-size: 2em;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
    line-height:2;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .home-left{
    text-align: left;
    vertical-align: middle;
  }
  #searchBar{
    display:none;
    height: 50px;
    width: 0;
    font-size: 50%;
    opacity: 50%;
    padding-left: 10px;
    background: white;
    border: 1px solid #6979F8;
    -webkit-animation: width 1s ease forwards;
    animation: width 1s ease forwards;
  }
  @-webkit-keyframes width {
      100% { width: 94%; }
  }
  @keyframes width {
    100% { width: 94%; }
  }
  .home-right{
    text-align: right;
  }
  .student-card{
    margin-top: 50px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
  }
  .bottom-nav{
    padding:0;
    margin: 0;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.12);
    display:inline-block;
    margin-top: 50px;
    padding-bottom: 5px;
    position: fixed; 
    background-color: white;
    bottom:0%;
    left: 0%;
    right: 0%;
    width: 100%;
    z-index: 10;
  }
  .bottom-nav_button{
    font-size: 2em;
    padding: 10px;
    vertical-align: top;
    display: inline-block;
  }
  @media (min-width:800px) { 
    .home-left{
        display:none;
    }
    .webNavBar{
      display:block;
    }
    .home-mid{
      text-align: left;
    }
    .logo{
      display:block;
    }
    .home-right{
      display:none;
    }
    .bottom-section{
      display:none;
    }
    .home_student{
      margin-bottom: 0;
    }
    #filter{
      top:0;
      width: 500px;
      height: 100%;
      right: -500px;
    }
    @-webkit-keyframes slide {
      100% { right: 0; }
    }
    @keyframes slide {
      100% { right: 0; }
    }
    .input-checkbox{
      margin: 0;
      display:inline-block;
      text-align: 0;
      padding-left: 50px;
    }
    #searchBarWeb{
      opacity: 100%;
      font-size: 100%;
      padding: 10px;
      background-color:white;
    }
    .webSearchBar{
    display:block;
    
  }
  }
  @media(max-width: 800px){
    .filterWeb{
      display:none;
    }
  }
</style>
