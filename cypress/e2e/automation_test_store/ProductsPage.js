import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import Products_PO from '../../support/pageObjects/Products_PO'

/// <reference types="cypress" />
describe("View Subcategories and cart brand products", () => {
    const homepage_PO = new Homepage_PO();  
    const products_PO = new Products_PO();

    before(function() { 
        cy.fixture('product').then(function(data) {               
            globalThis.data = data;
        })
    })
    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(2000); 
       //click on 'skincare'
       homepage_PO.clickOn_Category_Menu();       
    })

    // when clic on skincare ,the subcategories are displayed and its products
    it.skip("View subcategories and its  products should be displayed", () => {  
        products_PO.VerifyCategoryProducts(data.subcategory);
    })
     // when clic on skincare/Face ,the subcategory(Face) and its products are displayed 
    it.skip("Products should be displayed when click on subcategory", () => { 
        products_PO.ClickOn_Subcategory_link();
        products_PO.VerifySubCategoryProducts(data.subcategory_one);
    })

})
describe('Sort Products', () => {
    const homepage_PO = new Homepage_PO();  
    const products_PO = new Products_PO();    
   
    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(2000); 
       //click on 'skincare'
       homepage_PO.clickOn_Category_Menu();       
    })

    it.skip('Should display products in ascending order of price after sorting by Price Low to High', () => {
        products_PO.SortProducts_AscOrder();
    })
    it.skip('Should display products in descending order of price after sorting by Price High to Low ', () => {
        products_PO.SortProducts_DescOrder();
    })

})

describe('Test Product sheet', () => {
    const homepage_PO = new Homepage_PO();  
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

  it('Verify title,price,quantity and the total price of product', () => {
    products_PO.EnterQuantity(data.qte);   
    products_PO.VerifyProductDetails(data.productName,data.qte);
    //cy.screenshot();    
      
   });

})