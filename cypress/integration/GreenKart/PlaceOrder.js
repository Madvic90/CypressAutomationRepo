/// <reference types="Cypress" />


describe('My Second testsuite', function()
{
    it('Place an order', function(){
    //visit website
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type('CA')
        //cy.get('.search-button').click()
        cy.wait(2000)


        //parent child relation
        //met .products.find gaat die alleen in de parent products kijken
        //Alias meegeven aan een webelement, deze kun je herbruiken in andere testcases
        cy.get('.products').as('ProductLocator')
        // use this method is there are elements with the same name
        //first enter the parent, then the child and then choose the item.
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
          //klik op winkelmand icoontje
            cy.get('.cart-icon > img').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            //cy.wait(2000)

            cy.contains('Place Order').click()
            //cy.contains('Place Order').click()

      







    })
    
})