/// <reference types="Cypress" />

describe("My Testing Suit", function(){

    it("My Second Test Case", function(){
        cy.visit("https://www.olx.com.lb/")
        cy.get("input[type='search']").type('car for sale')
        cy.get("._0db6bd2f.a3e390b5").click()
        cy.wait(5000)
        cy.get("._7e3920c1").should("have.length",45 )
    })
})