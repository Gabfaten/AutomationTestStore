import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import Signup_PO from'../../support/pageObjects/Signup_PO'
/// <reference types="cypress" />
describe("Test Register User form via Automation Test Store", () => {

    const homepage_PO = new Homepage_PO();
    const signup_PO = new Signup_PO();

    before(function() { 
        cy.fixture('registerDetails').then(function(data) {               
            globalThis.data = data;
        })
    })

    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(2000); //2sec
       homepage_PO.clickOn_Login_Button(); 
       cy.wait(2000); //2sec 
       signup_PO.clickOn_Continue_Button();      
    })
    
    it.skip("Should be able to signup  via Account Form", () => {         
        signup_PO.Signup(data.firstName,data.lastName,data.email,
            data.tel,data.fax,data.company,data.adress,data.adress2,
            data.city,data.state,data.zipcode,
            data.country,data.loginName,data.password,data.pswdConfirm,
            'h1', 'Your Account Has Been Created!'
        );     
    });
   
    it("Should not be able to signup via Account Form with an existing email", () => { 
        cy.log('Register User With Existing Email');     
        signup_PO.Signup(data.firstName,data.lastName,data.email,
            data.tel,data.fax,data.company,data.adress,data.adress2,
            data.city,data.state,data.zipcode,
            data.country,data.loginName,data.password,data.pswdConfirm,
            "div.alert.alert-error.alert-danger", 
            'Error: E-Mail Address is already registered!'
        );    
    });



})