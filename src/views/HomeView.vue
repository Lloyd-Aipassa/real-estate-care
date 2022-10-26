<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logoRealEstateCare.svg">
    <h1><HelloWorld msg="Hello world!"/></h1> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
  .home{
    background-color: #00AAA2;
  }

  h1{
    color: white;
  }
</style>