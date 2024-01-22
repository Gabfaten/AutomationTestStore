class Payment_PO{
    VerifyPaymentAdress($selector, textToLocate,firstName,lastName,company,adress,adress2,city,zipcode,state,country){    
     
        cy.url().then((url) => {          
             //clic on edit payment
             cy.get(".confirm_payment_options tbody tr td:nth-child(4) > a")
             .contains('Edit Payment')
             .click();

             if (url.includes('checkout/payment')) { 
                cy.log('url ->checkout/payment');
                 cy.get($selector).contains(textToLocate);
                 //use command add
                 cy.VerifyAdress(firstName,lastName,company,adress,adress2,city,zipcode,state,country);                           
             }
            //cy.screenshot();  
         })
   }
     ClickOn_continue(){
         cy.get('#payment_agree').check();
         cy.get("button[title='Continue']").click(); 

     }
 
 }
 export default Payment_PO;
 