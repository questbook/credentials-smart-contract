require("dotenv").config();
const axios = require("axios");

exports.getUsersInList = async function(list_id) {
    const url = `${process.env.API_URL}/lists/${list_id}/users`;
    const response = await axios(url)
    .then(res => res.json())
    .catch(err => err);
    const users = response;
    return users;
};

exports.getUser = async function(user_id) {
    const url = `${process.env.API_URL}/users/${user_id}`;
    const response = await fetch(url);
    const user = await response.json();
    return user;
}

exports.checkUser = async function(user_id, list_id) {
    const url = `${process.env.API_URL}/lists/${user_id}/users/${list_id}`;
    const response = await fetch(url);
    const user = await response.json();
    return user;
}

