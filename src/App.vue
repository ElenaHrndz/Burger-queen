<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
a{
  text-decoration: none;
}
body {
  background-image: url("./assets/background.png");
  background-attachment: fixed;
  background-repeat-y: no-repeat;
  background-size: contain;
}
button {
  background-color: wheat;
  border:none;
  display: flex;
  justify-content: center;
}
h2 {
  position: absolute;
  font-size: 4em;
  margin: 0;
}
h3 {
  font-size: 1.35em;
  margin: 0;
  /* background-color: wheat; */
}
input {
  display: flex;
  justify-content: center;
}
table {
  display: inline;
}
.button_img {
    height: inherit;
    width: inherit;
  }
  .complemets {
    display: inline;
  }
  .fries{
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
  }
  .menu {
    display: flex;
    justify-content: space-between;
  }
  .menu-complements {
    display: inline;
  }
  .size {
    display: flex;
    align-self: flex-start;
    margin-bottom: 5%;
    justify-content: center;
  }
  .tiket {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .tiket-libreta {
    margin: 2% -1% 0 0;
    height: 45%;
    position: absolute;
  }
  .vegetables {
    display: flex;
    justify-content: center;
    align-items: center;
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
