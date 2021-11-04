/// <reference types="cypress" />

//Opens the website (loaclhost:3000) and login the user before the test
before(()=> {
    cy.visit('localhost:3000')
    cy.title().should('include', 'Hotel')
    cy.contains('Login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.contains('Welcome')
})

describe('Login & Logout Test', function(){
    it('Perform Valid Login And Logout', function(){
    
        cy.get(':nth-child(4) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > input').type('1234-56-78')
        cy.get(':nth-child(2) > input').type('8765-43-21')
        cy.get(':nth-child(3) > select').select('Mikael Eriksson (#2)', '2')
    
    })
})