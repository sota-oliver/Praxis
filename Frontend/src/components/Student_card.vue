<template>
    <div class="Student_card">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card text-center">
                        <div class="card-header">
                            {{this.cardStudent.company_name}}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{infoAdd.job_position}}</h5>
                            <p class="card-text">{{infoAdd.job_description}}</p>
                            <router-link :to="{ name: 'Student full ad', params: { id: this.infoAdd.id }}" class="btn btn-primary">Details</router-link>
                        </div>
                        <div class="card-footer text-muted">
                            {{this.cardStudent.your_study}}
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store.js'
import { Adds } from '@/Services';
export default {
    props: ['infoAdd'],
    data(){
        return store;
    },
    async mounted(){
        this.cardStudent = await Adds.getOne(this.infoAdd.id);
    }
}
</script>

<style lang="scss" scoped>
    .Student_card{
        
        margin-top: 7%; 
    }
    h3{
        margin-top:40px;
        margin-bottom:40px;
    }
    ul{
        list-style: none;
        padding: 0;
    }
    @media (max-width:800px) { 
    .card-right{
        text-align: left;
        font-size: 20px;
    }
    /* @media (min-width: 768px) { 
    .card-right{
        text-align: center;
    } */
}
</style>