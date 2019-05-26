<template>
<div class="">

  <div class="menu">
    <div class="main">
      <!-- <maleselectelemen="creteAnOrder('beef')" idData="beef_burge" imageDir='/assets/beef_burger.png' altData="beef_burger"></maleselectelement> -->
      <label for="beef_burger"><input type="checkbox" @click="creteAnOrder('beef')" id="beef_burger"><img class="button_img" src="../assets/beef_burger.png" alt="beef_burger"></label>
      <label for="chicken_burger"><input type="checkbox" @click="creteAnOrder('chiken')" id="chicken_burger"><img class="button_img" src="../assets/chicken_burger.png" alt="chicken_burger"></label>
      <label for="veggie_burger"><input type="checkbox" @click="creteAnOrder('veggie')" id="veggie_burger"><img class="button_img" src="../assets/veggie_burger.png" alt="veggie_burger"></label>
      <label for="sandwich"><input type="checkbox"@click="creteAnOrder('sandwich')" id="sandwich"><img class="button_img" src="../assets/sandwich.png" alt="sandwich"></label>
    </div>
    <div class="complemets">
      <div class="fries">
        <label for="french_fires"><input type="checkbox" @click="selectComplement('fries')" id="french_fires"><img class="button_img" src="../assets/french_fries.png" alt="french_friesr"></label>
        <label for="onion_rings"><input type="checkbox" @click="selectComplement('onion_rings')" id="onion_rings"><img class="button_img" src="../assets/onion_rings.png" alt="onion_rings"></label>
      </div>
      <div class="menu-complements">
        <div v-if="mainDish.protein" class="size">
          <label for="sencilla"><input type="checkbox" v-model="mainDish.size" @click="selectBreadSize(false)" id="sencilla"><h3>SENCILLA</h3></label>
          <label for="doble"><input type="checkbox" v-model="mainDish.size" @click="selectBreadSize(true)" id="doble"><h3>DOBLE</h3></label>
        </div>
        <div v-if="mainDish.size" class="vegetables">
          <label for="onion"><input type="checkbox" @click="selectVegetables('onion')" id="onion"><img class="button_img" src="../assets/onion.png" alt="soda"></label>
          <label for="tomatoe"><input type="checkbox" @click="selectVegetables('tomatoe')" id="tomatoe"><img class="button_img" src="../assets/tomatoe.png" alt="wather"></label>
          <label for="lettuce"><input type="checkbox" @click="selectVegetables('lettuce')" id="lettuce"><img class="button_img" src="../assets/lettuce.png" alt="soda"></label>
          <label for="pepper"><input type="checkbox" @click="selectVegetables('pepper')" id="pepper"><img class="button_img" src="../assets/pepper.png" alt="wather"></label>
          <label for="any"><input type="checkbox" @click="selectVegetables('none')" id="any"><h3>NINGUNO</h3></label>
        </div>
      </div>
    </div>
    <div class="beverage">
      <label for="juce"><input type="checkbox" @click="selectBeverage('juce')" id="juce"><img class="button_img" src="../assets/juce.png" alt="juce"></label>
      <label for="coffe"><input type="checkbox" @click="selectBeverage('coffe')" id="coffe"><img class="button_img" src="../assets/coffe.png" alt="coffe"></label>
      <label for="soda"><input type="checkbox" @click="selectBeverage('soda')" id="soda"><img class="button_img" src="../assets/soda.png" alt="soda"></label>
      <label for="water"><input type="checkbox" @click="selectBeverage('water')" id="water"><img class="button_img" src="../assets/water.png" alt="water"></label>
    </div>
  </div>

  <div class="tiket">
    <img class="tiket-libreta" src="../assets/libreta.png" alt="tiket">
    <form @submit.prevent="addClient(client, orders)">
      <input class="nombre" v-model="client" placeholder="Cliente">
      <p>orders are : {{orders}}</p>
      <button type="submit" class="button"><h3>Enviar orden</h3></button>
    </form>
  </div>
  <router-link to="/orders"><button type="button" name="button"><h3>Ordenes</h3></button></router-link>
</div>
</template>

<script>
import {db} from '../main'
import maleselectelement from '../components/selectableElement'

