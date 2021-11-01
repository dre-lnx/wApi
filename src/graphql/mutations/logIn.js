import { UserInputError } from "apollo-server-express";
const models = require('../../../models/index');
const jwt = require('jsonwebtoken');

export const logIn = async(_, { data }) => {

    const { Op } = require("sequelize");

    const { email, pwd } = data;

    const user = await models.User.findOne({
        where: { email: email }
    });

    if(!user) throw new UserInputError("O usuário não existe");

    const userPwd = await models.User.findOne({
        raw: true,
        where: {
            [Op.and] : [
            { email: email },
            { pwd: pwd }
            ]
        },
    });

    if(!userPwd) throw new UserInputError("Senha incorreta");

    const accessTokenSecret = "joinUsForAllTime123";
    const token = jwt.sign({mail: email}, accessTokenSecret, { expiresIn: '2m' });

    return {
        token: token,
        user: user,
    }



}