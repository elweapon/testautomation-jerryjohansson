/// <reference types="cypress" />

describe('Login & Logout Test', function(){
    it('Perform Valid Login And Logout', function(){
    
        cy.visit('localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome')
        cy.get('.btn').click()
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
    
    })
})