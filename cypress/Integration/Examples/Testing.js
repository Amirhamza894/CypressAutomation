/// <reference types="Cypress" />

describe("My Testing Suit", function(){

    it("My Second Test Case", function(){
        cy.visit("https://www.olx.com.lb/")
        cy.get("input[type='search']").type('car for sale')
        cy.get("._0db6bd2f.a3e390b5").click()
        cy.wait(5000)
        cy.get("._7e3920c1").should("have.length", 45)
        // cy.get("._7e3920c1:visable").should("have.length", 45) -> this will triggar only visable elements
        cy.get(".ba608fb8.de8df3a3:nth-child(2)").find(".c46f3bfe").should('have.length', 6)
        cy.get(".ba608fb8.de8df3a3:nth-child(2)").find(".c46f3bfe").contains('Featured')
        cy.get('.ba608fb8.de8df3a3:nth-child(2)').find('.c46f3bfe').eq(4).find("._1075545d").click()
         
    })
    it("Same steps but dynamic", function(){
        cy.visit("https://www.olx.com.lb/")
        cy.get("input[type='search']").type('car for sale')
        cy.get("._0db6bd2f.a3e390b5").click()
        cy.wait(5000)
        cy.get("._7e3920c1").should("have.length", 45)
        // cy.get("._7e3920c1:visable").should("have.length", 45) -> this will triggar only visable elements
        cy.get(".ba608fb8.de8df3a3:nth-child(2)").find(".c46f3bfe").should('have.length', 6)
        cy.get('.ba608fb8.de8df3a3:nth-child(2)').find('.c46f3bfe').each(($el, index, $list) => {
            const adText = $el.find('._151bf64f').text()
            if(adText === 'Featured'){
                cy.wrap($el).find("._1075545d").click({ force: true })
            }
        })
    })
})