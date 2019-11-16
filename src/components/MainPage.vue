<template>
  <div class="hello">

    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="7">
            <b-card>
              <b-card-header>
                Введите текст
              </b-card-header>
              <b-form-textarea
                id="textarea"
                v-model="someText"
                placeholder="Текст для примера..."
                rows="10"
                max-rows="20"
              ></b-form-textarea>
              <b-card-footer class="footer">
                <b-button variant="primary" v-on:click="request">Проверить</b-button>
              </b-card-footer>
            </b-card>
        </b-col>
        <b-col cols="5">
          <b-card>
            <b-card-header>
              Результат
            </b-card-header>
            <b-card-body>
              {{result}}
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>


  </div>
</template>


<script>
  import axios from 'axios';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                date: 'Я загрузил эту страницу за ' + new Date().toLocaleString(),
                someText: '',
                result: null
            }
        },
        methods:{
            request: function(){
                axios.post('http://localhost:8090/someText', {someText : this.someText})
                    .then(response => (this.result = response.data))
                    .catch(e => (console.log(e)))
            },
            test: function(){
                axios.get('http://localhost:8090/greeting')
                    .then(response => (this.result = response))
                    .catch(e => (console.log(e)))
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

  .footer{
    text-align: right;
  }
</style>
