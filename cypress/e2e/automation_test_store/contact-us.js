import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import Contact_Us_PO from'../../support/pageObjects/Contact_us_PO'
/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    const homepage_PO = new Homepage_PO();
    const contact_us_PO = new Contact_Us_PO();

    before(function() { 
        cy.fixture('userDetails').then(function(data) {               
            globalThis.data = data;
        })
    })

    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(3000); //3sec
       homepage_PO.clickOn_ContactUs_Button();  
    })

    it("Should be able to submit a successful submission via contact us form", () => {       
        contact_us_PO.contactForm_Submission(data.first_name,data.email,data.enquiry,'.mb40 > :nth-child(3)', 'Your enquiry has been successfully sent to the store owner!');       
      
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {        
        contact_us_PO.contactForm_Submission(data.first_name," ",data.enquiry,'.help-block .element_error', 'Email: is required field! E-Mail Address does not appear to be valid!'); 
    });



})