export default {
  name: 'Menu',
  data() {
    return {
      currentOrder: 0,
      orders: [],
      order: null,
      mainDish: {
        protein: false,
        size: null
      },
      complement: null,
      client: '',
      isOrderFinish: true,
    }
  },
  firestore() {
    return {
      orders  : db.collection('orders').orderBy('createdAt')
    }
  },
  methods: {
    addClient(client, orders) {
      const createdAt = new Date()
      db.collection('orders').add({
        client,
        orders,
        createdAt
      })
      .then((data) => {
        this.order= '';
      // console.log('send data');
    });
    },

    creteAnOrder(proteinToSet) {
      if(this.orders[this.currentOrder]){
        if (!this.mainDish.protein) {
          this.orders[this.currentOrder].mainDish.protein = proteinToSet
          this.orders[this.currentOrder].mainDish.vegetables = ['onion', 'tomatoe', 'lettuce', 'pepper'];
          this.mainDish.protein = true;
        } else {
          if (this.orders[this.currentOrder].mainDish.protein === proteinToSet) {
            if(this.orders[this.currentOrder].beverage === '' && this.orders[this.currentOrder].complement === '' ){
              this.orders.shift(this.orders[this.currentOrder]);
              this.mainDish.protein = false;
            }
            else {
              this.orders[this.currentOrder].mainDish.protein = ''
              this.mainDish.protein = false;
            }
          } else {
            this.orders[this.currentOrder].mainDish.protein = proteinToSet
          }
        }

      }
      else {
        let order = {
          beverage: '',
          complement: '',
          mainDish: {
            bread: '',
            protein: proteinToSet,
            vegetables: ['onion', 'tomatoe', 'lettuce', 'pepper'],
            extras: '',
          }
        }
        this.orders.push(order);
        this.mainDish.protein = true;
        // this.orders.then(()=> this.order='');
      }
    },
    selectBreadSize(isJumbo) {
      let sizeOfBread = "jumbo";
      if (!isJumbo) {
        sizeOfBread = "big"
      }
      this.orders[this.currentOrder].mainDish.bread = sizeOfBread;
    },
    selectBeverage(kindOfBeverage) {
      if(this.orders[this.currentOrder]){
        if(this.orders[this.currentOrder].beverage === kindOfBeverage){
            if(this.orders[this.currentOrder].mainDish.protein === '' && this.orders[this.currentOrder].complement === ''){
              this.orders.shift(this.orders[this.currentOrder]);
            }
            else {
              this.orders[this.currentOrder].beverage = '';
            }
        }
        else {
            this.orders[this.currentOrder].beverage = kindOfBeverage;
        }
      }
      else {
        let order = {
          beverage: kindOfBeverage,
          complement: '',
          mainDish: {
            bread: '',
            protein: '',
            vegetables: [],
            extras: '',
          }
        }
        this.orders.push(order);
      }
    },
    selectComplement(kindOfComplement) {
      if(this.orders[this.currentOrder]){
        if(this.orders[this.currentOrder].complement === kindOfComplement){
          if(this.orders[this.currentOrder].mainDish.protein === '' && this.orders[this.currentOrder].beverage === ''){
            this.orders.shift(this.orders[this.currentOrder]);
          }
            else {
              this.orders[this.currentOrder].complement = '';
            }
        }
        else {
            this.orders[this.currentOrder].complement = kindOfComplement;
        }
      }
      else {
        let order = {
          beverage: '',
          complement: kindOfComplement,
          mainDish: {
            bread: '',
            protein: '',
            vegetables: [],
            extras: '',
          }
        }
        this.orders.push(order);
      }
    },
    selectVegetables(selectedVegetable) {
      switch (selectedVegetable) {
        case 'all':
            this.orders[this.currentOrder].mainDish.vegetables = ['onion', 'tomatoe', 'lettuce', 'pepper'];
          break;
        case 'none':
          this.orders[this.currentOrder].mainDish.vegetables = [];
          break;
        default:
          if(this.orders[this.currentOrder].mainDish.vegetables.includes(selectedVegetable)){
            let index = this.orders[this.currentOrder].mainDish.vegetables.indexOf(selectedVegetable)
            this.orders[this.currentOrder].mainDish.vegetables.shift(index);
          }
          else {
            this.orders[this.currentOrder].mainDish.vegetables.push(selectedVegetable)
          }
        break;
      }
    },
  // components: {
  //   maleselectelement
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  display: none;
}

form {
  z-index: 1;
  margin: 3% 1%;
  height: auto;
  width: 22%;
}

input {
  background-color: transparent;
  border: transparent;
}

label {
  width: 111px;
  height: 90px;
  padding: 0;
  display: flex;
  align-items: center;
}

.nombre {
  display: flex;
}
</style>
