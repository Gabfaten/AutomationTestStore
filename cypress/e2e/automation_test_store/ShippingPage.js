import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import Shipping_PO from '../../support/pageObjects/Shipping_PO'


/// <reference types="cypress" />
describe("Test Shipping fonctionnality", () => {
    const homepage_PO = new Homepage_PO();  
    const shipping_PO = new Shipping_PO();  

    before(function() { 
        cy.fixture('registerDetails').as('user');
        cy.fixture('login').as('login');
    })

    beforeEach(function () {          
        const loginData = this.login; 
        homepage_PO.visitHomepage();  
        cy.wait(2000); 
        homepage_PO.clickOn_Login_Button();
        cy.Login(loginData.username, loginData.password, loginData.firstname); 
        homepage_PO.clickOn_checkout();  
     })
    
     it("Verify delivery Adress ", function () { 
        const userData = this.user;      
        shipping_PO.VerifyDeliveryAdress(       
        '.heading1',
         'Delivery Information',
        userData.firstName,userData.lastName,userData.company,userData.adress,
        userData.adress2,userData.city,userData.zipcode,userData.state,userData.country);
        //cy.screenshot();
     })


});