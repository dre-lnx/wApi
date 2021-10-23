const express = require('express');
const { gql, ApolloServer } = require('apollo-server');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (req, res) => {
    res.send("Bem vindo a API da wFast!");
});

const port = 3000;

app.listen(port, () => {
    console.log(`The application has been launched on port: ${port}`);
});