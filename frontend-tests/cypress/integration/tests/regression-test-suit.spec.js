/// <reference types="cypress" />

//This is a test suit
describe('Test Suit 01', function(){

    //This is a test case
    it('Perform valid login', function(){

        cy.visit('localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()

    })
})