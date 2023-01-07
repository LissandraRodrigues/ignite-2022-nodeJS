const express = require('express');
const { append } = require('express/lib/response');
const port = 3333

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Hello world, Ignite!"})
})

app.listen(port, () => {
    console.log(`Running on port: ${port}.`)
});

