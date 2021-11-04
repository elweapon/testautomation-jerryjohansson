/// <reference types="cypress" />

//Page elements
const createNewBill = 'h2 > .btn'
const menuButtonBill = ':nth-child(2) > .action'
const editBill = '.menu > :nth-child(1)'
const deleteBill = '.menu > :nth-child(2)'
const backEditBtn = '[href="/bills"]'

//Input fields
const pageContain = 'Bills'
const valueBill = 'input'
const saveBill = '.blue'

//Create a new Bill
function billCreate(cy, billValue){
    cy.contains(pageContain)
    cy.get(createNewBill).click()
    cy.get(valueBill).type('25000')
    cy.get(saveBill).click()
}

//Edite a Bill
function billEdit(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonBill).click()
    cy.get(editBill).click()
    cy.get(backEditBtn).click()
}

//Delete a Bill
function billDelete(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonBill).click()
    cy.get(deleteBill).click()
}

//Module Exports
module.exports = {
    billCreate,
    billEdit,
    billDelete
}
