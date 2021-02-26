import Constants from "../utils/Constants";
import Me from "../utils/Me";
import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.Urls.apis;

function getUserPayload(user) {
  return JSON.stringify(user);
}

async function handleAuthenticate(me) {
  if (!!me) {
    await localStorage.setItem("me", JSON.stringify(me));
  }
  return me;
}

function login(email, password) {
  const payload = getUserPayload({ email, password });
  console.log(payload);

  return HttpHelper.postWithoutAuth(Routes.LOGIN, payload).then(
    handleAuthenticate
  );
}

export const authService = {
  login,
};
