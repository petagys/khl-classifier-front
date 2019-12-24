<template>
  <div class="hello">


    <b-container style="padding-top: 10px;" align-h="center">
<!--      <b-row align-h="center" class="mt-5">-->
<!--        <b-col cols="12">-->

      <b-card no-body>
        <b-tabs card>
          <b-tab title="Классификация" active>
            <ClassifyForm />
          </b-tab>
          <b-tab title="Просмотр статей">
            <b-card-text>
              <Articles />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
<!--        </b-col>-->
<!--      </b-row>-->
    </b-container>


  </div>
</template>


<script>
  import axios from 'axios';
  import ClassifyForm from "./services/ClassifyForm";
  import Articles from "./services/Articles";

    export default {
        name: 'HelloWorld',
      components: {Articles, ClassifyForm},
      data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                date: 'Я загрузил эту страницу за ' + new Date().toLocaleString()
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

</style>
