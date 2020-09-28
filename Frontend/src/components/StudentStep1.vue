<template>
    <div id="step1">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-12 col-lg-8">
                <form id="steps1">
                    <div class="inputs">
                        <input v-model="student_name" class="student_name student_step1" type="text" placeholder="Full name"/>
                    </div> 
                    <div class="inputs" >
                        <input v-model="student_birth" class="student_birth student_step1" type="text" placeholder="Birthdate"/>
                    </div> 
                    <div class="inputs">
                        <input v-model="student_address" class="student_address student_step1" type="text" placeholder="Address"/>
                    </div> 
                    <div class="inputs">
                        <input v-model="student_town" class="student_town student_step1" type="text" placeholder="Town"/>
                    </div> 
                    <div class="inputs" >
                        <input v-model="student_phoneNum" class="student_phone student_step1" type="text" placeholder="Phone"/>
                    </div> 
                    <div class="inputs">
                        <input v-model="student_email" class="student_email student_step1" type="text" placeholder="E-mail"/>
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
    .student_name{
        margin-top: 5%;
    }
    .student_address{
        padding: 1%;
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
    .inputs{
        margin-bottom: 2%;
    }
</style>