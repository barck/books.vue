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
            <input type="file" id="file" name="file">
            <v-alert type="error" v-model="errorAlert">
              Empty img!
            </v-alert>
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
      cover: '',
      errorAlert: false,
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
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    saveEditions() {
      const file = document.querySelector('#file').files[0];
      if (file) {
        this.getBase64(file)
          .then((data) => {
            this.cover = data;
          })
          .then(() => {
            const id = this.$route.params.id;
            axios.put(`http://localhost:3000/books/${id}`, { class: this.book.class, subject: this.book.subject, authors: this.book.authors, userBookId: this.book.userBookId, cover: this.cover });
            this.$router.push(`/book/${id}`);
          });
      } else {
        this.errorAlert = true;
      }
    },
  },
  mounted() {
    this.getBook();
  },
};
</script>
