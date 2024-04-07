require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const PORT = 4000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000"
};



// This function runs if the http://localhost:5000/getData endpoint
// is requested with a GET request
app.get('/organization/:orgID', cors(corsOptions), async (req, res) => {

    const orgID = req.params.orgID;

    console.log("orgID: ", orgID);

    const requestEndpoint = `https://${process.env.subdomain}.kintone.com/k/v1/record.json?app=1&id=${orgID}`;

    console.log("requestEndpoint: ", requestEndpoint);

    try {
        // Custom headers to pass along with the request
        const headers = {
            'X-Cybozu-API-Token':process.env.API_TOKEN
        };
    
        // Make a GET request to another API using Axios
        const response = await axios.get(requestEndpoint, { headers });
    


        res.json(response.data);
      } catch (error) {
        // If there's an error, send an error response
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }


});


app.get('/organization', cors(corsOptions), async (req, res) => {

    const requestEndpoint = `https://${process.env.subdomain}.kintone.com/k/v1/records.json?app=1`;

    try {
        // Custom headers to pass along with the request
        const headers = {
            'X-Cybozu-API-Token':process.env.API_TOKEN
        };
    
        // Make a GET request to another API using Axios
        const response = await axios.get(requestEndpoint, { headers });
    
        // Send the response from the other API to the client
        //console.log(response.data.records);

        response.data.records.map((record) => {
            console.log(record);
        })

        res.json(response.data);
      } catch (error) {
        // If there's an error, send an error response
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }


});



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});