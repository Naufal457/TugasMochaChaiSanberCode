const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

let data = {


    name : "Neeraj Singh",
    email : "neirajsingh101@gmail.com",
    location : "USA"

}

describe("POST create user ", function() {
    it("POST create user ", async function(){
        const response = await request
            .post("/users")
            .set({Authorization : "Bearer decc8bbe-2585-4d28-82b6-78a4084ebd20"}) //token harus selalu diganti dengan menjalankan API POST http://restapi.adequateshop.com/api/authaccount/login lalu ambil token di response
            .send({
                "name": "Brigette Jewell",
                "email": "brigettejewell.90897@gmail.com",
                "location" : "USA"

                //data harus diganti dengan melihat list response API dari GET http://restapi.adequateshop.com/api/users?page=1

            });

        expect(response.status).to.equals(201);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('email');
        expect(response.body).to.have.property('profilepicture');
        expect(response.body).to.have.property('location');
        expect(response.body).to.have.property('createdat');

      
    });
});

