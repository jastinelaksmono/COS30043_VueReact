<template>
  <div class="hello">
    <h1>Welcome {{ fname }} {{lname}}!</h1>
    <p>What is your name?</p>
    <form>
      <label for="fname">First Name</label>
      <input type="text" id="fname" v-model="fname"/><br>

      <label for="lname">Last Name</label>
      <input type="text" id="lname" v-model="lname"/><br>

      <input type="radio" name="pic" id="ocean" value="ocean" v-model="pic"/>
      <label for="ocean">Ocean</label>
      <input type="radio" name="pic" id="mountain" value="mountain" v-model="pic"/>
      <label for="mountain">Mountain</label>
      
      <div v-if="pic == 'mountain'">
        <img src="../assets/mountain.jpg" alt="mountain" id="mountainImg">
      </div>
      <div v-else-if="pic == 'ocean'">
        <img src="../assets/ocean.jpg" alt="ocean" id="oceanImg">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: 'HomePage',
      fname: '',
      lname: '',
      pic: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
label, input{
  margin-top: 1vw;
  margin-bottom: 1vw;
}

img{
  display: inline-block;
  width: 30%;
}
</style>
