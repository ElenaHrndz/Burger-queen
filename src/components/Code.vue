<template>
<div class="Code">
  <h1>{{ msg }}</h1>

  <input type="password" name="codigo-de-empleado" value="">
  <table>
    <tr>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>1</h2>
        </button></td>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>2</h2>
        </button></td>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>3</h2>
        </button></td>
    </tr>
    <tr>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>4</h2>
        </button></td>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>5</h2>
        </button></td>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>6</h2>
        </button></td>
    </tr>
    <tr>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>7</h2>
        </button></td>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>8</h2>
        </button></td>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>9</h2>
        </button></td>
    </tr>
    <tr>
      <td></td>
      <td><button type="button" name="button"><img alt="Vue logo" src="../assets/code-burger.png">
          <h2>0</h2>
        </button></td>
      <td></td>
    </tr>
  </table>

</div>
</template>

<script>
export default {
  name: 'Code',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  display: inline-grid;
}

h2 {
  position: absolute;
  font-size: 4em;
  margin: 0;
}

input {
  display: flex;
  justify-content: center;
}

table {
  display: inline;
}

</style>
