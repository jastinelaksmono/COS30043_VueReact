<template>
    <div class="hello">
      <h1>Tasks</h1>
        <label for="status">Status: </label>
		    <input type="text" id="status" v-model="status">
        <button v-on:click="addStatus()">Post</button>
        
        <div v-for="(s, index) in statuses" v-bind:key="s">
            {{s}}
            <button v-on:click="delStatus(index)">Del</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        name: 'TasksPage',
        status: '',
        statuses: []
      }
    },
    methods:{
      addStatus: function(){
            this.statuses.push(this.status);
        },
      delStatus: function(index){
          this.statuses.splice(index, 1);
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
  </style>
  