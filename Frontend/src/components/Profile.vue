<template>
    <div class="profile">   
            
            <div class="row">
                <div class="col">
                     <div class="inputs">
                        <input id="companyName" class="company" type="text" v-model="company_name" placeholder="company name">
                    </div>
                     <div class="inputs">
                        <input id="adress" class="company" type="text" v-model="company_address" placeholder="company address">
                    </div>
                     <div class="inputs">
                        <input id="town" class="company" type="text" v-model="company_town" placeholder="company town">
                    </div>
                    <form class="inputs">
                        <input id="number" class="company" type="text" v-model="company_phoneNum" placeholder="Company phone">
                    </form>
                    <div class="inputs">
                        <input id="email" class="company" type="text" v-model="company_email" placeholder="Company email"/>
                    </div>
                    <div class="inputs">
                        <input id="companyDescription" class="company_description" type="text" v-model="company_description" placeholder="Company description"/>
                    </div>
                     <div class="inputs">
                        <input id="companySocial" class="company" type="text" v-model="company_social" placeholder="Company social"/>
                    </div>
                </div>
            </div>
            <div class="row contact">
                        <div class="col">
                            <div class="social">
                                <i class="fa fas-google d-inline" aria-hidden="true" style="color:#db4a39;"></i>
                                <i class="fa fas-twitter d-inline social-align" aria-hidden="true" style="color:#00acee;"></i>
                                <i class="fa fas-facebook-square d-inline social-align" aria-hidden="true" style="color:#3b5998;"></i>
                                <i class="fa fas-linkedin d-inline social-align" aria-hidden="true" style="color:#0e76a8;"></i>
                                <i class="fa fas-sign-out d-inline social-align-last" aria-hidden="true" style="color:red;"></i>
                            </div>
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

<style lang="scss" scoped>
    .company{
        border:0;
        background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        color: #7d7d7d;
        width: 80%;
        padding: 1%;
        margin-top: 2%;
        
    }
    .company::selection{
        border:0;
    }
    .company_description{
        border:0;
         background: #FFFFFF;
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
        border-radius: 6px;
        color: #7d7d7d;
        width: 80%;
        padding: 10%;
        padding-left: 1%;
        padding-top: 1%;
        margin-top: 2%;
        
    }
    .social{
        margin-top:5%;
        padding-bottom:3%;
        font-size: 30px;  
    }
    .social-align{
        margin-left: 10%;
    }
    .social-align-last{
        margin-left: 20%;
    }
    
</style>