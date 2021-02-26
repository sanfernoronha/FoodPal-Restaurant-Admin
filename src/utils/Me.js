import store from "./store";

//setup after setting up redux while app auth state persistance
const Me = {
  _getMe: function () {
    const { me } = store.getState().auth;
    return me;
  },

  getToken: function () {
    const { token } = this._getMe;
    return token;
  },

  getMe: function () {
    const { student } = this._getMe();
    return student;
  },

  getId: function () {
    const { _id: id } = this.getMe();
    if (!!id) {
      return id;
    }
  },

  getName: function () {
    const { name } = this.getMe();
    return name;
  },
};
export default Me;
