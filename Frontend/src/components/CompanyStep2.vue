<template>
    <div id="step2">
        <div class="row">
            <div class="col">
                <form id="steps2">
                    <div class="inputs">
                        <input v-model="job_requirements" class="job_requirements" type="text"  placeholder="Job requirements">
                    </div> 
                    <div class="inputs">
                        <input v-model="job_offers" class="job_pluses" type="text"  placeholder="What you'll get">
                    </div>
                </form>
               
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
       
    }
}
</script>

<style lang="scss" >
     .button{
        background-color: #6979F8;
        width:180px;
        height: 50px;
        border-radius: 6px;
        margin-left: 20px;
        color: #FFFFFF;
        font-size: 1em;
        margin-top: 10px;
    }
     .job_requirements{
        background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        color: #7d7d7d;
        width: 80%;
        padding-bottom: 9%;
        padding-left:1%;
        padding-top: 1%;
        margin-top: 5%;
        

        
        
        
    }
    .job_pluses{
        background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        color: #7d7d7d;
        width: 80%;
        padding-bottom: 7%;
        padding-left:1%;
        padding-top: 1%;
        
        
        
        
    }
    .inputs{
        margin-bottom: 1%;
    }
</style>