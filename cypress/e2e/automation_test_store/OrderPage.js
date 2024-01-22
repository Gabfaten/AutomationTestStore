import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import Products_PO from '../../support/pageObjects/Products_PO'
import AddToCart_PO from'../../support/pageObjects/AddToCart_PO'
import Order_PO from'../../support/pageObjects/Order_PO'

/// <reference types="cypress" />
describe("Test checkout Order ", () => {
    const homepage_PO = new Homepage_PO();  
    const products_PO = new Products_PO();
    const addTocart_PO = new AddToCart_PO();
    const order_PO = new Order_PO();

    before(function() {     
        cy.fixture('product').as('product');
        cy.fixture('login').as('login');
    })

    beforeEach(function () {  
        const productData = this.product;    
        homepage_PO.visitHomepage();  
        cy.wait(2000); 
        //add the product to cart      
        homepage_PO.clickOn_SubCategory_Menu();   
        products_PO.EnterQuantity(productData.qte);    
        addTocart_PO.ClickOnAddToCart(); 
        addTocart_PO.validateAddtoCart(productData.productName);            
     })

     it("Verify total price ", function () { 
        const productData = this.product;
        const loginData = this.login;
        order_PO.clickOnCheckOut();
        cy.Login(loginData.username, loginData.password, loginData.firstname);
        order_PO.VerifyTotalPrice(productData.qte);
        cy.screenshot();       
      });
     

});