/// <reference types="Cypress" />

import HomePage from '../../support/PageObjects/HomePage'
import ShopPage from '../../support/PageObjects/ShopPage'

describe('My E2E testsuite', function()
{
    //runs once before all tests in the block

    before(function() {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    it('E2ETestcase', function(){
    const homepage=new HomePage()
    const shoppage=new ShopPage()
        //visit E-commerce website

        cy.visit(Cypress.env('url')+"/angularpractice/")

        //fill in name and emailadres
        homepage.getEditBox().type(this.data.name)
        //cy.get(getEditBox).type(this.data.name)
        homepage.getTwoWayDatabinding().should('have.value', this.data.name)
        homepage.getEditBox().should('have.attr', 'minlength','2')
        //Choose gender in dropdown menu
        homepage.getGender().select(this.data.gender)
        //Check if element is disabled
        homepage.radioButtonEntrepeneur().should('be.disabled')
        homepage.GoToShopButton().click()  

        this.data.productName.forEach(element => {
            cy.SelectProduct(element)

        });


        shoppage.CheckOutButton().click()
        
        var sum=0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            //dollar teken en bedrag van elkaar splitsen
            const amount=$el.text()
            //splitten van nummers en text
            var res= amount.split(" ")
            //trim haalt de spaties weg
            res= res[1].trim()
            //om getallen bij elkaar op te tellen dien je Number aan te geven, anders gaat hij uit van letters.
            sum= Number (sum)+Number (res)
        }).then(function()
        {
            //log om de uitkomst weer te geven
            cy.log(sum)

        })

        cy.get('h3 strong').then(function(element)
        {
           const TotalPrice=element.text()
           var res=TotalPrice.split(" ")
           var total= res[1].trim()
           expect(Number(total)).to.equal(Number(sum))

        })
        //log teruglezen uitkomst - OUTPUT
        shoppage.CheckOutBasket().click()

        shoppage.DeliveryCountryField().type('Nederland')
        shoppage.CheckBoxLabel().click()

        shoppage.PurchaseButton().click()
        
        shoppage.AlertSuccesPurchase().then(function(element)
        {
        const SuccesText=element.text()
        expect(SuccesText.includes("Success")).to.be.true
        })




   

       
})
    
})