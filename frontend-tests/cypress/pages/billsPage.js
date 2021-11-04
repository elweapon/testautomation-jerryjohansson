/// <reference types="cypress" />

const createNewBill = 'h2 > .btn'
const menuButtonBill = ':nth-child(2) > .action'
const editBill = '.menu > :nth-child(1)'
const deleteBill = '.menu > :nth-child(2)'
const backEditBtn = '[href="/bills"]'

const pageContain = 'Bills'
const valueBill = 'input'
const saveBill = '.blue'

function billCreate(cy, billValue){
    cy.contains(pageContain)
    cy.get(createNewBill).click()
    cy.get(valueBill).type('25000')
    cy.get(saveBill).click()
}

function billEdit(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonBill).click()
    cy.get(editBill).click()
    cy.get(backEditBtn).click()
}

function billDelete(cy) {
    cy.contains(pageContain)
    cy.get(menuButtonBill).click()
    cy.get(deleteBill).click()
}

module.exports = {
    billCreate,
    billEdit,
    billDelete
}
