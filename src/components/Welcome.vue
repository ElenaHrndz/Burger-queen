<template>
  <div class="Welcome">
      <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/burger_queen.png">
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
