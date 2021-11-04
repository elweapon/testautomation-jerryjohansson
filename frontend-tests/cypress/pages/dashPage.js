/// <reference types="cypress" />

const titleDashboard = 'Testers Hotel'
const logoutbtn = '.user > .btn'
const roomView = ':nth-child(1) > .btn'
const clientView = '.blocks >:nth-child(2) > .btn'
const billsView = ':nth-child(3) > .btn'
const reservationsView = ':nth-child(4) > .btn'

function checkTitle(){
    cy.title().should('eq', titleDashboard)
}

function perfLogout(cy, confirmContent) {
    cy.get(logoutbtn).click()
    cy.contains(confirmContent)
}

function viewRooms(){
    cy.get(roomView).click();
}

function viewClients(){
    cy.get(clientView).click();
}
function viewBills(){
    cy.get(billsView).click();
}
function viewReservations(){
    cy.get(reservationsView).click();
}

module.exports = {
    checkTitle,
    perfLogout,
    viewRooms,
    viewClients,
    viewBills,
    viewReservations
}