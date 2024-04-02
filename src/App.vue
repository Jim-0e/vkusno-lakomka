<template>
  <div>
    <div>
      <header-app></header-app>
    </div>
      
      <div class="containers">
        <KeepAlive>
          <router-view >
           
          </router-view>
        </KeepAlive>
      </div>
      
  </div>
      
      
  </template>
<script>
import HeaderApp from './components/Home/HeaderApp.vue';
import ListTovars from './components/ListTovars.vue';
export default {
  name: 'App',
  components: {
     HeaderApp, ListTovars
  }
}
</script>

<style lang="scss" scoped>
        * {
            font-family: Arial, Helvetica, sans-serif;
        }
        .containers{
          background-color: rgb(240, 240, 240);
          max-width: 1100px;
         margin: 6rem auto
        }
</style>
   