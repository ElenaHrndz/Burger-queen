<template>
<div id="app">
  <div id="nav">
    <router-link to="/about">About</router-link> |
    <router-link to="/menu">Menu</router-link>
  </div>
  <router-view />
</div>
</template>



<script>

</script>

<style>
body {
  background-image: url("./assets/background.png");
  background-attachment: fixed;
  background-repeat-y: no-repeat;
  background-size: contain;
}

button {
  background-color: transparent;
  width: 111px;
  height: 90px;
  padding: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  position: absolute;
  font-size: 4em;
  margin: 0;
}


h3 {
  font-size: 1.7em;
  margin: 0;
  background-color: maroon;
}

input {
  display: flex;
  justify-content: center;
}

table {
  display: inline;
}

.tamaño {
  display: flex;
  align-self: flex-start;
}

.menu_img {
  height: inherit;
  width: inherit;
}


.menu {
  display: flex;
  justify-content: space-between;
}

.vegetables {
  display: flex;
  align-self: flex-end;
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
