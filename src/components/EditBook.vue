<template>
  <div>
    <v-btn large color="warning" href="/books">Books</v-btn>
    <br>
    <code class="display-1">/Book.page</code>
    <div class="books-container">
      <v-card class="book" :key="book.id">
        <v-card-media height="100px" >
          <img src="../assets/img/book.jpg" alt="">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h5>Book ID: {{ book.id }}</h5>
            <v-text-field
                name="input-2"
                label="Book Class"
                class="input-group--focused"
                v-model="book.class"
            ></v-text-field>
            <v-text-field
                name="input-2"
                label="Book Subject"
                class="input-group--focused"
                v-model="book.subject"
            ></v-text-field>
            <v-text-field
                name="input-2"
                label="Book Authors"
                class="input-group--focused"
                v-model="book.authors"
            ></v-text-field>
            <h5 >User ID: {{ book.userBookId }}</h5>
          </div>
          <v-btn flat color="orange"
                 v-show="showEditBtn === book.userBookId"
                 @click="saveEditions(book.id)"
                 >Сохранить</v-btn>
        </v-card-title>
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
    // deleteBook(id) {
    //   const deleteBookUrl = `http://localhost:3000/books/${id}`;
    //   axios.delete(deleteBookUrl)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   // this.getAllPosts();
    // },
    // saveEditions(id) {
    //   this.deleteBook(id);
    // },
  },
  mounted() {
    this.getBook();
  },
};
</script>
