const api = require("./api")
const express = require('express');
const axios = require("axios");

const server = express();

server.use(express.json());

server.listen(3000);


server.get('/', async (req, res) => {
    
    try {
        
        const {data} = await axios('https://newsapi.org/v2/everything?q=tesla&from=2022-10-02&sortBy=publishedAt&apiKey=18fbea0c629545db912284ec1a64be90')
        return res.json(data);
    
    } catch (error) {

    }
    
    
});
