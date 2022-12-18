const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;


describe("Update User Object API ", function() {
    it("Update User Object API ", async function(){
        const queryB = "7076"
        const response = await request
            .put(`/users/` + queryB)
            .set({Authorization : "Bearer decc8bbe-2585-4d28-82b6-78a4084ebd20"}) //token harus selalu diganti dengan menjalankan API POST http://restapi.adequateshop.com/api/authaccount/login lalu ambil token di response
          

        expect(response.status).to.equals(405);

      
    });
});

