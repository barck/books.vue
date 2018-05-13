export default {
  LOGIN: (state) => {
    state.user = null;
  },
  USER_REGISTRATION: (state, userId) => {
    state.user = userId;
  },
  LOGOUT(state) {
    state.user = null;
  },
};
