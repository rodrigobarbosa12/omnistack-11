const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs_id = req.headers.authorization;
        const incidents = await connection('incidents')
            .select('*')
            .where('ong_id', ongs_id);

        return res.json(incidents);
    }
}
