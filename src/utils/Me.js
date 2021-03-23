import store from "./store";

const Me = {
  _getMe: function () {
    let me = JSON.parse(localStorage.getItem("me"));
    if (me) {
      return me;
    } else return {};
  },

  getToken: function () {
    // console.log("Calling getToken");
    // console.log(this._getMe());
    const { accessToken } = this._getMe();
    // console.log("get token");

    if (accessToken) {
      return { "x-access-token": accessToken };
    } else {
      return {};
    }
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
