import Constants from "../utils/Constants";
// import Me from "../utils/Me";
import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.Urls.apis;

// function getUserPayload(user) {
//   return JSON.stringify(user);
// }

function getRestaurantById() {
  const url = Routes.GET_RESTAURANT;

  // console.log(url);
  return HttpHelper.get(url).then((restaurant) => {
    return restaurant;
  });
}

export const restaurantService = {
  getRestaurantById,
};
