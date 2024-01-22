class OrderConfirmation_PO{

    clickOnConfirmOrderBtn(){
        cy.get('#checkout_btn',{ timeout: 10000 }).click();    
    }   
    clickOnConfirmOrder($selector,textToLocate){
        cy.get('#checkout_btn').click();
        cy.url().then((url) => {
            if (url.includes('checkout/success')) {                 
                cy.get($selector, { timeout: 10000 }).contains(textToLocate);              
                cy.get("a[title='Continue']").click(); 
            }       
        })
    }    


}
export default OrderConfirmation_PO;