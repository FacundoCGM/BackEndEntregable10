import UsersMongo from '../daos/mongodb/usersDao.js'
import UserService from '../service/usersService.js'
import { createResponse } from '../utils.js'
const userService = new UserService()
const usersMongo = new UsersMongo()

export const registerResponse = async(req, res, next) => {
    try {
        res.redirect('/logs/login')
    } catch(error) {
        next(error)
    }
}

export const loginResponse = async(req, res, next) => {
    try {
        res.redirect('/mongo/products')
    } catch(error) {
        next(error)
    }
}

export const getInfo = async(req, res, next) => {
    try {
        const { id } = req.params
        const userInfo = await userService.getInfo(id)
        if (!userInfo)
        createResponse(res, 404, { method: "create", error: "Error getting info" });
        else createResponse(res, 200, userInfo)
    } catch (error) {
        next(error.message);
      }
}