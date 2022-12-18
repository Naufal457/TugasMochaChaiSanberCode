const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;


describe("DELETE user by ID ", function() {
    it("DELETE user by ID  ", async function(){
        const queryA = "7075"
        const response = await request
            .delete(`/users/` + queryA)
            .set({Authorization : "Bearer decc8bbe-2585-4d28-82b6-78a4084ebd20"}) //token harus selalu diganti dengan menjalankan API POST http://restapi.adequateshop.com/api/authaccount/login lalu ambil token di response
          

        expect(response.status).to.equals(405);

      
    });
});

