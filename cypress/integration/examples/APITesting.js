/// <reference types="Cypress" />


describe('My API testsuite', function()
{
    it('APITestingResponse', function(){
        
        //let errormessage = 'Hey Comment do not exist'
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

            "name":"Learn Appium Automation with Java",
            "isbn": "bcggsss",
            "aisle":"22s7",
            "author":"John Doe"
        }).then(function(response)
        {
        expect(response.body).to.have.property("msg", "succesfully added")
        expect(response.status).to.eq(200)
        })
    })
})