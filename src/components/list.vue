<template>
  <ul>
    <li>
      <router-link to="/helloWorld"> Hello World</router-link>
    </li>
    <router-link to="/helloEarth"> Hello Earth</router-link>
  </ul>
</template>

<script>
  export default {
    name: 'List'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  cursor: pointer;
}
</style>
