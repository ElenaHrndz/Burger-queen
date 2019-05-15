<template>
<div class="">


  <div class="menu">
    <div class="main">
        <label for="beef_burger"><input type="checkbox" id="beef_burger" v-bind:value="true" v-model="vue.beef"><img class="button_img" src="../assets/beef_burger.png" alt="beef_burger"></label>
        <label for="chicken_burger"><input type="checkbox" id="chicken_burger" v-bind:value="true" v-model="vue.chicken"><img class="button_img" src="../assets/chicken_burger.png" alt="chicken_burger"></label>
        <label for="veggie_burger"><input type="checkbox" id="veggie_burger" v-bind:value="true" v-model="vue.veggie"><img class="button_img" src="../assets/veggie_burger.png" alt="veggie_burger"></label>
        <label for="sandwich"><input type="checkbox" id="sandwich" v-bind:value="false" v-model="vue.sandwich"><img class="button_img" src="../assets/sandwich.png" alt="sandwich"></label>
    </div>

    <div class="complemets">
      <div class="fries">
        <button type="button" name="button"><img class="button_img" src="../assets/french_fries.png" alt="french_friesr"></button>
        <button type="button" name="button"><img class="button_img" src="../assets/onion_rings.png" alt="onion_rings"></button>
      </div>
      <div class="menu-complements">
        <div v-if="vue.beef | vue.chicken | vue.veggie"  class="tamaño">
        <label for=""><input type="checkbox" v-model="vue.size" v-bind:value="true" name="button"><h3>SENCILLA</h3></label>
        <label for=""><input type="checkbox" v-model="vue.size" v-bind:value="true" name="button"><h3>DOBLE</h3></label>  
        </div>
        <div v-if="vue.sandwich | vue.size" class="vegetables">
          <button type="button" name="button"><img class="button_img" src="../assets/onion.png" alt="soda"></button>
          <button type="button" name="button"><img class="button_img" src="../assets/tomatoe.png" alt="wather"></button>
          <button type="button" name="button"><img class="button_img" src="../assets/lettuce.png" alt="soda"></button>
          <button type="button" name="button"><img class="button_img" src="../assets/pepper.png" alt="wather"></button>
          <button type="button" name="button"><h3>NINGUNO</h3></button>
        </div>
    </div>

  </div>
  <div class="beverage">
    <button type="button" name="button"><img class="button_img" src="../assets/juce.png" alt="juce"></button>
    <button type="button" name="button"><img class="button_img" src="../assets/coffe.png" alt="coffe"></button>
    <button type="button" name="button"><img class="button_img" src="../assets/soda.png" alt="soda"></button>
    <button type="button" name="button"><img class="button_img" src="../assets/wather.png" alt="wather"></button>
  </div>

  </div>

  <div class="tiket">
    <img class="tiket-libreta" src="../assets/libreta.png" alt="tiket">
    <form @submit="addClient(client)">
      <input v-model="client" placeholder="Cliente">
      <p style="white-space: pre-line;">{{ complemet }}</p>
        <br>
      <p>{{vue}}</p>
      <p>{{vegetables}}</p>
        <br>
      <p>{{beverage}}</p>
      <button type="submit" class="button">Agregar nuevo cliente</button>
    </form>
  </div>
</div>
</template>

<script>

import { db } from '../main'

export default {
  name: 'Menu',
  data () {
    return {
      vue:{
      beef: null,
      chicken:null,
      veggie:null,
      sandwich: null,
      size:null,
    },
      client: '',
      orders:[],
      beverage: '',
      complemet: '',
      mainDish: {},
      bread:'',
      extras:[],
      protein:'',
      vegetables:[],
    }
  },
  firestore () {
    return {
      locations: db.collection('orders').orderBy('createdAt')
    }
  },
  methods: {
    addClient(client){
      db.collection('orders').add({client})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  background-color: transparent;
  width: 111px;
  height: 90px;
  padding: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

form{
  z-index: 1;
  margin-top: 3%;
}

input{
  background-color: transparent;
  border: transparent;
}
</style>
