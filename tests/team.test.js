import request from 'supertest';
import app from '../src/app.js';

describe('Team API', () => {
    let teamId;

    it('should create a new team', async () => {
        const res = await request(app)
            .post('/teams')
            .send({
                name: 'Teste',
                country: 'Brasil',
                creationDate: 1910
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('Teste');
        expect(res.body.country).toEqual('Brasil');
        expect(res.body.creationDate).toEqual(1910);

        teamId = res.body._id;
    });

    it('should get all teams', async () => {
        const res = await request(app).get('/teams');

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('should get a team by ID', async () => {
        const res = await request(app).get(`/teams/${teamId}`);

        expect(res.statusCode).toEqual(200);
    });

    it('should update a team by ID', async () => {
        const res = await request(app).put(`/teams/${teamId}`);

        expect(res.statusCode).toEqual(200);
    });

    it('should delete a team', async () => {
        const res = await request(app).delete(`/teams/${teamId}`);

        expect(res.statusCode).toEqual(200);
    });
});