const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const port = 3333;

const customers = [];

// Middleware.
function verifyIfExistsAccountCPF(request, response, next) {
    
    const { cpf } = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if (!customer) {
        return response.status(400).json({ error: "Customer not found." });
    } 

    // Repassa o customer para a função que chamou o Middleware.
    request.customer = customer;

    return next();

}

app.post('/account', (request, response) => {
    const { name, cpf } = request.body;
  
    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

    if (customerAlreadyExists) {
        return response.status(400).json({ error: "Customer already exists." });
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return response.status(201).json({ message: "User successfully created." });
});

app.post('/deposit', verifyIfExistsAccountCPF, (request, response) => {
    const { description, amount } = request.body;

    const { customer } = request;

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    };

    customer.statement.push(statementOperation);

    response.status(201).json({ message: "Operation performed successfully." });

});

app.get('/', (request, response) => {
    response.json(customers);
});

app.get('/statement', verifyIfExistsAccountCPF,  (request, response) => {
    
    const { customer } = request;

    return response.json(customer.statement);

});

app.listen(port, () => {
    console.log(`Running on port: ${port}.`)
});