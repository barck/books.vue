<template>
    <header>
        <a href="/" class="header-link"><h1>Vue books library</h1></a>
        <reg-page></reg-page>
        <auth-page></auth-page>
        <logout-page></logout-page>
    </header>
</template>

<script>
import Vue from 'vue';
import RegPage from './RegPage';
import AuthPage from './AuthPage';
import LogoutPage from './LogoutPage';

Vue.component('RegPage', RegPage);
Vue.component('AuthPage', AuthPage);
Vue.component('LogoutPage', LogoutPage);

export default {
  name: 'Header',
};
</script>

