<template>
  <b-container>
    <b-row align-h="center" class="mt-3">
      <b-col cols="2" style="border-right: 1px solid lightgrey ">
        <b-button v-on:click="getTexts('hockey')" class="button" variant="primary">
          Хоккейные новости
        </b-button>
        <b-button v-on:click="getTexts('notHockey')" class="button" variant="primary">
          Нехоккейные новости
        </b-button>
      </b-col>
      <b-col cols="10">
        <div v-if="!flag">
          <div v-if="!results.length == 0">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            />
            <b-table
              id="my-table"
              :items="results"
              :per-page="perPage"
              :current-page="currentPage"
              small
            />
          </div>
        </div>
        <div v-else>
          <div class="text-center mb-3 d-flex justify-content-between">
            <b-spinner
              style="width: 3rem; height: 3rem;"
              label="Large Spinner"
              variant="primary"
              key="dark"
            >
            </b-spinner>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Articles",
    data() {
      return {
        results: [],
        flag: false,
        currentPage: 1,
        perPage: 5
      }
    },
    computed: {
      rows() {
        return this.results.length
      }
    },
    methods: {
      getTexts: function (articles) {
        this.flag = true;
        this.results = [];
        this.currentPage = 1;
        axios.get('http://localhost:8080/getArticles/' + articles)
          .then(response => {
            if (response.status === 200){
              this.flag = false;
              this.results = response.data;
            }else{
              this.results.push({"Error": "Что-то пошло не так и мы пытаемся это починить. Спасибо за Ваше терпение!"})
            }
          })
          .catch(e => {
            console.log(e);
            this.results.push({"Error": "Что-то пошло не так и мы пытаемся это починить. Спасибо за Ваше терпение!"});
            this.flag = false;
          })
      }
    }
  }
</script>

<style scoped>
  .button {
    margin: 10px;
  }
  #my-table td{
    text-align: justify;
  }
</style>
