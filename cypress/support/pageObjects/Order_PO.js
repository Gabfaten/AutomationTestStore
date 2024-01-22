class Order_PO{

    clickOnCheckOut(){
        cy.get('#cart_checkout1', { timeout: 10000 })       
        .click();
    }
   
    VerifyTotalPrice(qte){
        let Totprice; 
        cy.get('.contentpanel .confirm_products tbody tr td:nth-child(3)').invoke('text')
        .then((priceText) => {
            const price = parseFloat(priceText.replace('$', '')); 
            cy.log('price', price);
            const quantity = parseFloat(qte);
            cy.log('quantity', quantity);
            const totalPrice = parseFloat(quantity * price);
            
            cy.get('.contentpanel .confirm_products tbody tr td:nth-child(5)',{ timeout: 10000 })
            .invoke('text').then((TotpriceText) => {
                const Totprice = parseFloat(TotpriceText.replace('$', ''));
                expect(Totprice).to.equal(totalPrice);
            })
       
    }); 
    }
   
   
    
}
export default Order_PO;