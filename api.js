const axios = require("axios");

const api = axios.create({
    baseURL: "https://newsapi.org/v2/everything?q=tesla&from=2022-10-02&sortBy=publishedAt&apiKey=18fbea0c629545db912284ec1a64be90"
});

module.exports = api