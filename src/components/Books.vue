<template>
  <div>
    <code class="display-1">/Books.page</code>
    <div class="books-container">
      <v-card v-for="book in books" :key="book.id">
        <v-card-media src="../assets/img/book.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4>{{ book.id }}</h4>
            <h3 class="headline mb-0">{{ book.class }} класс</h3>
            <h3>{{ book.subject }}</h3>
            <h5 v-for="author in book.authors" :key="author.id">{{ author }}</h5>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Удалить</v-btn>
          <v-btn flat color="orange">Редактировать</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      books: [],
      booksUrl: 'http://localhost:3000/books',
    };
  },
  computed: {
    resource() {
      return this.$resource(this.booksUrl);
    },
  },
  methods: {
    getAllPosts() {
      this.resource.get(this.booksUrl).then(
        (response) => {
          // console.log(response);
          this.books = response.data;
        },
        // (error) => {
        //   console.log(error);
        // },
      );
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>
