<template>
    <div id="ManageProfile" >
        <div class="container">
            <div class="row">
                <div class="col">
                       <img src="https://via.placeholder.com/300" style="margin-top:60px;">
                    <p class="up">Verification mail has been sent. <br> You're almost good to go.</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <center><p class="down">Manage your profile now?</p></center>
                    
                    <center><router-link to="/setup"><button class="button" type="button">Sure!</button></router-link></center>
                    
                   
                    <center><p id="MaybeLater" class="down3" @click="adds_active2">Maybe later?</p></center>
                    
                </div>
            </div>
            
        </div>

    </div>
</template>

<script>
import store from '@/store.js'
export default {
    data(){
        return store;
    },
    methods:{
        adds_active2() {
        document.getElementById("home-button").style.opacity = "100%";
        document.getElementById("bottom-home_button").style.borderTop = "3px solid #6979F8";
        document.getElementById("bottom-folder_button").style.borderTop = "none";
        document.getElementById("bottom-cog_button").style.borderTop = "none";
        document.getElementById("folder-button").style.opacity = "50%";
        document.getElementById("cog-button").style.opacity = "50%";
        document.getElementById("navigationText").innerHTML = "Home";
        this.homeActive = true;
        this.applicationsActive = false;
        this.profileActive = false;
        },
    }
}
</script>

<style lang="scss">
    .up{
        font-size: 1em;
    }
     .down{
        font-size: 1.5em;
        font-weight: bold;
        margin-top: 100px;

    }
    .button{
        background-color: #6979F8;
        width:40%;
        height: 50px;
        border-radius: 6px;
        margin-left: 20px;
        color: #FFFFFF;
        font-size: 1em;
        margin-top: 10px;
    }
    .down3{
        margin-bottom: 60px;
        color: #6979F8;
        margin-top: 10px;
    }
</style>