/// <reference types="cypress" />

//Page elements
const createNewRoom = 'h2 > .btn'
const menuButtonRoom = ':nth-child(3) > .action'
const editRoom = '.menu > :nth-child(1)'
const deleteRoom = '.menu > :nth-child(2)'
const roomHeader = ':nth-child(3) > :nth-child(2) > h3'
const backEditBtn = '[href="/rooms"]'

//Input fields
const pageContain = 'Rooms'
const categoryRoom = ':nth-child(1) > select'
const numberRoom = ':nth-child(2) > input'
const floorRoom = ':nth-child(3) > input'
const availableRoom = '.checkbox'
const priceRoom = ':nth-child(5) > input'
const featuresRoom = ':nth-child(6) > select'
const saveRoom = '.blue'

//Create a new Room
function roomCreate(cy, category, roomNum, floorNum, price, features){
    cy.contains(pageContain)
    cy.get(createNewRoom).click()
    cy.get(categoryRoom).select(category)
    cy.get(numberRoom).type(roomNum)
    cy.get(floorRoom).type(floorNum)
    cy.get(availableRoom).click()
    cy.get(priceRoom).type(price)
    cy.get(featuresRoom).select(features)
    cy.get(saveRoom).click()
    cy.get(roomHeader).contains('Floor ' + floorNum + ', ' + 'Room ' + roomNum)
}

//Edit Room
function roomEdit(cy, floorNum, roomNum) {
    cy.contains(pageContain)
    cy.get(roomHeader).contains('Floor ' + floorNum + ', ' + 'Room ' + roomNum)
    cy.get(menuButtonRoom).click()
    cy.get(editRoom).click()
    cy.get(backEditBtn).click()
}

//Delete Room
function roomDelete(cy, floorNum, roomNum) {
    cy.contains(pageContain)
    cy.get(roomHeader).contains('Floor ' + floorNum + ', ' + 'Room ' + roomNum)
    cy.get(menuButtonRoom).click()
    cy.get(deleteRoom).click()
    cy.contains('Floor ' + floorNum + ', ' + 'Room ' + roomNum).should('not.exist')
}

//Module Exports
module.exports = {
    roomCreate,
    roomEdit,
    roomDelete
}
