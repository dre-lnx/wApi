const fakeUser = [
    {
        name: "André",
        description: "Web Dev",
        email: "andre@teste.com",
        pwd: "adminadmin",
    }
];

const resolvers = {
    Query: {
        getAllUsers() {
            return fakeUser
        }
    },
};

module.exports = {resolvers};