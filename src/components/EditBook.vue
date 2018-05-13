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
            <v-text-field
                name="input-2"
                label="Book ID"
                class="input-group--focused"
                v-bind:value="book.id"
            ></v-text-field>
            <v-text-field
                name="input-2"
                label="Book Class"
                class="input-group--focused"
                v-bind:value="book.class"
            ></v-text-field>
            <v-text-field
                name="input-2"
                label="Book Subject"
                class="input-group--focused"
                v-bind:value="book.subject"
            ></v-text-field>
            <v-text-field
                name="input-2"
                label="Book Authors"
                class="input-group--focused"
                v-bind:value="book.authors"
            ></v-text-field>
            <h5 >User ID: {{ book.userBookId }}</h5>
          </div>
          <v-btn flat color="orange"
                 v-show="showEditBtn === book.userBookId"
                 @click="saveEditions"
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
    saveEditions() {
      console.log(1);
    },
  },
  mounted() {
    this.getBook();
  },
};
</script>
