<template>
<div class="Code" id="code">

  <input type="password" name="codigo-de-empleado" value="">

  <table>
  <router-link to="/menu"><tr>
      <td><button type="button" name="button" v-on:click="typeNumber(1)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>1</h2></button></td>
      <td><button type="button" name="button" v-on:click="typeNumber(2)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>2</h2></button></td>
      <td><button type="button" name="button" v-on:click="typeNumber(3)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>3</h2></button></td>
    </tr>
    <tr>
      <td><button type="button" name="button" v-on:click="typeNumber(4)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>4</h2></button></td>
      <td><button type="button" name="button" v-on:click="typeNumber(5)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>5</h2></button></td>
      <td><button type="button" name="button" v-on:click="typeNumber(6)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>6</h2></button></td>
    </tr>
    <tr>
      <td><button type="button" name="button" v-on:click="typeNumber(7)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>7</h2></button></td>
      <td><button type="button" name="button" v-on:click="typeNumber(8)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>8</h2></button></td>
      <td><button type="button" name="button" v-on:click="typeNumber(9)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>9</h2></button></td>
    </tr>
    <tr>
      <td></td>
      <td><button type="button" name="button" v-on:click="typeNumber(0)"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>0</h2></button></td>
      <td></td>
    </tr></router-link>
  </table>

</div>
</template>

<script>
var pass = "Empleado";
  export default{
    name: "Code",
    methods:{
      typeNumber: function(number){
        pass += number;
        alert(pass);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  display: inline-grid;
}


</style>
