<template>
    <div class="Company_card" >
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card text-center">
                        <div class="card-header">
                            {{infoAd.job_position}}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{infoAd.job_description}}</h5>
                            <p class="card-text">{{infoAd.your_skills}}</p>
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
    props: ['infoAd'],
    
    data(){
        return store;
    },
    async mounted(){
        this.cardAd = await Adds.getOne(this.infoAd.id);
    },
    methods:
    {
       
    }
}
</script>

<style lang="scss">
    .Company_card{
        z-index: -3;
        
    }
    .card-right{
        text-align: left;
        padding-left: 4em;
    }
    .card-left{
        padding-left: 8%;
        padding-bottom: 2%;
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