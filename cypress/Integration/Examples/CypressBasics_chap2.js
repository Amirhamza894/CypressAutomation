/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

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

    it('Dynamic dropdown in cypress', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('pak')
        cy.get(".ui-menu-item").each(($el, index, $list) => {
            const countryName = $el.text()
            if(countryName === 'Pakistan'){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Pakistan')
    })

    it('Visible and hide elements', function(){
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        
    })

    it('radio button in cypress', function(){
        cy.get('input[value="radio1"]').click().should('have.value', 'radio1')
        cy.get('input[value="radio2"]').check().should('be.checked')
    })

    it("Alerts in cypress", function(){
        /** Alerts are auto accepting in cypress and we cannot
         * validate alerts text or anything through cypress so 
         * we will use mocha framwork for validation **/

        // Simple Alert
        cy.get('#alertbtn').click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        // Confirm Alert
        cy.get('#confirmbtn').click()
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
    })

    it("Child windows and browser navigation in cypress", function(){
        /** Cypress can not handle child windows like navigating to 
         * another window and do something but we can use jquery to open 'target' 
         * attribute windows and open in same window.
         * we will remove target attribute by manipulating HTML by jquery.
         */

        cy.get("#opentab").invoke('removeAttr', 'target').click()
        cy.title().should('eq', 'Rahul Shetty Academy')
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back') // Navigating back
        cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/')
    })

    it('Tables in cypress', function(){
        /** 
         * this code is for playing with tables in cypresss and iterating with 
         * different rows and columns of the table
         */
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const tableText = $el.text()
            if(tableText.includes('Master Selenium Automation')){
                // cy.get('tr td:nth-child(2)').eq(index).next().then(function(price))
                cy.wrap($el).next().then(function(price){
                    const priceValue = price.text()
                    expect(priceValue).to.equal('25')
                })
            }
        })
    })

    it('muse hover in cypress', function(){

        cy.get('.mouse-hover-content').invoke('show')
        // OR cy.get('.mouse-hover-content').click({force:true})
        cy.contains('Top').click()
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })

    it('Third tab window in cypress', function(){
        /** 
         * Cypress not allow user to lunch another domain url when the control is already in one domain.
         * like for example when user click on a link which open a third party link and a new small tab
         * seperate from browser.
         * how will we handle this?
         * if we get DOM property "url" through jquery and copy past that url to another variable and visit
         * to that third party url.
         * what will happened? let's see in action
         */
    //  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //  cy.get('#openwindow').then(function($el){
    //     const url = $el.prop('href')
    //     cy.log(url)
    //     cy.visit(url)
    //  })
         /**
          * Cypress not allow to visit third party domain or in short it don't allow other link seperate from domain
          */

    })

    it('Frames in Cypress', () => {
        /** first install cypress-iframe and import these lines to the top of the page.
         * /// <reference types="cypress-iframe" />
         * import "cypress-iframe"
         */

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded({url: 'https://www.rahulshettyacademy.com/'})
        cy.iframe().find("a[href='mentorship']").eq('0').should('be.visible').click()
        cy.wait(5000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})