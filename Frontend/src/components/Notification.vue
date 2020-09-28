<template>
    <div class="Notification" >
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card text-center">
                        <div class="card-header">
                            {{infoNotification.name}}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{infoNotification.job_position}}</h5>
                            <p class="card-text">{{infoNotification.study}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store.js'
import {Notifications} from '@/Services'
export default {
    props: ['infoNotification'],
    data(){
        return store;
    },
    async mounted(){
        this.cardNotification = await Notifications.getOne(this.infoNotification.id);
        console.log(this.infoNotification.id)
    }
}
</script>

<style lang="scss">
    .Notification{
        z-index: -3;
        
    }
    .card-right{
        text-align: left;
        padding-left: 4em;
    }
    .card-left{
        padding-left: 8%;
    }
    date{
        margin-top:10px;
        margin-bottom:20px;
    }
    ul{
        list-style: none;
    }
    .card-company{
        color: #0D0C2C;
        font-weight: 550;
    }
</style>