<template>
    <div id="step1">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-12 col-lg-8">
                <form id="steps1">
                    <div class="inputs">
                        <input v-model="student_college" class="student_college student_step1" type="text" placeholder="Study"/>
                    </div> 
                    <div class="inputs" >
                        <input v-model="student_skills" class="student_skills student_step1" type="text" placeholder="Skills"/>
                    </div> 
                    <div class="inputs">
                        <input v-model="student_personal" class="student_personal student_step1" type="text" placeholder="Personal skills"/>
                    </div> 
                </form>
            </div>
            <div class="col-lg-2"></div>
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

<style lang="scss" scoped>

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
    .student_college{
        margin-top: 5%;
    }
    .student_step1{
        background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        border: 0;
        color: #7d7d7d;
        width: 80%;
        padding: 1%;
        outline: none;
    }
    .student_personal{
        padding-bottom: 25%;
    }
    .inputs{
        margin-bottom: 2%;
    }
</style>