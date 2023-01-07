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
    const { name, cpf } = request.body;
  
    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

    if (customerAlreadyExists) {
        return response.status(400).json({ error: "Customer already exists!" });
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return response.status(201).json({ message: "Usuário criado com sucesso!" });
});

app.listen(port, () => {
    console.log(`Running on port: ${port}.`)
});