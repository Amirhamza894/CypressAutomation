/// <reference types = "cypress"/>

describe('Testing', () =>{
    it('Test', () => {
        cy.visit("https://stage.olx-lb.run/", {
            auth: {
                username: 'sl',
                password: 'getin1', 
            },
        })
    })
})