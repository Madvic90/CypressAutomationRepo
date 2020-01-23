/// <reference types="Cypress" />


describe('My sixth testsuite', function()
{
    it('HandlingChildWindow', function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').then(function(el) {
//how to pull property of url
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)

        })

       
})
    
})