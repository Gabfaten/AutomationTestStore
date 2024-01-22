import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import Login_PO from '../../support/pageObjects/Login_PO'
/// <reference types="cypress" />
describe("Test User Login form via Automation Test Store", () => {

    const homepage_PO = new Homepage_PO();
    const login_PO = new Login_PO();

    before(function() { 
        cy.fixture('login').then(function(data) {               
            globalThis.data = data;
        })
    })
    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(2000);
       homepage_PO.clickOn_Login_Button(); 
       cy.wait(2000); 
       login_PO.VerifyUrl();    
    })

    it("Should be able to Login using valid credentials", () => {   
        login_PO.Login(data.username,data.password,data.firstname,'h1',' ');
        //cy.screenshot();
    });

    it("Should not be able to Login using incorrect credentials", () => {   
        login_PO.Login(data.incorrect_username,data.incorrect_pswd,' ',
        'div.alert.alert-error.alert-danger',
        'Error: Incorrect login or password provided.');
         //cy.screenshot();
    });

    it("Should be able to Logout", () => {   
        login_PO.Login(data.username,data.password,data.firstname,'h1',' ');
        login_PO.ClickOnLogOut();
        login_PO.VerifyLogOutUrl();
        login_PO.Logout();
    });


})