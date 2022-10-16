const app = require("../app.js");
const { sequelize } = require("../models");
const request = require("supertest");

const { queryInterface } = sequelize;

describe('User Routes Test', () => {
    const userData = [
        {
            name: "ratnawijayanti",
            email: "ratna.wijayanti@gmail.com",
            coin: 20,
            picture: "test",
            createdAt: "2021-02-05 11:20:10.228+00",
            updatedAt: "2021-02-05 11:20:10.228+00"
        },
        {
            name: "Ida Ayu Indira",
            email: "indira.mandiri@gmail.com",
            coin: 10,
            picture: "test",
            createdAt: "2021-02-05 11:20:10.228+00",
            updatedAt: "2021-02-05 11:20:10.228+00"
        },
        {
            name: "dodosetiadi",
            email: "dodosetiadi@gmail.com",
            coin: 10,
            picture: "test",
            createdAt: "2021-02-05 11:20:10.228+00",
            updatedAt: "2021-02-05 11:20:10.228+00"
        },
        {
            name: "Gery antonio",
            email: "geryantonio@gmail.com",
            coin: 10,
            picture: "test",
            createdAt: "2021-02-05 11:20:10.228+00",
            updatedAt: "2021-02-05 11:20:10.228+00"
        }
    ]

    beforeAll((done) => {
        queryInterface.bulkInsert("Users", userData)
            .then(_ => {
                done()
            })
            .catch((err) => {
                console.log(err, "sini");
                done(err);
            });
    });

    afterAll((done) => {
        queryInterface
            .bulkDelete("Users", {})
            .then(() => done())
            .catch((err) => done(err));
    });

    test('200 success get all users data - should return array of obj', (done) => {
        request(app)
            .get('/users')
            .then(({ body, status }) => {
                expect(status).toBe(200)
                expect(Array.isArray(body.rows)).toBeTruthy();
                expect(body.rows.length).toBeGreaterThan(0);
                expect(body.count).toBeGreaterThan(0);
                return done();
            })
    });

});
