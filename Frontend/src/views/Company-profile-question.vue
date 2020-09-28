<template>
    <div id="Manage-profile-question" >
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
                    <router-link style="text-decoration: none;" to="/company">
                    <center><button class="button" type="button" @click="Sure">Sure!</button></center>
                    </router-link>
                    <router-link style="text-decoration: none;" to="/company">
                    <center><p class="down2" @click="maybeLater">Maybe later?</p></center>
                    </router-link>
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
    mounted(){
        this.manageProfileAtStart = false;
    },
    methods:
    {
       Sure(){
           this.manageProfileAtStart = true;
       },
       maybeLater(){
           this.manageProfileAtStart = false;
       }
       
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
    .down2{
        color: #6979F8;
        margin-top:30px;
    }
</style>