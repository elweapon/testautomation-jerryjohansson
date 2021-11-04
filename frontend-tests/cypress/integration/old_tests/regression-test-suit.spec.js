/// <reference types="cypress" />

import faker from 'faker'

let roomnumb = faker.datatype.number()
let firstName = faker.name.firstName()
let email = faker.internet.email()
let phone = faker.phone.phoneNumber()


//Opens the website (loaclhost:3000) and login the user before the test
beforeEach(()=> {
    cy.visit('localhost:3000')
    cy.title().should('include', 'Hotel')
    cy.contains('Login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.contains('Tester Hotel Overview')
})

//Logout the user after the test
afterEach(()=> {
    cy.get('.user > .btn').click()
    cy.title().should('include', 'Hotel')
    cy.contains('Login')
})



//This is a test suit
describe('Test Suit 01', function(){

    /*
    //Returns the user to the start page when the user is logged in
    afterEach(()=> {
        cy.get(':nth-child(3) > .btn').click()
        cy.title().should('include', 'Hotel')
        cy.contains('Tester Hotel Overview')
    })
    */

    //Create a new Room
    it('Create a new room', function(){

        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type(roomnumb)
        cy.get(':nth-child(3) > input').type('3')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('2500')
        cy.get(':nth-child(6) > select').select('balcony')
        cy.get('.blue').click()
    })

    //Delete Room
    it('Delete Room', function(){
        cy.get(':nth-child(1) > .btn').click()
        cy.contains(roomnumb)
        cy.get(':nth-child(3) > .action').click()
        cy.get('.menu > :nth-child(2)').click()
        //cy.get('.rooms').contains(roomnumb).should('not.exist')
    })

    //Create a new Client
    it('Create a new Client', function(){

        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > input').type(firstName)
        cy.get(':nth-child(2) > input').type(email)
        cy.get(':nth-child(3) > input').type(phone)
        cy.get('.blue').click()
        cy.contains(email)
    })

    //Delete Client
    it('Delete Client', function(){
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
    })



})
