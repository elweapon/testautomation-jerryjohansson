/// <reference types="cypress" />

//Page elements
const createNewClient = 'h2 > .btn'
const menuButtonClient = ':nth-child(3) > .action'
const editClient = '.menu > :nth-child(1)'
const deleteClient = '.menu > :nth-child(2)'
const backEditBtn = '[href="/clients"]'

//Input fields
const pageContain = 'Clients'
const nameClient = ':nth-child(1) > input'
const emailClient = ':nth-child(2) > input'
const phoneClient = ':nth-child(3) > input'
const saveClient = '.blue'

//Create a new Client
function clientCreate(cy, clientFName, clientLName, clientEmail, clientPhone){
    cy.contains(pageContain)
    cy.get(createNewClient).click()
    cy.get(nameClient).type(clientFName + " " + clientLName)
    cy.get(emailClient).type(clientEmail)
    cy.get(phoneClient).type(clientPhone)
    cy.get(saveClient).click()
}

//Edit a Client
function clientEdit(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonClient).click()
    cy.get(editClient).click()
    cy.get(backEditBtn).click()
}

//Delete a Client
function clientDelete(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonClient).click()
    cy.get(deleteClient).click()
}

//Module Exports
module.exports = {
    clientCreate,
    clientEdit,
    clientDelete
}
