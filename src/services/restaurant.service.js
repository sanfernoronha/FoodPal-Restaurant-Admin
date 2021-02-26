import Constants from "../utils/Constants";
import Me from "../utils/Me";
import HttpHelper from "../utils/HttpHelperUtil";

const { Routes } = Constants.Urls.apis;


function getUserPayload(user) {
    return JSON.stringify(user);
}


function getRestaurantById(id) {
    const url = Routes.GET_RESTAURANT + id;

    console.log(url);
    return HttpHelper.get(url).then((restaurant) => {
        return restaurant;
    })

}


export const restaurantService = {
    getRestaurantById,
};