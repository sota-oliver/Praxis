<template>
  <div id="app">
    <Access v-if="!access"/>
    <router-view v-else/>
  </div>
</template>

<script>
import store from '@/store.js';
import Access from '@/components/Access.vue';
import {Auth} from '@/Services'

export default {
  components: {
    Access
  },
  data() {
    return store;
  },
  async mounted(){
    let userInfo = await Auth.getUser();
    let user = await Auth.authenticated();
    this.access = user
    console.log("User ID: ", userInfo.id)
  } 
}
</script>

<style lang="scss">
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
