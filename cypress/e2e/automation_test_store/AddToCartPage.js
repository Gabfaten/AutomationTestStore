import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import AddToCart_PO from'../../support/pageObjects/AddToCart_PO'
import Products_PO from '../../support/pageObjects/Products_PO'
/// <reference types="cypress" />

describe("Test Add product to cart", () => {
    const homepage_PO = new Homepage_PO();
    const addTocart_PO = new AddToCart_PO();
    const products_PO = new Products_PO();

    before(function() { 
        cy.fixture('product').then(function(data) {               
            globalThis.data = data;
        })
    })
    
    beforeEach(function () {      
        homepage_PO.visitHomepage();  
        cy.wait(2000); 
        ///Men -> 'Body & Shower'
        homepage_PO.clickOn_SubCategory_Menu();                
     })

    it.skip("Product should be added in cart ", () => {   
        products_PO.EnterQuantity(data.qte);    
        addTocart_PO.ClickOnAddToCart();
        addTocart_PO.validateAddtoCart(data.productName);
    });

});
