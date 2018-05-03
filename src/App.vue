<template>
  <v-app>

    <v-toolbar>
      <h1>Books library</h1>
    </v-toolbar>
    <v-content>
      <v-container>
        <div class="books-container">
          <v-card v-for="book in books">
            <v-card-media src="./src/img/book.jpg" height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h4>{{ book.id }}</h4>
                <h3 class="headline mb-0">{{ book.class }} класс</h3>
                <h3>{{ book.subject }}</h3>
                <h5 v-for="author in book.authors">{{ author }}</h5>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Удалить</v-btn>
              <v-btn flat color="orange">Редактировать</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </v-content>

    <v-footer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        booksUrl: 'http://localhost:3000/books',
        books: []
      }
    },
    computed: {
      resource: function () {
        return this.$resource(this.booksUrl);
      }
    },
    methods: {
      getAllPosts: function () {
        this.resource.get(this.booksUrl).then(
          function (response) {
            console.log(response);
            this.books = response.data;
          },
          function (error) {
            console.log(error);
          }
        )
      }
    },
    created: function () {
      this.getAllPosts();
    }
  }
</script>

<style lang="stylus">
  @import 'styles/style.styl'
</style>
