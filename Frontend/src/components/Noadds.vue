<template>
    <div id="Noadds">
        <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="https://via.placeholder.com/300" style="margin-top:100px;">
                        <p class="body">You have no active ads.</p>
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
