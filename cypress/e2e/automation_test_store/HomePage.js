import Homepage_PO from '../../support/pageObjects/Homepage_PO'
/// <reference types="cypress" />
describe("Test Homepage", () => {
    const homepage_PO = new Homepage_PO();

    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(2000); 
    
    })
    it("Logo,Title Should be displayed", () => {    
        homepage_PO.VerifyLogo();   
        homepage_PO.VerifyTitle();
        cy.screenshot();        
     
    });
    it('should scroll to top when clicking "Back to Top" link', () => {      
        homepage_PO.ScrollUp();
    });
    
})