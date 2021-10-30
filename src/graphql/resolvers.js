const User = require('../../models/user');
import { UserInputError } from "apollo-server-express";

const fakeUser = [
    {
        name: "André",
        description: "Web Dev",
        email: "andre@teste.com",
        pwd: "adminadmin",
    }
];

const getAllUsers = async() => {
    const users = await User.findAll();

    if(!users) { return console.log("empty") };

    console.log(users);

    return users;
}

const resolvers = {
    Query: {
        getAllUsers() {
            return getAllUsers()
        }
    },
};

module.exports = {resolvers};