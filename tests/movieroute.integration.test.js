const express = require("express");
const request = require("supertest");
const movieRoute = require("../routes/movies.route");

const app = express();

app.use(express.json());
app.use("/api/movies", movieRoute);

describe("Integration test for the movie API", () => {
    it('GET /api/movies - success - get all the movies', async () => {
        const {body, statusCode} = await request(app).get("/api/movies");

        

        expect(body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    direction: expect.any(String)
                })
            ])
        );
        expect(statusCode).toBe(200);
    })
    });
   