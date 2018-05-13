<template>
  <div>
    <code class="display-1">/Books.page</code>
    <v-form class="add_book">
      <v-text-field label="Класс" v-model="klass"></v-text-field>
      <v-text-field label="Автор" v-model="authors"></v-text-field>
      <v-text-field label="Предмет" v-model="subject"></v-text-field>
      <picture-input
          ref="pictureInput"
          @change="onChange"
          :width="200"
          :removable="true"
          removeButtonClass="ui red button"
          :height="200"
          accept="image/jpeg, image/png, image/gif"
          buttonClass="ui button primary"
          :customStrings="{
          upload: '<h1>Upload it!</h1>',
          drag: 'Drag and drop your image here'}">
      </picture-input>
      <v-btn @click.prevent="addImg" color="warning" >Добавить картинку</v-btn>
      <v-btn @click.prevent="addBook" color="warning" >Добавить книгу</v-btn>
    </v-form>
    <div class="books-container">
      <v-card class="book" v-for="book in books" :key="book.id">
        <v-card-media height="100px" >
          <img src="../assets/img/book.jpg" alt="">
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
      axios.post('http://localhost:3000/books', { class: this.klass, authors: this.authors, subject: this.subject, userBookId: store.state.user })
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
    addImg() {
      this.image = this.$refs.pictureInput.file;
      console.log(this.image);
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
