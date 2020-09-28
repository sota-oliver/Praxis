<template>
    <div id="Access" >
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="access-head">Your position</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button style="border:none; background-color:#FFFFFF;" @click="studentAuth">
                    <router-link style="text-decoration: none;" to="/Login">
                    <center><p class="access-component">I'm a student. <br>I need a job!</p></center>
                    </router-link>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button style="border:none; background-color:#FFFFFF;" @click="companyAuth">
                    <router-link style="text-decoration: none;" to="/Login">
                   <center><p class="access-component"> I own a company. <br> I'm looking for a student</p></center>
                    </router-link>
                    </button>
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
    methods:
    {
        studentAuth(){
            this.authorized = 1;
            this.access = true;
        },
        companyAuth(){
            this.authorized = 2;
            this.access = true;
        }
    }
}
</script>


<style lang="scss">
    .access-head{
        padding: 25px;
        font-size:2em;
        margin-bottom:100px;
    }
    .access-component{
        font-size:1.5em;
        width:400px;
        padding:50px;
        background-color: #6979F8;
        text-decoration: none;
        color: #FFFFFF;
        border-radius: 10px;
    }

</style>