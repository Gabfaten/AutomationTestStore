import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import Payment_PO from '../../support/pageObjects/Payment_PO'

/// <reference types="cypress" />
describe("Test payment process", () => {
    const homepage_PO = new Homepage_PO(); 
    const payment_PO = new Payment_PO();


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
    
     it("Verify payment Adress ", function () { 
        const userData = this.user;
        //use command add
        payment_PO.VerifyPaymentAdress(       
        '.heading1',
        'Payment Information',
        userData.firstName,userData.lastName,userData.company,userData.adress,
        userData.adress2,userData.city,userData.zipcode,userData.state,userData.country);      
      
     })
 

});