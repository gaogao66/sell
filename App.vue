<template>
  <div id="app">
    <child :sell="sell"></child>
  </div>
</template>

<script>
import child from './components/child'
export default {
  name: 'App',
  data () {
    return {
      sell: 1
    }
  },
  components: {
    child
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
