require("dotenv").config();
const axios = require("axios");

exports.getUsersInList = async function(list_id) {
    const url = `${process.env.API_URL}/lists/${list_id}`;
    const response = await axios.get(url)
    .then(res => res.data)
    .catch(err => err);
    const users = response;
    return users;
};

exports.getUser = async function(user_id) {
    const url = `${process.env.API_URL}/users/${user_id}`;
    const response = await axios.get(url)
    .then(res => res.data)
    .catch(err => err);
    const user = response;
    return user;
}

exports.checkUser = async function(user_id, list_id) {
    const url = `${process.env.API_URL}/users/${user_id}/lists/${list_id}`;
    const response = await axios.get(url)
    .then(res => res.data)
    .catch(err => err);
    const user = response;
    return user;
}

