<template>
  <div>
    <v-btn large color="warning" href="/books">Books</v-btn>
    <br>
    <code class="display-1">/Book.page</code>
    <div class="books-container">
      <v-card class="book" :key="book.id">
        <v-card-media height="100px" >
          <img src="../assets/img/book.jpg" alt="" v-if="!book.cover">
          <img v-bind:src="book.cover">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4>{{ book.id }}</h4>
            <h3 class="headline mb-0">{{ book.class }} класс</h3>
            <h3>{{ book.subject }}</h3>
            <h5 >{{ book.authors }}</h5>
            <h5 >User ID: {{ book.userBookId }}</h5>
          </div>
        </v-card-title>
        <v-btn flat color="orange"
        v-show="showEditBtn === book.userBookId"
        @click="editBook(book.id)">Редактировать</v-btn>
      </v-card>
    </div>
    <br>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  name: 'Book',
  data() {
    return {
      klass: '',
      authors: '',
      subject: '',
      book: {},
      showEditBtn: store.state.user,
    };
  },
  methods: {
    getBook() {
      const id = this.$route.params.id;
      const oneBookUrl = `http://localhost:3000/books/${id}`;
      axios.get(oneBookUrl)
        .then((response) => {
          this.book = response.data;
        });
    },
    editBook(id) {
      this.$router.push(`edit_book/${id}`);
    },
  },
  mounted() {
    this.getBook();
  },
};
</script>
