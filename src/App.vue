<template>
<div id="app">
  <Welcome />
  <Code msg="Clave de empleado"/>
  <Menu />
</div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import Code from './components/Code.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    Welcome,
    Code,
    Menu
  }
}
</script>

<style>
body {
  background-image: url("./assets/background.png");
  background-attachment: fixed;
  background-repeat-y: no-repeat;
  background-size: contain;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
