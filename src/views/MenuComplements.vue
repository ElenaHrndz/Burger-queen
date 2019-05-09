<template>
<div class="menu">
  <div class="vegetables">
    <button type="button" name="button"><img class="menu_img" src="../assets/onion.png" alt="soda"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/tomatoe.png" alt="wather"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/lettuce.png" alt="soda"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/pepper.png" alt="wather"></button>
    <button type="button" name="button"><h3>NINGUNO</h3></button>
  </div>

  <div class="tamaño">
    <button type="button" name="button"><h3>SENCILLA</h3></button>
    <button type="button" name="button"><h3>DOBLE</h3></button>
  </div>

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
/* button {
  background-color: transparent;
  width: 111px;
  height: 90px;
  padding: 0;
}

h3 {
  font-size: 1.7em;
  margin: 0;
  background-color: maroon;
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
} */
</style>
