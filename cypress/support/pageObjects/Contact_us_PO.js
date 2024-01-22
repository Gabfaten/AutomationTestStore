class Contact_Us_PO {
    contactForm_Submission(firstName, email, enquiry, $selector, textToLocate) { 
        cy.get('#ContactUsFrm_first_name').type(firstName);
        cy.get('#ContactUsFrm_email').type(email);
        cy.get('#ContactUsFrm_enquiry').type(enquiry); 
        cy.get('.lock-on-click').click(); 
        cy.get($selector).contains(textToLocate)
        cy.screenshot(); 
    }
}
export default Contact_Us_PO;