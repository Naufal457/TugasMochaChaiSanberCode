const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

let regist = {


    name :"Developer",
    email :"Developer5@gmail.com",
    password : "123456"
}

describe("POST /autaccount/registration", function() {
    it("user registration api ", async function(){
        const response = await request
            .post("/authaccount/registration")
            .send({
                "name" : regist.name,
                "email" : regist.email,
                "password" : regist.password

            });

        expect(response.status).to.eql(200);
        expect(response.body).to.have.property('code');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('data');
    });
});