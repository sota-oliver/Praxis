<template>
    <div id="step1">
        <div class="row">
            <div class="col-12">
                <form id="steps1">
                    <div class="inputs">
                        <input v-model="job_position"  id="position" class="job_position" type="text" placeholder="Job position"/>
                    </div> 
                    <div class="inputs" >
                        <input v-model="job_description" id="description" class="job_description" type="text" placeholder="Job description"/>
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
    
    /* .button{
        background-color: #6979F8;
        width:180px;
        height: 50px;
        border-radius: 6px;
        margin-left: 20px;
        color: #FFFFFF;
        font-size: 1em;
        margin-top: 10px;
    } */
    .job_position{
        background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        color: #7d7d7d;
        width: 80%;
        padding: 1%;
        margin-top: 5%;
        

        
        
        
    }
    .job_description{
        background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        color: #7d7d7d;
        width: 80%;
        padding-bottom: 10%;
        padding-left:1%;
        padding-top: 1%;
        margin-top: 1%;
        
        
        
        
    }
    .inputs{
        margin-bottom: 4%;
    }
</style>
