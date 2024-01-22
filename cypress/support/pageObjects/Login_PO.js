class Login_PO {
    VerifyUrl() {
        cy.url().should('includes', 'account/login');
    }
    Login(username, password, firstname, $selector, textToLocate) {
        cy.get('#loginFrm_loginname').type(username);
        cy.get('#loginFrm_password').type(password);
        cy.get("button[title='Login']").click();
        cy.url().then((url) => {
            if (url.includes('account/account')) {
                //Verify Login As Username
                cy.get('h1').contains(firstname);
            }else{
                cy.get($selector).contains(textToLocate);  
            }
        });     
    }
    ClickOnLogOut(){
         //if we want to click in a button which is hidden by another element 
        cy.get('#main_menu > li:nth-child(2) > ul > li:nth-child(2) > a').click({force:true});
    }
    VerifyLogOutUrl() {
        cy.url().should('includes', 'account/logout');
    }
    Logout(){
        cy.get("a[title='Continue']").click();        
        cy.get('#main_menu > li:nth-child(2) > ul > li:nth-child(1) > a', { timeout: 10000 }).should(
            'contain',
            'Login'); 
        //cy.screenshot();
    }
}
export default Login_PO;