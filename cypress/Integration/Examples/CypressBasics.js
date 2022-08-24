/// <reference types="Cypress" />

describe("Cypress Basics", function(){

    // Cypress Basics
    it("My Second Test Case", function(){
        cy.visit("https://www.olx.com.lb/")
        // Typing something
        cy.get("input[type='search']").type('car for sale')
        // Clicking
        cy.get("._0db6bd2f.a3e390b5").click()
        cy.wait(5000)
        // Condition in cypress "should have" (to check the length)
        cy.get("._7e3920c1").should("have.length", 45)
        // below code is for those element which is not visable only on page and excludes hidden elements
        // cy.get("._7e3920c1:visable").should("have.length", 45) -> this will triggar only visable elements
        cy.get(".ba608fb8.de8df3a3:nth-child(2)").find(".c46f3bfe").should('have.length', 6)
        // Contain functions in cypress
        cy.get(".ba608fb8.de8df3a3:nth-child(2)").find(".c46f3bfe").contains('Featured')
        // Parent-to-child (Accessing the indexing of more elements)
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
        // loop through web elements in cypress
        cy.get('.ba608fb8.de8df3a3:nth-child(2)').find('.c46f3bfe').each(($el, index, $list) => {
            const adText = $el.find('._151bf64f').text()
            if(adText === 'Featured'){
                // force : true will select the element even if the element is behind of any object
                cy.wrap($el).find("._1075545d").click({ force: true })
            }
        })
    })

    it("My Third test Case", function(){
        // Understanding cypress promises and making customise promise resolving
        // const weText = cy.find('._2699197b').text() // This will not work because of cypress promoses (Asycronus behave)
        cy.get('._2699197b').then(function(categories){ // Resolving cypress promises maually to execute stepwise
            cy.log(categories.text())

        // Creating variable and assigning web element locator in cypress
        })
        cy.get('.af24d916').as('sellButton')
        cy.get('@sellButton').click({force:true})
        // alias as() through this we can create variables
        cy.get('._3bdb8f07').as('loginWindow')
        // Should have.text is assertion which verify text
        cy.get('@loginWindow').should('have.text', 'WELCOME TO OLX')
    })
})