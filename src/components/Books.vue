<template>
  <div>
    <code class="display-1">/Books.page</code>
    <v-form class="add_book">
      <v-text-field label="Класс" v-model="klass"></v-text-field>
      <v-text-field label="Автор" v-model="authors"></v-text-field>
      <v-text-field label="Предмет" v-model="subject"></v-text-field>
      <input type="file" id="file" name="file">
      <v-btn @click.prevent="addImg" color="warning">Добавить картинку</v-btn>
      <v-btn @click.prevent="addBook" color="warning" >Добавить книгу</v-btn>
    </v-form>
    <div class="books-container">
      <v-card class="book" v-for="book in books" :key="book.id">
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
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="deleteBook(book.id)">Удалить</v-btn>
          <v-btn flat color="orange" @click="bookLink(book.id)">Страница книги</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <br>
  </div>
</template>

<script>
import axios from 'axios';
import PictureInput from 'vue-picture-input';
import store from '../store/index';

export default {
  name: 'Books',
  components: {
    PictureInput,
  },
  data() {
    return {
      currentBook: 0,
      klass: '',
      authors: '',
      subject: '',
      userBookId: '',
      cover: '',
      books: [],
      booksUrl: 'http://localhost:3000/books',
    };
  },
  computed: {
  },
  methods: {
    bookLink(id) {
      /* eslint-disable no-console */
      console.log(id);
      // window.location.href += `/${id}`;
      this.$router.push(`book/${id}`);
      // this.$route.params;
    },
    getAllBooks() {
      axios.get(this.booksUrl)
        .then((response) => {
          this.books = response.data;
        });
    },
    deleteBook(id) {
      const deleteBookUrl = `http://localhost:3000/books/${id}`;
      axios.delete(deleteBookUrl)
        .then((response) => {
          console.log(response);
          this.getAllBooks();
        })
        .catch((error) => {
          console.log(error);
        });
      // this.getAllPosts();
    },
    addBook() {
      this.addImg();
      axios.post('http://localhost:3000/books', { class: this.klass, authors: this.authors, subject: this.subject, userBookId: store.state.user, cover: this.cover })
        .then((response) => {
          console.log(response);
          this.getAllBooks();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onChange(image) {
      console.log('New picture selected!');
      if (image) {
        console.log('Picture loaded.');
        this.image = image;
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!');
      }
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    addImg() {
      const file = document.querySelector('#file').files[0];
      this.getBase64(file).then(
        (data) => {
          this.cover = data;
        },
      );
    },
  },
  // updated() {
  //   this.getAllPosts();
  // },
  mounted() {
    this.getAllBooks();
  },
};
</script>
