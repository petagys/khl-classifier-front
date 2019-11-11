<template>
  <div class="hello">

    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="7">
            <b-card>
              <b-card-header>
                Введите текст
              </b-card-header>
              <b-card-body>
                <b-input v-model="someInput"></b-input>
              </b-card-body>
              <b-card-footer>
                {{date}}
              </b-card-footer>
            </b-card>
        </b-col>
        <b-col cols="5">
          <b-card></b-card>
        </b-col>
      </b-row>
    </b-container>


  </div>
</template>


<script>
    export default {
        name: 'HelloWorld',
        data() {
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
