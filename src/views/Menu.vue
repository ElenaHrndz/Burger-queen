<template>
<div class="menu">
  <div class="main">
    <router-link to="/complements"><button type="button" name="button"><img class="menu_img" src="../assets/beef_burger.png" alt="burger"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/chicken_burger.png" alt="onion_rings"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/veggie_burger.png" alt="french_friesr"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/sandwich.png" alt="sandwich"></button></router-link>
      <router-link to="/complements"></router-link>
  </div>

  <div class="complemets">
    <button type="button" name="button"><img class="menu_img" src="../assets/french_fries.png" alt="french_friesr"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/onion_rings.png" alt="onion_rings"></button>
  </div>

  <div class="beverage">
    <button type="button" name="button"><img class="menu_img" src="../assets/juce.png" alt="juce"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/coffe.png" alt="coffe"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/soda.png" alt="soda"></button>
    <button type="button" name="button"><img class="menu_img" src="../assets/wather.png" alt="wather"></button>
  </div>

</div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: transparent;
  width: 111px;
  height: 90px;
  padding: 0;
}

.beverage {
  display: flex;
  flex-direction: column;
}

.complemets {
  display: flex;
  align-self: flex-start;
}

.menu_img {
  height: inherit;
  width: inherit;
}

.main {
  display: flex;
  flex-direction: column;
}

.menu {
  display: flex;
  justify-content: space-between;
}

.vegetables {
  display: flex;
  align-self: flex-end;
}
</style>
