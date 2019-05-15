<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App'
}
//
//
// import { db } from './main'
//
// export default {
//   name: 'App',
//   data () {
//     return {
//       client: ''
//     }
//   },
//   firestore () {
//     return {
//       locations: db.collection('orders')
//     }
//     },
//   methods: {
//     setClient(client){
//       db.collection('orders').add({client})
//     }
//   }
// }

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

  .tamaño {
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
    margin: 2%;
    height: 45%;
    width: 22%;
    position: fixed;
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
