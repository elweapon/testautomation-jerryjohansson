/// <reference types="cypress" />

//Page elements
const titleIndex = 'Testers Hotel'
const username = ':nth-child(1) > input'
const password = ':nth-child(2) > input'
const loginbtn = '.btn'

//Check title of Index
function checkTitle(){
    cy.title().should('eq', titleIndex)
}

//Perfom valid login
function validLogin(cy, usr, psw, confirmCont){
    cy.get(username).type(usr)
    cy.get(password).type(psw)
    cy.get(loginbtn).click()
    cy.contains(confirmCont)
}

//Module Exports
module.exports = {
    checkTitle,
    validLogin
}