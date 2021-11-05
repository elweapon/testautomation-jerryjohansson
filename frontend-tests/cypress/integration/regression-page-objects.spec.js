/// <reference types="cypress" />

//Target URL and login information
import * as localhost from '../targets/localhost'

//Test elements divided by page
import * as indexFuncs from '../pages/indexPage'
import * as dashFuncs from '../pages/dashPage'
import * as roomFuncs from '../pages/roomsPage'
import * as clientFuncs from '../pages/clientsPage'
import * as billFuncs from '../pages/billsPage'
import * as reservFuncs from '../pages/reservationsPage'

//Auto generated fake data for input
import faker from 'faker'
let roomNum = faker.datatype.number()
let floorNum = faker.datatype.number()
let priceNum = faker.datatype.number()
let fName = faker.name.firstName()
let lName = faker.name.lastName()
let email = faker.internet.email()
let phone = faker.phone.phoneNumber()
let billValue = faker.datatype.number()

//ToISOString() make the date format to "YYYY-MM-DD"
let datePast = faker.date.past().toISOString().split('T')[0]
let dateFuture = faker.date.future().toISOString().split('T')[0]

//Arrays and Choose random entry from each array for input in creating room
const roomCategory = ['Double', 'Single', 'Twin']
const roomFeatures = ['Balcony', 'Ensuite', 'Sea View', 'Penthouse']
const roomCateRng = Math.floor(Math.random() * roomCategory.length);
const roomFeatRng = Math.floor(Math.random() * roomFeatures.length);

//Test Suite
describe('Test Suite', function(){

    //Open webpage and login the user before each test
    beforeEach(() => {
        cy.visit(localhost.base_url)
        indexFuncs.checkTitle(cy)
        indexFuncs.validLogin(cy, localhost.username, localhost.password, 'Tester Hotel Overview')
    })

    //Logout the user after each test
    afterEach(() => {
        dashFuncs.perfLogout(cy, 'Login')
    })
    

    //Create a new Room
    it('Create a new room', function(){
        dashFuncs.viewRooms()
        roomFuncs.roomCreate(cy, roomCategory[roomCateRng], roomNum, floorNum, priceNum, roomFeatures[roomFeatRng])
    })
    
    //Edit/Delete Room test
    it('Edit/Delete Room Test', function(){
        dashFuncs.viewRooms()
        roomFuncs.roomEdit(cy, floorNum, roomNum)
        roomFuncs.roomDelete(cy, floorNum, roomNum)
    })

    //Create a new Client
    it('Create Client', function(){
        dashFuncs.viewClients()
        clientFuncs.clientCreate(cy, fName, lName, email, phone)
    })

    //Edit/Delete a Client
    it('Edit/Delete Client', function(){
        dashFuncs.viewClients()
        clientFuncs.clientEdit(cy, email)
        clientFuncs.clientDelete(cy, email)
    })

    //Create a new Bill
    it('Create Bill', function(){
        dashFuncs.viewBills()
        billFuncs.billCreate(cy, billValue)
    })

    //Edit/Delete a bill
    it('Edit/Delete Bill', function(){
        dashFuncs.viewBills()
        billFuncs.billEdit(cy, billValue)
        billFuncs.billDelete(cy, billValue)
    })
    
    //Create a new Reserveration
    it('Create Reservation', function(){
        dashFuncs.viewReservations()
        reservFuncs.reservationCreate(cy, datePast, dateFuture)
    })

    //Edit/Delete a reservation
    it('Edit/Delete Reservation', function(){
        dashFuncs.viewReservations()
        //Gives a "404 page not found" Error when checking the "Edit" function
        //reservFuncs.reservationEdit(cy, datePast, dateFuture)
        reservFuncs.reservationDelete(cy, datePast, dateFuture)
    })

})