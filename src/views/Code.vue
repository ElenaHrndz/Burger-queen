<template>
<div class="Code" id="code">

  <input type="password" name="codigo-de-empleado" value="">
  <!-- <h1>hola {{ number }}</h1> -->
  <table>
    <tr>
      <td><button type="button" name="button" id="1"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>1</h2>
        </button></td>
      <td><button type="button" name="button" id="2"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>2</h2>
        </button></td>
      <td><button type="button" name="button" id="3"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>3</h2>
        </button></td>
    </tr>
    <tr>
      <td><button type="button" name="button" id="4"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>4</h2>
        </button></td>
      <td><button type="button" name="button" id="5"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>5</h2>
        </button></td>
      <td><button type="button" name="button" id="6"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>6</h2>
        </button></td>
    </tr>
    <tr>
      <td><button type="button" name="button" id="7"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>7</h2>
        </button></td>
      <td><button type="button" name="button" id="8"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>8</h2>
        </button></td>
      <td><button type="button" name="button" id="9"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>9</h2>
        </button></td>
    </tr>
    <tr>
      <td></td>
      <td><button type="button" name="button" id="0" @click="typeNumber(0)"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>0</h2>
        </button></td>
      <td></td>
    </tr>
  </table>

</div>
</template>

<script>

// export default {
//   name: "Code",
//   data: {
//     number: 0
//   },
//   methods: {
//     typeNumber() {
//       this.number++
//       // alert(pass);
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: inline-grid;
}
</style>
