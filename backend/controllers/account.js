const accountModel = require("../models/account")

module.exports = {
    register: async(req, res)=>{
        const body = req.body;
        const newAccount = await accountModel.create(body);
        return res.status(201).json(newAccount);
    },
    login: async(req, res)=>{
        const body = req.body; 
        const account = await accountModel.findOne(body);
        if (!account){
            return res.status(400).json({
                statusCode: 400,
                message: "Tài khoản và mật khẩu không đúng"
            })
        }
        return res.status(200).json(account);
    },
    getAccounts: async(req, res)=>{
        const accounts = await accountModel.find();
        return res.status(200).json(accounts);
    }
}