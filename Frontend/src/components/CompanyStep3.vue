<template>
    <div id="step3">
        <div class="row">
            <div class="col">
                <form id="steps3">
                    <div class="input">
                    
                        <input v-model="your_study" class="your_study" type="text"  placeholder="Study">
                    
                    </div>
                    <div>
                        <input v-model="your_skills" class="your_skills" type="text"  placeholder="Other skills">
                    
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
    .your_study{
        background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        color: #7d7d7d;
        width: 80%;
        padding: 1%;
        margin-top: 5%;
        }
        .your_skills{
        background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        color: #7d7d7d;
        width: 80%;
        padding-bottom: 10%;
        padding-left:1%;
        padding-top: 1%;
        }
        .input{
        margin-bottom: 3%;
    }
</style>