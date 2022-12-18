const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;



describe("GET All User Page 1", function() {
    it("GET All User Page 1 ", async function(){
        const query = "page=1"
        const response = await request
        .get('/users' + "?" +query)
        .set({Authorization : "Bearer b68ca9ef-0c7e-4627-8365-1af13a95e69c"})
        
           

        expect(response.status).to.eql(200);

       // global.token = response.body.data.token;
        //global.user_id = response.boddy.id;
    });
});