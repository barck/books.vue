<template>
  <div id="app">
    <v-app>
      <header-element></header-element>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Vue from 'vue';
import HeaderElement from './components/Header';

Vue.component('HeaderElement', HeaderElement);

export default {
  name: 'App',
};
</script>

<style lang="stylus">
@import './assets/styles/index'
</style>
