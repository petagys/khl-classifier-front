<template>
  <div>
    <b-card-text>
      <b-container>
        <b-row align-h="center" class="mt-3">
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
                <b-button :disabled="someText.trim() === ''" variant="primary" v-on:click="request">Проверить</b-button>
              </b-card-footer>
            </b-card>
          </b-col>
          <b-col cols="5">
            <b-card>
              <b-card-header>
                Результат
              </b-card-header>
              <b-card-body class="result" v-if="!flag">
                {{result}}
              </b-card-body>
              <b-card-body class="result" v-else>
                <div class="text-center mb-3 d-flex justify-content-between">
                  <b-spinner
                    style="width: 3rem; height: 3rem;"
                    label="Large Spinner"
                    variant="primary"
                    key="dark"
                  >
                  </b-spinner>
                  <p style="padding-top: 10px">Происходит классификация текста</p>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-card-text>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "ClassifyForm",
    data() {
      return {
        result: '',
        someText: '',
        flag: false
      }
    },
    methods: {
      request: function () {
        if (this.someText.length >= 100) {
          this.flag = true;
          axios.post('http://localhost:8080/someText', {someText: this.someText})
            .then(response => {
              if (response.status === 200) {
                this.flag = false;
                this.result = response.data;
              } else {
                this.flag = false;
                this.result = 'Произошла ошибка. Инженеры уже чинят классификатор';
              }

            })
            .catch(e => {
              console.log(e);
              this.flag = false;
              this.result = 'Произошла ошибка. Скорее всего что-то с интернетом...'
            })
        }else{
          this.result = "Для более точной классификации текста необходимо ввести более 100 символов!";
        }
      }
    }
  }
</script>

<style scoped>
  .footer {
    text-align: right;
  }

  .result {
    min-height: 200px;
  }
</style>
