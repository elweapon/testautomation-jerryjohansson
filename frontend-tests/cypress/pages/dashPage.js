/// <reference types="cypress" />

//Page elements
const titleDashboard = 'Testers Hotel'
const logoutbtn = '.user > .btn'
const roomView = ':nth-child(1) > .btn'
const clientView = '.blocks >:nth-child(2) > .btn'
const billsView = ':nth-child(3) > .btn'
const reservationsView = ':nth-child(4) > .btn'

//Check page title of Dashboard
function checkTitle(){
    cy.title().should('eq', titleDashboard)
}

//Perform logout
function perfLogout(cy, confirmContent) {
    cy.get(logoutbtn).click()
    cy.contains(confirmContent)
}

//View Rooms
function viewRooms(){
    cy.get(roomView).click();
}

//View Clientes
function viewClients(){
    cy.get(clientView).click();
}

//View Bills
function viewBills(){
    cy.get(billsView).click();
}

//View Reservations
function viewReservations(){
    cy.get(reservationsView).click();
}

//Module Exports
module.exports = {
    checkTitle,
    perfLogout,
    viewRooms,
    viewClients,
    viewBills,
    viewReservations
}