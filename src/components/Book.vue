<template>
  <div>
    <v-btn large color="warning" href="/books">Books</v-btn>
    <br>
    <code class="display-1">/Book.page</code>
    <div class="books-container">
      <v-card class="book">
        <v-card-media height="100px" >
          <img src="../assets/img/book.jpg" alt="">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h4> book.id </h4>
            <h3 class="headline mb-0"> book.class  класс</h3>
            <h3> book.subject </h3>
            <h5 > book.authors </h5>
          </div>
        </v-card-title>
      </v-card>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Book',
  mounted() {
    /* eslint-disable no-console */
    console.log(this.$route.params.id);
  },
};
</script>
