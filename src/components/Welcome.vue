<template>
  <div>
    <form @submit="addClient(client)">
      <h4>Nuevo Cliente</h4>
      <input v-model="client" placeholder="Cliente">
      <p>Hola: {{ client }}</p>
      <button type="submit" class="button">Agregar nuevo cliente</button>
    </form>
  </div>
</template>

<script>

import { db } from '../main'

export default {
  name: 'Welcome',
  data () {
    return {
      client: ''
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

input, button {
  margin-bottom: 10px;
}
</style>
