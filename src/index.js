const { ApolloServer, gql } = require('apollo-server');
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Toda request é POST
//Toda request bate no MESMO endpoint(/graphql)

//Query -> Obter dados(GET)
//Mutation -> Manipular dados(POST/PUT/PATCH/DELETE)

//Scalar types -> String, Int, Boolean, Float, ID

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 
            'Hello World!'
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const port = 3000;

server.listen().then(({ url }) => {
    console.log(`Server started at ${ url }`)
    });

