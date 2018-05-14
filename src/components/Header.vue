<template>
    <header>
        <a href="/" class="header-link"><h1>Vue books library</h1></a>
        <h3 v-if="isAuth">Your login id is: {{ isAuth }}</h3>
        <reg-page v-if="!showAuthBtn"></reg-page>
        <auth-page v-if="!showAuthBtn"></auth-page>
        <logout-page v-if="showAuthBtn"></logout-page>
    </header>
</template>

<script>
import Vue from 'vue';
import RegPage from './RegPage';
import AuthPage from './AuthPage';
import LogoutPage from './LogoutPage';
import store from '../store/index';

Vue.component('RegPage', RegPage);
Vue.component('AuthPage', AuthPage);
Vue.component('LogoutPage', LogoutPage);

export default {
  name: 'Header',
  data() {
    return {
    };
  },
  computed: {
    showAuthBtn() { return store.state.user; },
    isAuth() { return store.state.user; },
  },
};
</script>

