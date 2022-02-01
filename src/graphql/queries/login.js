import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');
const { Op } = require("sequelize");
const { jsonwebtoken } = require("jsonwebtoken");

export const logIn = async(_,{ data }) => {

    accessTokenSecret = "everyLiveCreatureInThisworldDiesAlone";
    
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

    const token = jsonwebtoken.sign({mail: data.email}, accessTokenSecret, { expiresIn: '2m' });
    return token;

}