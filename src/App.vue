<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="hello">
    <ul>
      <li><router-link  to="/HomePage" replace>Home</router-link></li>
      <li><router-link  to="/UnitsPage" replace>Units</router-link></li>
      <li><router-link  to="/TasksPage" replace>Tasks</router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
  font-weight:bold;
}

li a{
  color: rgb(0, 57, 43);
}

li a.router-link-active{
  color: rgb(0, 214, 164);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
