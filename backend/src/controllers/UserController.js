const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const users = await connection('users').select('*');
    
        return res.json(users);
    },

    //Create users
    async create(req, res) {
        const { name, email, pass } = req.body;

        const user = await connection('users').where('email', email).select('*').first();

        if (user != null) {
            return res.status(401).json({error: 'User already registered!'});
        }

        await connection('users').insert({
            name,
            email,
            pass,
        })
        
        return res.json({name, email});
    },

    //Delete users
    async delete(req, res) {
        const { email, pass } = req.body;

        const user = await connection('users')
        .where('email', email)
        .andWhere('pass', pass)
        .select('id').first();

        if (user.id == null) {
            return res.status(401).json({error: 'User not found!'});
        }
        
        await connection('users').where('id', user.id).delete();
        
        return res.status(204).send();
    },
}