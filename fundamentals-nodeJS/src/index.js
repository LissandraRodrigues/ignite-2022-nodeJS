const express = require('express');
const { append } = require('express/lib/response');
const port = 3333;

const app = express();

app.get("/courses", (request, response) => {
    return response.json(["Curso 1",
                          "Curso 2",
                          "Curso 3"])
});

app.post("/courses", (request, response) => {
    return response.json(["Curso 1",
                          "Curso 2",
                          "Curso 3",
                          "Curso 4"])
});

app.put("/courses/:id", (request, response) => {
    return response.json(["Curso 0",
                          "Curso 1",
                          "Curso 2",
                          "Curso 3"])
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 0",
                          "Curso 1",
                          "Curso 2",
                          "Curso 4"])
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 0",
                          "Curso 1",
                          "Curso 2"])
});

app.listen(port, () => {
    console.log(`Running on port: ${port}.`)
});

