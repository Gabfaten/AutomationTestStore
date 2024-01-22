class AddToCart_PO{

 ClickOnAddToCart(){
   cy.get('.productpagecart > li >a').click();
 }
 validateAddtoCart(productName){  
    cy.url().then((url) => {
        if (url.includes('checkout/cart')) {
           //verify the product added(qte,price,total)
            cy.addProductToCart(productName);
            //cy.screenshot();  
        }
    });    
 }

}
export default AddToCart_PO;