<template>
<div class="Code" id="code">

  <input type="password" name="codigo-de-empleado" value="" style="display: block;">

  <table>
  <router-link to="/menu"><tr>
      <td><label for="1"><input type="checkbox" v-on:click="typeNumber(1)" id="1"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>1</h2></label></td>
      <td><label for="2"><input type="checkbox" v-on:click="typeNumber(2)" id="2"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>2</h2></label></td>
      <td><label for="3"><input type="checkbox" v-on:click="typeNumber(3)" id="3"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>3</h2></label></td>
    </tr>
    <tr>
      <td><label for="4"><input type="checkbox" v-on:click="typeNumber(4)" id="4"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>4</h2></label></td>
      <td><label for="5"><input type="checkbox" v-on:click="typeNumber(5)" id="5"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>5</h2></label></td>
      <td><label for="6"><input type="checkbox" v-on:click="typeNumber(6)" id="6"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>6</h2></label></td>
    </tr>
    <tr>
      <td><label for="7"><input type="checkbox" v-on:click="typeNumber(7)" id="7"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>7</h2></label></td>
      <td><label for="8"><input type="checkbox" v-on:click="typeNumber(8)" id="8"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>8</h2></label></td>
      <td><label for="9"><input type="checkbox" v-on:click="typeNumber(9)" id="9"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>9</h2></label></td>
    </tr>
    <tr>
      <td></td>
      <td><label for="0"><input type="checkbox" v-on:click="typeNumber(0)" id="0"><img class="button_img" alt="Vue logo" src="../assets/code-burger.png"><h2>0</h2></label></td>
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

h2{
  margin-top: 10px;
  margin-left: 25px;
  color: black;
}

input{
  display: none;
  margin: 20px;
  height: 51px;
  border-radius: 40px;
}

label{
  display: flex;
}

</style>
