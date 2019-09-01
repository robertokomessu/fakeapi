<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Arial', sans-serif
  }
  .main {
    
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .success{  
    background-color: #4caf50;
  }

  .error {
    background-color: #ff5252;
  }
</style>