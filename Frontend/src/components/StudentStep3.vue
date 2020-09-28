<template>
    <div id="step1">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-12 col-lg-8">
                <form id="steps1">
                    <img src="https://via.placeholder.com/300" style="margin-top:60px;">
                    <div class="inputs">
                        <input class="student_photo upload student_step1" type="file"/>
                    </div> 
                    <div class="inputs" >
                        <input v-model="student_social" class="student_social student_step1" type="text" placeholder="Social network link"/>
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