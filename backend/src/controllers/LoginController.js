const connection = require('../database/connection');

module.exports = {
    //Login
    async index(req, res) {
        const { email, pass } = req.body;

        const user = await connection('users').where('email', email).andWhere('pass', pass).select('*').first();

        if (user == null) {
            return res.status(401).json({error: 'Incorrect data.'});
        }
        
        return res.json(user);
    },
}