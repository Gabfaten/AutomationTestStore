import Homepage_PO from '../../support/pageObjects/Homepage_PO'
import SearchResult_PO from '../../support/pageObjects/SearchResult_PO'
/// <reference types="cypress" />
describe("Search Product by name", () => {
    
    const homepage_PO = new Homepage_PO();  
    const search_PO = new SearchResult_PO();

    before(function() { 
        cy.fixture('product').then(function(data) {               
            globalThis.data = data;
        })
    })
    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(2000); //2sec    
      
    })
    it("Search the product by name and product should be displayed", () => {  
        search_PO.SearchProductByName(data.productName);
        search_PO.VerifyDisplayProduct(data.productName);
    });

    it("Search the product by select category then product name ", () => { 
        search_PO.SearchProductByCategory(data.productName);
        search_PO.VerifyDisplayProduct(data.productName);
    });

});

describe("Search Product by subcategory", () => {
    const homepage_PO = new Homepage_PO();
    const search_PO = new SearchResult_PO();

    before(function() { 
        cy.fixture('product').then(function(data) {               
            globalThis.data = data;
        })
    })
    beforeEach(function () {      
       homepage_PO.visitHomepage();  
       cy.wait(2000); //2sec    
      
    })
    it('should display product(s) after searching for a subcategory', () => {
        search_PO.SearchProductsBySubCategory(data.subcategory);
     
    });
});