<template lang="html">
  <div>
  <h1>Ordenes</h1>
  <hr>
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Tiket</th>
        <th>Hora</th>
        <th>Borrar</th>
      </tr>
    </thead>
  <tbody>
    <tr v-for="order in orders">
      <td>{{order.data().client}}</td>
      <td>{{order.data().orders}}</td>
      <td>{{order.data().createdAt}}</td>
      <td>
        <button @click="deletOrder(order.id)">Borrar</button>
      </td>
    </tr>
  </tbody>
  </table>
  <router-link to="/menu"><button type="button" name="button"><h3>Tomar Orden</h3></button></router-link>

</div>
</template>

<script>
import {fb, db} from '../main'
export default {
  name: 'Tiket',
  data() {
    return {
      orders: [],
      order:{
        client:null,
        order:null,
        createdAt:null
      }
    };
  },
  firestore() {
    return {
      orders  : db.collection('orders').orderBy('createdAt')
    }
  },
  methods: {
    readData() {
      db.collection("orders").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.orders.push(doc);
        });
      });
    },
    watcher(){
      db.collection("orders").onSnapshot((querySnapshot) => {
        this.orders = [];
        querySnapshot.forEach((doc) => {
            this.orders.push(doc);
        });
    });
  },
    deletOrder(doc){
      db.collection("orders").doc(doc).delete().then(() => {
        // console.log("borrado");
      }).catch((err) => {
        // console.log("error");
      });
      this.watcher();
    },
    changeMenu(menu) {
      this.currentMenu = menu.replace(/ +/g, '').toLowerCase();
      return this.currentMenu;
    },
  },
  created() {
    this.readData()
   },
}
</script>

<style lang="css" scoped>

table{
  display: table;
  margin: 3%;
}

thead{
  background-color: whitesmoke;
  opacity: .5;
}

tbody{
  background-color: whitesmoke;
  opacity: .3;
}
</style>
