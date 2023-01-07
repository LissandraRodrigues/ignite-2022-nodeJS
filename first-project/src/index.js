const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const port = 3333;

const customers = [];

app.get('/register', (request, response) => {
    response.json(customers);
});

app.post('/register', (request, response) => {
    const { name, email, cpf } = request.body;
    console.log(name);
    console.log(email);
    console.log(cpf);

    const id = uuidv4();

    customers.push({
        cpf,
        name,
        id,
        statement: []
    });

    return response.status(201).send("Usuário criado com sucesso!");
});

app.listen(port, () => {
    console.log(`Running on port: ${port}.`)
});