<template>
    <div class="Application_card">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card text-center">
                        <div class="card-header">
                            {{infoApplication.name}}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{infoApplication.job_position}}</h5>
                            <div :class="((buttonAccepted) ? 'buttonAcceptedPositive' : 'buttonAcceptedNegative')">Accepted</div>
                        </div>
                        <div class="card-footer text-muted">
                            {{infoApplication.study}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Applications} from '@/Services';
export default {
     props: ['infoApplication'],
    data(){
        return {
            buttonAccepted: false,
        };
    },
    async mounted(){
        this.cardApplication = await Applications.getOne(this.infoApplication.id);
        console.log(this.infoApplication)
        if(this.infoApplication.accepted == true){
            this.buttonAccepted = true;
        }else{
            this.buttonAccepted = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.Application_card{
    margin-top: 50px;
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
    
    h3{
        margin-top: 10px;
        margin-bottom: 20px!important;
    }
    }
    @media (min-width:800px) { 
    .card-company{
        text-align: right;
        line-height: 3.5;
    }
    .buttonAccepted{
        text-align: left!important;
        margin-top: 10px;
    }
    /* @media (min-width: 768px) { 
    .card-right{
        text-align: center;
    } */
    }
    .buttonAcceptedPositive{
        text-align: center;
        border: 0;
        padding: 15px;
        font-size: 15px;
        border-radius: 8px;
        color: white;
        background-color: #6FCF97;
    }
    .buttonAcceptedNegative{
        border: 0;
        padding: 15px;
        font-size: 15px;
        border-radius: 8px;
        color: white;
        background-color: grey;
    }
</style>