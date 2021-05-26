const express = require('express');
const fetch = require("node-fetch");
//CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
var cors = require('cors');
var app = express();
const port = 3000;

//app object is instantiated on creation of Express server
//use method 
app.use(cors());

app.get('/test', async (request, res) =>{
    let response = await fetchAPI();
    res.json({data:{...response}});
});

const fetchAPI = async () => {
    //get json data from the following website
    const response = await fetch('http://country.io/names.json');
    return response.json();
}

app.listen(port, ()=>{
    console.log(`A'CORS-enabled web server listening at http://localhost:${port}`);
})