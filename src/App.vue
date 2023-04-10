<template>
  <div id="app">
    <Header1 />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MenuLeft/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MenuLeft from './components/MenuLeft.vue'
import Header1 from './components/HeaderPage.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    MenuLeft,
    Header1
  }
}
</script>

<style>
#app {
  display: grid;
  grid-template-areas: 
  'header header header header header header header header'
  'menu content content content content content content content'
  ;
}
</style>
