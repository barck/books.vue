<template>
    <header>
        <a href="/" class="header-link"><h1>Vue books library</h1></a>
        <reg-page></reg-page>
    </header>
</template>

<script>
import Vue from 'vue';
import RegPage from './RegPage';

Vue.component('RegPage', RegPage);

export default {
  name: 'Header',
};
</script>

