// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
Cypress.Commands.add ("Login", (username, password, firstname) => {

    cy.get('#loginFrm_loginname').type(username);
    cy.get('#loginFrm_password').type(password);
    cy.get("button[title='Login']").click();
    cy.url().then((url) => {
         //Verify Login As Username
         cy.get('#customer_menu_top > li > a').contains(firstname);
    });  
})

Cypress.Commands.add("SortProducts_AscOrder", () => {
    cy.get('#sort').select('Price Low > High');   
    cy.get('div.thumbnails.grid.row.list-inline')
    .find('.col-md-3.col-sm-6.col-xs-12')
    .should('have.length.at.least', 2) 
    .each(($product) => {          
        cy.wrap($product)
        .find('div.pricetag.jumbotron>div.price>div')                
    });
       
    const pricesBeforeSort = [];
    cy.get('div.pricetag.jumbotron>div.price>div').each(($price) => {
        pricesBeforeSort.push(parseFloat($price.text().replace('$', '')));
    });    
    // Verify that prices are in ascending order
    for (let i = 0; i < pricesBeforeSort.length - 1; i++) {
        expect(pricesBeforeSort[i]).to.be.lessThan(pricesBeforeSort[i + 1]);
    }
});
Cypress.Commands.add("SortProducts_DescOrder", () => {
    cy.get('#sort').select('Price High > Low');   
    cy.get('div.thumbnails.grid.row.list-inline')
    .find('.col-md-3.col-sm-6.col-xs-12')
    .should('have.length.at.least', 2) 
    .each(($product) => {          
        cy.wrap($product)
        .find('div.pricetag.jumbotron>div.price>div')                
    });
       
    const pricesBeforeSort = [];
    cy.get('div.pricetag.jumbotron>div.price>div').each(($price) => {
        pricesBeforeSort.push(parseFloat($price.text().replace('$', '')));
    });    
    // Verify that prices are in ascending order
    for (let i = 0; i < pricesBeforeSort.length - 1; i++) {
        expect(pricesBeforeSort[i]).to.be.greaterThan(pricesBeforeSort[i + 1]);
    }
});
Cypress.Commands.add("addProductToCart", productName => {
      cy.get("#cart table")
        .find('tr > td:nth-child(2) > a')  
        .each(($el, index, $list) => {
            if($el.text() === productName) {
                cy.log($el.text())
                //cy.get('.productcart').eq(index).click();
            }
        });
});
//verify delivery address & payment address
Cypress.Commands.add ("VerifyAdress", (firstName,lastName,company,adress,adress2,city,zipcode,state,country) => {
    cy.get('.registerbox table tbody tr td address')                
    .contains(firstName)
    .contains(lastName)
    .contains(company)
    .contains(adress)
    .contains(adress2)
    .contains(city)
    .contains(zipcode)
    .contains(state)
    .contains(country);
});

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })