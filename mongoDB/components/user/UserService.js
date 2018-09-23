const db = require('../../models/db');

class UserService {
    static async getUsers(req, res, next){
        res.send('get USERS');
    }

    static async getUser(req, res, next){
        res.send('get USER');
    }

    static async createUser(req, res, next){}

    static async updateUser(req, res, next){}

    static async deleteUser(req, res, next){}
}

module.exports = UserService;
