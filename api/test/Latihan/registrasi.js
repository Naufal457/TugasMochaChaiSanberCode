const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;

let regist = {
    email : "eve.holt@reqres.in",
    password : "pistol"
}

describe("POST /register", function() {
    it("create new register", async function(){
        const response = await request
            .post("/register")
            .send({
                "email" : regist.email,
                "password" : regist.password

            });

        expect(response.status).to.eql(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token');
    });
});