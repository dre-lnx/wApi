import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

import { ApolloServer } from 'apollo-server';
import express from 'express';
import cors from 'cors'

const { Sequelize } = require('sequelize');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

 const sequelize = new Sequelize("wfast", "root", "adminadmin", { dialect: "mysql" });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  
const server = new ApolloServer({ typeDefs, resolvers });

const port = 3000;

server.listen().then(({ url }) => {
    console.log(`Server started at ${ url }`)
    });

