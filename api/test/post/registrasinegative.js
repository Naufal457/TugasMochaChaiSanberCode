const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

let regist = {


    name :"Developer1",
    email :"Developer51@gmail.com",
  //  password : "1234567"
}

describe("POST /autaccount/registration", function() {
    it("user registration api ", async function(){
        const response = await request
            .post("/authaccount/registration")
            .send({
                "name" : regist.name,
                "email" : regist.email,
                //"password" : regist.password

            });


        expect(response.status).to.eql(401);
        expect(response.body).to.have.property('Message');
        expect(response.body).to.have.property('ModelState');
    });
});