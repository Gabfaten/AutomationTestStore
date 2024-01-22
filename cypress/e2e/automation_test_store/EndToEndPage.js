import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import Login_PO from '../../support/pageObjects/Login_PO'
import Products_PO from '../../support/pageObjects/Products_PO'
import AddToCart_PO from'../../support/pageObjects/AddToCart_PO'
import Order_PO from'../../support/pageObjects/Order_PO'
import Shipping_PO from '../../support/pageObjects/Shipping_PO'
import Payment_PO from '../../support/pageObjects/Payment_PO'
import OrderConfirmation_PO from '../../support/pageObjects/OrderConfirm_PO'

/// <reference types="cypress" />
describe("EndToEnd Test", () => {
    const homepage_PO = new Homepage_PO();
    const login_PO = new Login_PO();
    const products_PO = new Products_PO();
    const addTocart_PO = new AddToCart_PO();
    const order_PO = new Order_PO();
    const shipping_PO = new Shipping_PO();  
    const payment_PO = new Payment_PO();
    const orderconfirm_PO = new OrderConfirmation_PO();

    before(function() { 
        cy.fixture('registerDetails').as('user');
        cy.fixture('login').as('login');
        cy.fixture('product').as('product');
    })
    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(2000);     
    })

    it("EndToEnd Test ", function () { 
        const loginData = this.login; 
        const productData = this.product; 
        const userData = this.user;   

        homepage_PO.VerifyLogo();   
        homepage_PO.VerifyTitle();
        homepage_PO.clickOn_Login_Button(); 
        cy.wait(2000); 
        login_PO.VerifyUrl(); 
        cy.Login(loginData.username, loginData.password, loginData.firstname); 
        ///Men -> 'Body & Shower'
        homepage_PO.clickOn_SubCategory_Menu();  
        //add to cart
        products_PO.EnterQuantity(productData.qte);          
        //Verify title,price,quantity and the total price of product
        products_PO.VerifyProductDetails(productData.productName,productData.qte);  
        cy.wait(2000); 
        addTocart_PO.ClickOnAddToCart();
        addTocart_PO.validateAddtoCart(productData.productName);
        cy.wait(2000);     
        //clic on checkout button      
        order_PO.clickOnCheckOut();  
        cy.wait(2000);     
        //order_PO.VerifyTotalPrice(productData.qte);  
        //cy.wait(2000);          
        //Verify delivery Adress
        shipping_PO.VerifyDeliveryAdress(       
            '.heading1',
             'Delivery Information',
            userData.firstName,userData.lastName,userData.company,userData.adress,
            userData.adress2,userData.city,userData.zipcode,userData.state,userData.country);

        //click on continue
        shipping_PO.ClickOn_continue();
        //Verify payment Adress
        payment_PO.VerifyPaymentAdress(       
            '.heading1',
            'Payment Information',
            userData.firstName,userData.lastName,userData.company,userData.adress,
            userData.adress2,userData.city,userData.zipcode,userData.state,userData.country);   
        //Confirm order 
        payment_PO.ClickOn_continue();
        //click on 'confirm order' button
        orderconfirm_PO.clickOnConfirmOrderBtn();
        orderconfirm_PO.clickOnConfirmOrder('.heading1','YOUR ORDER HAS BEEN PROCESSED!');
    })
});