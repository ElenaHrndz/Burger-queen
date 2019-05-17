<template>
<div class="">


  <div class="menu">
    <div class="main">
        <label for="beef_burger"><input type="checkbox" v-on:click="creteAnOrder('beef')" id="beef_burger" v-bind:value="true"><img class="button_img" src="../assets/beef_burger.png" alt="beef_burger"></label>
        <label for="chicken_burger"><input type="checkbox" v-on:click="creteAnOrder('chiken')" id="chicken_burger" v-bind:value="true"><img class="button_img" src="../assets/chicken_burger.png" alt="chicken_burger"></label>
        <label for="veggie_burger"><input type="checkbox" v-on:click="creteAnOrder('veggie')" id="veggie_burger" v-bind:value="true"><img class="button_img" src="../assets/veggie_burger.png" alt="veggie_burger"></label>
        <label for="sandwich"><input type="checkbox" v-bind:value="false" id="sandwich" v-model="vue.sandwich"><img class="button_img" src="../assets/sandwich.png" alt="sandwich"></label>
    </div>

    <div class="complemets">
      <div class="fries">
        <label for="french_fires"><input type="checkbox" v-on:click="selectComplement" id="french_fires"><img class="button_img" src="../assets/french_fries.png" alt="french_friesr"></label>
        <label for="onion_rings"><input type="checkbox" v-on:click="selectComplement" id="onion_rings"><img class="button_img" src="../assets/onion_rings.png" alt="onion_rings"></label>
      </div>
      <div class="menu-complements">
        <div v-if="vue.protein"  class="tamaño">
        <label for="sencilla"><input type="checkbox" id="sencilla"v-model="vue.size" v-on:click="selectBreadSize(false)" v-bind:value="true" name="button"><h3>SENCILLA</h3></label>
        <label for="doble"><input type="checkbox" id="doble" v-model="vue.size" v-on:click="selectBreadSize(true)" v-bind:value="true" name="button"><h3>DOBLE</h3></label>
        </div>
        <div v-if="vue.sandwich | vue.size" class="vegetables">
          <label for="onion"><input type="checkbox" v-on:click="selectVegetables" id="onion"><img class="button_img" src="../assets/onion.png" alt="soda"></label>
          <label for="tomatoe"><input type="checkbox" v-on:click="selectVegetables" id="tomatoe"><img class="button_img" src="../assets/tomatoe.png" alt="wather"></label>
          <label for="lettuce"><input type="checkbox" v-on:click="selectVegetables" id="lettuce"><img class="button_img" src="../assets/lettuce.png" alt="soda"></label>
          <label for="pepper"><input type="checkbox" v-on:click="selectVegetables" id="pepper"><img class="button_img" src="../assets/pepper.png" alt="wather"></label>
          <label for="any"><input type="checkbox" v-on:click="selectVegetables" id="any"><h3>NINGUNO</h3></label>
        </div>
    </div>

  </div>
  <div class="beverage">
    <label for="juce"><input type="checkbox" v-on:click="selectBeverage" id="juce"><img class="button_img" src="../assets/juce.png" alt="juce"></label>
    <label for="coffe"><input type="checkbox" v-on:click="selectBeverage" id="coffe"><img class="button_img" src="../assets/coffe.png" alt="coffe"></label>
    <label for="soda"><input type="checkbox" v-on:click="selectBeverage" id="soda"><img class="button_img" src="../assets/soda.png" alt="soda"></label>
    <label for="wather"><input type="checkbox" v-on:click="selectBeverage" id="wather"><img class="button_img" src="../assets/wather.png" alt="wather"></label>
  </div>

  </div>

  <div class="tiket">
    <img class="tiket-libreta" src="../assets/libreta.png" alt="tiket">
    <form v-on:submit.prevent="addClient(client, orders)">
      <input class="nombre" v-model="client" placeholder="Cliente">
        <br>
      <p>orders are : {{orders}}</p>
        <br>
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
      currentOrder: 0,
      beef: 0,
      chicken: 0,
      veggie:0,
      sandwich: 0,
      orders: [],
      isOrderFinish: true,
      vue:{
        size:null,
        protein: false
      },
      client: ''
    }
  },
  firestore () {
    return {
      locations: db.collection('orders').orderBy('createdAt')
    }
  },
  methods: {
    addClient(client, orders){
      db.collection('orders').add({client, orders})
    },
    incrementar (){
      this.number++
    },
    creteAnOrder: function(proteinToSet){
      if(!this.vue.protein){
        let order = {
          beverage: '',
          complemet: '',
          mainDish: {
            bread:'',
            protein:proteinToSet,
            vegetables:[],
            extras:[],
          },

        }
        this.orders.push(order);
        this.vue.protein = true;
      }
      else{
        if(this.orders[this.currentOrder].mainDish.protein == proteinToSet){
          this.orders.shift(this.orders[this.currentOrder]);
          this.vue.protein = false;
        }
        else {
          this.orders[this.currentOrder].mainDish.protein = proteinToSet
        }
      }
    },
    selectBreadSize: function(isJumbo){
      let sizeOfBread = "jumbo";
      if(!isJumbo){
        sizeOfBread = "big"
      }
      this.orders[this.currentOrder].mainDish.bread = sizeOfBread;
    },
    selectBeverage: function(){},
    selectComplement:function(){},
    selectVegetables: function(){}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input{
  display: none;
}

form{
  z-index: 1;
  margin-top: 3%;
}

input{
  background-color: transparent;
  border: transparent;
}

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

.nombre{
  display: block;
}

</style>
