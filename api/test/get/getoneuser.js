const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;



describe("GET 1 user", function() {
    it("GET 1 user ", async function(){
        const query1 = "11133"
        const response = await request
        .get(`/users/` + query1)
        .set({Authorization : "Bearer a2ca6e64-589c-46aa-8fd5-3b42c551491e"})
        
           

        expect(response.status).to.eql(200);

       // global.token = response.body.data.token;
        //global.user_id = response.boddy.id;
    });
});