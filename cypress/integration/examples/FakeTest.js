/// <reference types="Cypress" />


describe('My FakeTestAPI testsuite', function()
{
    it('APITesting', function(){
        
        let errormessage = 'Hey Comment do not exist'
        cy.visit('https://example.cypress.io/commands/network-requests')
        
        cy.server()

        cy.route({
            method:'PUT',
            url:'comments/*',
            status: 404,
            response:{
                error: errormessage

            },
            delay: 1000

        }).as("UpdateComment")

        cy.get('.network-put').click()

        cy.get('.network-put-comment').should('contain', errormessage)
    })
})