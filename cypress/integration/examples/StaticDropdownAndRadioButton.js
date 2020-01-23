/// <reference types="Cypress" />


describe('My thirth testsuite', function()
{
    it('CheckBoxMadness', function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])


        //static dropdown

        cy.get('select[id="dropdown-class-example"]').select('option1').should('have.value', 'option1')


        //dynamic dropdown building a loop to go through it
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==="India"){
                $el.click()
            }
        })
        //check if value is India (Assertion)
        cy.get('#autocomplete').should('have.value', 'India')
   
        //Elements that are hidden, how to handle

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()


        //radio buttons
        cy.get('input[type="radio"]').check(['radio3']).should('be.checked')

        //handling pop-up
        cy.get('#alertbtn').click()
        


    })
    
})