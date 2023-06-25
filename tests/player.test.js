import request from 'supertest';
import app from '../src/app.js';

describe('Player API', () => {
    let playerId;

    it('should create a new player', async () => {
        const res = await request(app)
            .post('/players')
            .send({
                name: 'Teste',
                country: 'Brasil',
                team: 'Corinthians',
                age: 25
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('Teste');
        expect(res.body.country).toEqual('Brasil');
        expect(res.body.team).toEqual('Corinthians');
        expect(res.body.age).toEqual(25);

        playerId = res.body._id;
    });

    it('should get all players', async () => {
        const res = await request(app).get('/players');

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('should get a player by ID', async () => {
        const res = await request(app).get(`/players/${playerId}`);

        expect(res.statusCode).toEqual(200);
    });

    it('should update a player by ID', async () => {
        const res = await request(app).put(`/players/${playerId}`);

        expect(res.statusCode).toEqual(200);
    });

    it('should delete a player', async () => {
        const res = await request(app).delete(`/players/${playerId}`);

        expect(res.statusCode).toEqual(200);
    });
});