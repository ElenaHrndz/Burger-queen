<template>
  <div>
    <form @submit="addClient(client)">
      <h4>Nuevo Cliente</h4>
      <input v-model="client" placeholder="Cliente">
      <p>Hola: {{ client }}</p>
      <button type="submit" class="button">Agregar nuevo cliente</button>
    </form>

    <hr>

<div class="menu">
    <div class="main">
      <ul v-for="protein in proteins">
        <li><maleselectelement v-bind:imageDir="proteins.imageDir" altData=""></maleselectelement></li>
        <!-- <a v-bind:href="imageDir"></a> -->
          <!-- <label for="beef_burger"><input type="checkbox" v-on:click="{functionToDo}" v-bind:id="idData"><img class="button_img" :src=imageDir :alt="altData"></label> -->
      </ul>
    </div>

        <div class="beverage">
          <ul v-for="beverage in beverages">
            <li><maleselectelement function="creteAnOrder('beef')" idData="beef_burge" imageDir='/assets/beef_burger.png' altData="beef_burger"></maleselectelement> </li>
          </ul>
        </div>

      </div>
  </div>
</template>

  <script>
  import {db} from '../main'
  import maleselectelement from '../components/selectableElement'

  export default {
    name: 'Welcome',
    data () {
      return {
        client: '',
        proteins:[
          {
            imageDir:'../assets/beef_burger.png',
            idData:'beef_burge',
            altData:'beef_burge',
          },
          'chicken_burger',
          'veggie_burger',
          'switch'
        ],
        beverages:[
          'soda',
          'juce',
          'water',
          'coffe'
        ]
      }
    },
    // firestore() {
    //   return {
    //     orders  : db.collection('orders').orderBy('createdAt')
    //   }
    // },
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
        console.log('send data');
      });
      }
    },
    components: {
      maleselectelement
    }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input, button {
  margin-bottom: 10px;
}

input{
  display: block;
}
</style>
