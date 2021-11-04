/// <reference types="cypress" />

const titleIndex = 'Testers Hotel'
const username = ':nth-child(1) > input'
const password = ':nth-child(2) > input'
const loginbtn = '.btn'

function checkTitle(){
    cy.title().should('eq', titleIndex)
}

function validLogin(cy, usr, psw, confirmCont){
    cy.get(username).type(usr)
    cy.get(password).type(psw)
    cy.get(loginbtn).click()
    cy.contains(confirmCont)
}

module.exports = {
    checkTitle,
    validLogin
}