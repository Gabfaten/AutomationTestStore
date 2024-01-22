class Shipping_PO{
   VerifyDeliveryAdress($selector, textToLocate,firstName,lastName,company,adress,adress2,city,zipcode,state,country){      
      
        cy.url().then((url) => {
            if (url.includes('checkout/confirm')) { 
                //clic on edit shipping
                cy.get(".confirm_shippment_options tbody tr td:nth-child(4) a")
                .click();
                cy.get($selector).contains(textToLocate);
                //use command add
                cy.VerifyAdress(firstName,lastName,company,adress,adress2,city,zipcode,state,country);              
            }
        })
  }
    ClickOn_continue(){
        cy.get("button[title='Continue']").click(); 
    }

}
export default Shipping_PO;
