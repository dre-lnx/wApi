import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');
const { Op } = require("sequelize");

export const logIn = async(_,{ data }) => {


    
    const findUser = await models.User.findOne({
        where: {
            [Op.and] : [
                { email: data.email },
                { pwd: data.pwd }
            ]
        }
    });

    if(!findUser) {
        console.log("usuario n existe")
        throw new UserInputError("Usuário não encontrado");
    }
    console.log("usuario existe")
    return "Usuário existe";

}