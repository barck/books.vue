<template>
  <div>
    <v-layout row justify-center>
        <v-btn color="primary" @click="Logout" v-if="showLogoutBtn">Logout</v-btn>
    </v-layout>
  </div>
</template>

<script>
import store from '../store/index';

export default {
  name: 'Logout',
  data() {
    return {
      user: null,
      users: [],
      dialog: false,
      successAlert: false,
      errorAlert: false,
      tooAlert: false,
      showLogoutBtn: store.state.user,
    };
  },
  methods: {
    Logout() {
      store.commit('LOGOUT');
      this.$router.push('/books');
    },
  },
};
</script>

