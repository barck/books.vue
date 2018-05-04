<template>
  <div>
    <code class="display-1">/Books.page</code>
    <div class="books-container">
      <v-card v-for="book in books" :key="book.id">
        <v-card-media height="200px" >
          <img src="../assets/img/book.jpg" alt="">
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
import axios from 'axios';

export default {
  name: 'Books',
  data() {
    return {
      show: true,
      books: [],
      booksUrl: 'http://localhost:3000/books',
    };
  },
  computed: {
  },
  methods: {
    getAllPosts() {
      axios.get(this.booksUrl)
        .then((response) => {
          this.books = response.data;
        });
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>
