<template>
<div class="">


  <div class="menu">
    <div class="main">
        <button type="button" name="button"><img class="button_img" src="../assets/beef_burger.png" alt="burger"></button>
        <button type="button" name="button"><img class="button_img" src="../assets/chicken_burger.png" alt="onion_rings"></button>
        <button type="button" name="button"><img class="button_img" src="../assets/veggie_burger.png" alt="french_friesr"></button>
        <button type="button" name="button"><img class="button_img" src="../assets/sandwich.png" alt="sandwich"></button>
    </div>

    <div class="complemets">
      <div class="fries">
        <button type="button" name="button"><img class="button_img" src="../assets/french_fries.png" alt="french_friesr"></button>
        <button type="button" name="button"><img class="button_img" src="../assets/onion_rings.png" alt="onion_rings"></button>
      </div>
      <div class="menu-complements">
        <div class="tamaño">
          <button type="button" name="button"><h3>SENCILLA</h3></button>
          <button type="button" name="button"><h3>DOBLE</h3></button>
        </div>
        <div class="vegetables">
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

</style>
