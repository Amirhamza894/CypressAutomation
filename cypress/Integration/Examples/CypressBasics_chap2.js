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

    it('Dropdown in cypress', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('select').select('Option1').should('have.value', 'option1')
    })

    it('Dynamic dropdown in cypress', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('pak')
        cy.get(".ui-menu-item").each(($el, index, $list) => {
            const countryName = $el.text()
            if(countryName === 'Pakistan'){
                cy.wrap($el).click()
            }
        })
    })
})