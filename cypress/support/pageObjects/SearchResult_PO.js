class SearchResult_PO {
    SearchProductByName(productName){
        // Enter product name in search input and click search button
        cy.get('#filter_keyword').type(productName);
        cy.get("div[title='Go']").click();   
    }
    SearchProductByCategory(productName){
        //select category Men 
        cy.get('#category_58').click({force:true});
        cy.get('#category_selected ').click({force:true});
        cy.get("div[title='Go']").click({force:true});
        cy.url().then((url) => {
            if (url.includes('product/search')) { 
                //type the product name                   
                cy.get('#keyword').type(productName);
                cy.get('#description').check();
                cy.get('#model').check();
                cy.get('#search_button').click();  
            }
        });  
        
    }
    VerifyDisplayProduct(productName){               
        cy.url().then((url) => {
            if (url.includes('product/product')) {                   
                //verify breadcrumbs
                cy.get('ul.breadcrumb > li:nth-child(2) > a').contains(productName);        
                cy.get('h1.productname').contains(productName);  
            }
        });
        
        cy.screenshot(); 
    }    
    SearchProductsBySubCategory(subcategory){
          //select category Men 
          cy.get('#category_58').click({force:true});
          cy.get('#category_selected ').click({force:true});
          cy.get("div[title='Go']").click({force:true});
          cy.url().then((url) => {
              if (url.includes('product/search')) { 
                  //type the subcategory                  
                  cy.get('#keyword').type(subcategory);
                  cy.get('#description').check();                 
                  cy.get('#search_button').click();  
              }
          });         
        cy.get('div.thumbnails.grid.row.list-inline').should('be.visible');
        // Check if products related to the subcategory are displayed
        cy.get('div.thumbnails.grid.row.list-inline')
        .find('.col-md-3.col-sm-6.col-xs-12')
        .should('have.length.gte', 1) 
        .each(($product) => {          
            cy.wrap($product)
            .find('.prdocutname')
          
        });
        //cy.screenshot(); 
    }

}
export default SearchResult_PO;