/// <reference types="Cypress" />


describe('My first testsuite', function()
{
    it('My first testcase', function(){
    
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
        cy.get('.search-keyword').type('Ca')
        cy.get('.search-button').click()
        cy.wait(2000)


        cy.get('.product:visible').should('have.length',4)
        //parent child relation
        //met .products.find gaat die alleen in de parent products kijken
        //Alias meegeven aan een webelement, deze kun je herbruiken in andere testcases
        cy.get('.products').as('ProductLocator')
        cy.get('@ProductLocator').find('.product').should('have.length', 4)
        // use this method is there are elements with the same name
        //first enter the parent, then the child and then choose the item.
        cy.get('@ProductLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function()
        {
            console.log('Add to cart function is clicked')

        })

        //Dit is een loop, de loop loopt over vier elementen en zal dan controleren op de tekst. Aan de hand van de tekst klikt op hij element
        cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {

            const TextFirstElement=$el.find('h4.product-name').text()
            if(TextFirstElement.includes('Cashews'))
            {
                $el.find('button').click()
            }
            //let handig om te gebruiken in een loop
            //let test = ""

            //test = TextFirstElement

            })
            //assert if logo is correctly displayed
            cy.get('.brand').should('have.text','GREENKART' )

        
            //this is to print in logs
            const logo=cy.get('.brand').then(function(LogoElement){
                cy.log(LogoElement.text())
            })
            //cy.log(logo.text())
                







    })
    
})