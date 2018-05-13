<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn color="primary" dark slot="activator" v-if="!showAuthBtn">Sign In</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Sign In</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-field label="Enter your name" required v-model="user"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click.native="SignIn">Sign In</v-btn>
          </v-card-actions>
        </v-card>
        <v-alert type="success" v-model="successAlert">
          This is a success sign up!
        </v-alert>
        <v-alert type="error" v-model="errorAlert">
          Empty name!
        </v-alert>
        <v-alert type="error" v-model="tooAlert">
          Name exist!
        </v-alert>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../store/index';

export default {
  name: 'AuthPage',
  data() {
    return {
      user: null,
      users: [],
      showAuthBtn: store.state.user,
      nameRules: [
        v => !!v || 'Name is required',
      ],
      dialog: false,
      successAlert: false,
      errorAlert: false,
      tooAlert: false,
    };
  },
  methods: {
    async SignIn() {
      if (this.user !== null) {
        this.users = (await axios.get('http://localhost:3000/users')).data;
        const exist = this.users.find(user => user.name === this.user);
        /* eslint-disable no-console */
        console.log(exist);
        if (exist !== undefined) {
          console.log(`Приветствуем ${this.user}`);
          store.commit('USER_REGISTRATION', exist.id);
          // this.$router.push('books');
        }
      }
    },
  },
};
</script>

