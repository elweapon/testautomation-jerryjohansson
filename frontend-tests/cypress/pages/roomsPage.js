/// <reference types="cypress" />

const createNewRoom = 'h2 > .btn'
const menuButtonRoom = ':nth-child(3) > .action'
const editRoom = '.menu > :nth-child(1)'
const deleteRoom = '.menu > :nth-child(2)'
const backEditBtn = '[href="/rooms"]'

const pageContain = 'Rooms'
const categoryRoom = ':nth-child(1) > select'
const numberRoom = ':nth-child(2) > input'
const floorRoom = ':nth-child(3) > input'
const availableRoom = '.checkbox'
const priceRoom = ':nth-child(5) > input'
const featuresRoom = ':nth-child(6) > select'
const saveRoom = '.blue'

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
}

function roomEdit(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonRoom).click()
    cy.get(editRoom).click()
    cy.get(backEditBtn).click()
}

function roomDelete(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonRoom).click()
    cy.get(deleteRoom).click()
}

module.exports = {
    roomCreate,
    roomEdit,
    roomDelete
}
