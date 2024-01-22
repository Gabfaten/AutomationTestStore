class Signup_PO { 

    clickOn_Continue_Button(){     
        cy.get("button[title='Continue']").click();        
    }
    Signup(FirstName,lastName,email,tel,fax,company,address,address2,city,
        state,zipcode,country,loginName,password,passwordConfirm,$selector, textToLocate){        
            cy.get('#AccountFrm_firstname').type(FirstName);
            cy.get('#AccountFrm_lastname').type(lastName);
            cy.get('#AccountFrm_email').type(email);
            cy.get('#AccountFrm_telephone').type(tel);
            cy.get('#AccountFrm_fax').type(fax);
            cy.get('#AccountFrm_company').type(company);
            cy.get('#AccountFrm_address_1').type(address);
            cy.get('#AccountFrm_address_2').type(address2);
            cy.get('#AccountFrm_city').type(city);           
            cy.get('#AccountFrm_postcode').type(zipcode);
            //country :select dropdown list 
            cy.get('#AccountFrm_country_id').select(country);             
             //state:select dropdown list 
             cy.get('#AccountFrm_zone_id').select(state);        
            cy.get('#AccountFrm_loginname')         
            .type(loginName);           
            cy.get('#AccountFrm_password')                  
            .type(password);
            cy.get('#AccountFrm_confirm').type(passwordConfirm);  
            //subscribe radio button
            cy.get('#AccountFrm_newsletter0').check();
            //privacy policy agree  checkbox
            cy.get('#AccountFrm_agree').check();
            cy.get('.lock-on-click').click(); 
            cy.get($selector).contains(textToLocate);
            cy.url().then((url) => {
            if (url.includes('account/success')) {                   
                //click on 'continue'
                cy.get(' #maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > section > a').click(); // not find
                //Verify Login As Username
                cy.get('h1').contains(FirstName);            }
            });                
           // cy.screenshot(); 

    }
    
}
export default Signup_PO;