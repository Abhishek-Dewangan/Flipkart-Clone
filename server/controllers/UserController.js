const User = require('../models/UserModel')


const signin = async(req,res) => {
    try {
        const user = new User(req.body).save()
    } catch (error) {
        res.status(400).send('Invalid data or invalid syntax');
    }
}