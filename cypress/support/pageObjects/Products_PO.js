class Products_PO{
    VerifyCategoryProducts(subcategory){
        cy.url().then((url) => {
            if (url.includes('product/category')) {                   
                //verify breadcrumbs
                cy.get('ul.breadcrumb > li:nth-child(2) > a').contains(subcategory);        
                cy.get('h1.heading1').contains(subcategory);  
            }
            //check if the list of subcategories is displayed
            cy.get('ul.thumbnails.row')
            .should('be.visible')
            .should('have.length.gte', 1);

            // Check if products related to the category are displayed
            cy.get('div.thumbnails.grid.row.list-inline')
            .find('.col-md-3.col-sm-6.col-xs-12')
            .should('have.length.gte', 1) 
            .each(($product) => {          
                cy.wrap($product)
                .find('.prdocutname')                
            });
           // cy.screenshot(); 
        });

    } 
    //click on 'Face' link
    ClickOn_Subcategory_link(){
        cy.get('div.contentpanel > ul > li:nth-child(2) > div> a').click(); 
    }
    VerifySubCategoryProducts(subcategory) {

        cy.url().then((url) => {
            if (url.includes('product/category')) {
                //verify breadcrumbs
                cy.get('ul.breadcrumb > li:nth-child(3) > a').contains(subcategory);
                cy.get('h1.heading1').contains(subcategory);
            }
            // Check if products related to the subcategory are displayed
            cy.get('div.thumbnails.grid.row.list-inline')
                .find('.col-md-3.col-sm-6.col-xs-12')
                .should('have.length.gte', 1)
                .each(($product) => {
                    cy.wrap($product)
                      .find('.prdocutname')
                });
           //cy.screenshot();
        });
    }
    SortProducts_AscOrder() {
        cy.SortProducts_AscOrder();        
        cy.screenshot();
    }
    SortProducts_DescOrder() {
        cy.SortProducts_DescOrder();
        //cy.screenshot();
    }
    EnterQuantity(qte) {
        cy.get('#product_quantity').clear();
        cy.get('#product_quantity').type(qte);
        cy.get('#product_quantity').focus();
        cy.wait(2000);
    }

    VerifyProductDetails(productName,qte) {       
        cy.get('h1.productname').contains(productName); 
        cy.get('div.productprice div.productfilneprice').invoke('text').then((priceText) => {
            const price = parseFloat(priceText.replace('$', ''));  
            // cy.log('price',price);             
            const quantity = parseFloat(qte);
            cy.log('quantity', quantity);
            const totalPrice = parseFloat(quantity * price);
            cy.log('totalPrice', totalPrice);
            
            cy.get('.total-price',{ timeout: 10000 }).invoke('text').then((totalPriceText) => {
                const displayedTotalPrice = parseFloat(totalPriceText.replace('$', ''));  
                cy.log('displayedTotalPrice', displayedTotalPrice);                
                expect(displayedTotalPrice).to.equal(totalPrice);
            })                               
          
        });
      
    }
   

}
export default Products_PO;