<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="500px">
        <v-btn color="primary" dark slot="activator">Sign Up</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Sign Up</span>
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
            <v-btn color="blue darken-1" flat @click.native="signUp">Sign Up</v-btn>
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
  name: 'RegPage',
  data() {
    return {
      user: null,
      users: [],
      dialog: false,
      successAlert: false,
      errorAlert: false,
      tooAlert: false,
    };
  },
  methods: {
    async signUp() {
      this.users = (await axios.get('http://localhost:3000/users')).data;
      const exist = this.users.find(user => user.name === this.user);
      if (exist !== undefined) {
        this.tooAlert = true;
        this.successAlert = false;
        this.errorAlert = false;
      } else if (this.user != null) {
        axios.post('http://localhost:3000/users', { name: this.user })
          .then((response) => {
            /* eslint-disable no-console */
            console.log(response);
            this.successAlert = true;
            this.errorAlert = false;
            this.tooAlert = false;
            // this.$router.push('books');
            store.commit('USER_REGISTRATION', response.data.id);
          })
          .catch((error) => {
            console.log(error);
            this.errorAlert = true;
            this.tooAlert = false;
            this.successAlert = false;
          });
      } else {
        console.log('Empty name!');
        this.errorAlert = true;
        this.tooAlert = false;
        this.successAlert = false;
      }
    },
  },
};
</script>

