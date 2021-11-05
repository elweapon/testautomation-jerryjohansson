/// <reference types="cypress" />

//Page elements
const createNewreservation = 'h2 > .btn'
const menuButtonreservation = ':nth-child(2) > .action'
const editReservation = '.menu > :nth-child(1)'
const deleteReservation = '.menu > :nth-child(2)'
const headerReservation = ':nth-child(2) > h3'
const backEditBtn = '[href="/reservations"]'

//Input fields
const pageContain = 'Reservations'
const startDatereservation = ':nth-child(1) > input'
const endDatereservation = ':nth-child(2) > input'
const clientreservation = ':nth-child(3) > select'
const roomreservation = ':nth-child(4) > select'
const billreservation = ':nth-child(5) > select'
const savereservation = '.blue'

//Create a new Reservation
function reservationCreate(cy, pastDate, futureDate){
    cy.contains(pageContain)
    cy.get(createNewreservation).click()
    cy.get(startDatereservation).type(pastDate)
    cy.get(endDatereservation).type(futureDate)
    cy.get(clientreservation).select('Mikael Eriksson (#2)')
    cy.get(roomreservation).select('Floor 1, Room 101')
    cy.get(billreservation).select('ID: 1')
    cy.get(savereservation).click()
}

//Edit Reservation
function reservationEdit(cy, pastDate, futureDate) {
    cy.contains(pageContain)
    cy.get(headerReservation).contains('Mikael Eriksson: ' + pastDate + ' - ' + futureDate)
    cy.get(menuButtonreservation).click()
    cy.get(editReservation).click()
    cy.get(backEditBtn).click()
}

//Delete Reservation
function reservationDelete(cy, pastDate, futureDate) {
    cy.contains(pageContain)
    cy.get(headerReservation).contains('Mikael Eriksson: ' + pastDate + ' - ' + futureDate)
    cy.get(menuButtonreservation).click()
    cy.get(deleteReservation).click()
    cy.contains('Mikael Eriksson: ' + pastDate + ' - ' + futureDate).should('not.exist')
}

//Module Exports
module.exports = {
    reservationCreate,
    reservationEdit,
    reservationDelete
}
