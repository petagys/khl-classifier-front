<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{date}}</p>
    <input v-model="someInput">
    <b-list-group>{{someInput}}</b-list-group>
  </div>
</template>



<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        date: 'Я загрузил эту страницу за ' + new Date().toLocaleString(),
        someInput: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
