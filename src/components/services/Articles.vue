<template>
  <b-container>
    <b-row align-h="center" class="mt-3">
      <b-col cols="3" style="border-right: 1px solid lightgrey ">
        <b-button v-on:click="getTexts('hockey')" class="button" variant="primary">
          Хоккейные новости
        </b-button>
        <b-button v-on:click="getTexts('notHockey')" class="button" variant="primary">
          Нехоккейные новости
        </b-button>
      </b-col>
      <b-col cols="9">
        <b-list-group>
          <b-list-group-item button>Button item</b-list-group-item>
          <b-list-group-item button>I am a button</b-list-group-item>
          <b-list-group-item button>Disabled button</b-list-group-item>
          <b-list-group-item button>This is a button too</b-list-group-item>
        </b-list-group>
        {{result}}
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
          result: '',
          someText: '',
          flag: false
        }
      },
      methods: {
        getTexts: function (articles) {
          this.flag = true;
          axios.get('http://localhost:8090/getArticles/'+articles)
            .then(response => {
              this.flag = false;
              this.result = response.data;
            })
            .catch(e => {
              console.log(e);
              this.flag = false;})
        }
      }
    }
</script>

<style scoped>
.button{
  margin: 10px;
}
</style>
