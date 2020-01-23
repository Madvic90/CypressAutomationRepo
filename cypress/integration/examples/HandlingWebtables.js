/// <reference types="Cypress" />


describe('My fifth testsuite', function()
{
    it('HandlingWebTables', function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        

        cy.get('tr td:nth-child(2)').each(($el  , index, $list) => {

            const Text=$el.text()
                if(Text.includes("Python"))
                {
                    cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                    {
                        const PriceText= price.text()
                        expect(PriceText).to.equal('25')
                    })
                }
                //hover mouse over element
       cy.get('.mouse-hover-content').invoke('show')
       cy.contains('Top').click()
       cy.url().should('include', 'top')
    })
})
    
})