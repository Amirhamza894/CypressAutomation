/// <reference types="Cypress" />

describe("Cypress Basics", function(){

    // Cypress Basics
    it("Dropdown in cypress", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').as('checkPoint')
        cy.get('@checkPoint').check().should('have.value','option1').and('be.checked')
        cy.get('@checkPoint').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').as('allCheckbox')
        cy.get('@allCheckbox').check(['option1', 'option2']).should('be.checked')
    })
})