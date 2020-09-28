<template>
    <div class="container" @click="selectCandidate">
        <div class="row">
            <div class="col">
                <div class="card text-center">
                    <div class="card-header">
                        {{infoCandidate.name}}
                    </div>
                    <div class="card-body candidateId" :id="infoCandidate.id">
                        <h5 class="card-title">{{infoCandidate.job_position}}</h5>
                        <p class="card-text">{{infoCandidate.study}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scope>
import store from '@/store.js'
import { Candidates } from '@/Services';
export default {
    props: ['infoCandidate'],
    data(){
        return store;
    },
    async mounted(){
        console.log(document.getElementsByClassName("candidateId")[0].id)
        this.cardCandidate = await Candidates.getOne(this.infoCandidate.id);
    },
    methods:
    {
        selectCandidate(){
            if(!this.selected){
                this.selected = this.infoCandidate.id;
                this.selectedCandidate = this.infoCandidate.id;
                this.selectedStudent = this.infoCandidate.student_id;
                document.getElementById(this.selected).style.backgroundColor = "#D3D3D3";
                
            }else{
                this.selectedCandidate = 0;
                this.selectedStudent = 0;
                document.getElementById(this.infoCandidate.id).style.backgroundColor = "#ffffff";
                this.selected = false;
            }
            
        },
    }
}
</script>

<style lang="scss">
    .Candidate{
        z-index: -3;
        
        margin-bottom: 3em;
        
    }
    .card-right{
        text-align: left;
        padding-left: 4em;
    }
    .card-bottom{
        text-align: left;
        padding-left: 8%;
    }
    .card-left{
        padding-left: 8%;
    }
    h4{
        margin-top:40px;
        margin-bottom:40px;
    }
    ul{
        list-style: none;
    }
    .card-company{
        color: #0D0C2C;
        font-weight: 550;
    }
</style>