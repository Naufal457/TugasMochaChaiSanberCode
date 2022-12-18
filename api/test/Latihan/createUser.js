const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

let user = {
    name : "sanber",
    job : "sqaz"
}

describe("POST /users", function() {
    it("create new user", async function(){
        const response = await request
            .post("/users")
            .send({
                "name" : user.name,
                "job" : user.job

            });

        expect(response.status).to.eql(201);
        expect(response.body.name).to.eql(user.name);
        expect(response.body.job).to.eql(user.job);
    });
});