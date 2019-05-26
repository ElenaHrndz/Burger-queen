<template>
<div class="menu">

  <router-link to="/menu"><div class="tamaño">
    <button type="button" name="button"><h3>SENCILLA</h3></button>
    <button type="button" name="button"><h3>DOBLE</h3></button>
  </div>

  <div class="complemets">
    <button type="button" name="button"><img class="button_img" src="../assets/onion.png" alt="soda"></button>
    <button type="button" name="button"><img class="button_img" src="../assets/tomatoe.png" alt="wather"></button>
    <button type="button" name="button"><img class="button_img" src="../assets/lettuce.png" alt="soda"></button>
    <button type="button" name="button"><img class="button_img" src="../assets/pepper.png" alt="wather"></button>
    <button type="button" name="button"><h3>NINGUNO</h3></button>
  </div></router-link>

</div>
</template>

<script>
export default {
  name: 'MenuComplements',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.complemets{
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu{
  display: inline;
}

.tamaño{
  margin: 15%;
  justify-content: center;
}

</style>
