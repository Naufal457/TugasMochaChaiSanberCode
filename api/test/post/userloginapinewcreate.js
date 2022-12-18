const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

let regist = {


    email :"Developer51@gmail.com",
    password : "1234567"
}

describe("POST /authaccount/login", function() {
    it("user login API ", async function(){
        const response = await request
            .post("/authaccount/login")
            .set({Authorization : "Bearer 0967aeb3-bad8-4d81-ada3-11e83cb71073"}) //token harus selalu diganti dengan menjalankan API http://restapi.adequateshop.com/api/authaccount/login lalu ambil token di response
            .send({
                "email" : regist.email,
                "password" : regist.password

            });

        expect(response.status).to.eql(200);
        //expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('code');
        expect(response.body).to.have.property('message');
        expect(response.body).to.have.property('data');

       // global.token = response.body.data.token;
        //global.user_id = response.boddy.id;
    });
});

