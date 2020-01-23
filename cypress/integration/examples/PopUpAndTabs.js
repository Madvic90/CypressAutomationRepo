/// <reference types="Cypress" />


describe('My fourth testsuite', function()
{
    it('PopupMadness', function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        //handling pop-up
        cy.get('#alertbtn').click()  
        cy.get('#confirmbtn').click()

     

        //handling pop-up and validating on text if the text of the string is correct
        cy.on('window:alert', (str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
      //confirm alert
        cy.on('window:confirm', (str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        
        
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')

    })

    
})