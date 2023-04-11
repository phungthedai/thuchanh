<template>
  <div id="app">
    <Header1 />
    <div class="contetn">
      <MenuLeft/>
      <Content />
    </div>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import MenuLeft from './components/MenuLeft.vue'
import Header1 from './components/HeaderPage.vue'


export default {
  name: 'App',
  components: {
    Content,
    MenuLeft,
    Header1
  }
}
</script>

<style>
body {
  margin: 0;
}
.contetn {
  display: flex;
}
</style>
