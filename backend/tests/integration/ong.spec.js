const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        // rollback limpa todo o banco de dados
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('Authorization', 'id_da_ong') Quando precisar
            .send({
                name: "worldStudio",
                email: "worldstudio@gmail.com",
                whatsapp: "55945645656",
                city: "São Paulo",
                uf: "SP"
            });
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});