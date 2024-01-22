class HomePage_PO {
    visitHomepage() {
        //use BaseUrl
        cy.visit("/");
    }
    VerifyLogo(){
        cy.get('.header-logo .logo img')
        .should('be.visible');
    }
    VerifyTitle(){
     cy.title()
     .should('eq','A place to practice your automation skills!');

    } 
    ScrollUp(){
        cy.get('#footer').scrollIntoView();       
        cy.get('#gotop').click();   
        cy.wait(1000); 
        // Verify that the page is scrolled to the top
        cy.window().then((win) => {
          const scrollTop = win.scrollY || win.pageYOffset;
          expect(scrollTop).to.equal(0);
        });
       // cy.screenshot();
    }

    clickOn_ContactUs_Button(){        
        cy.get('.info_links_footer > :nth-child(5) > a').click();   
    }
    clickOn_Login_Button(){ 
        cy.get('#customer_menu_top > :nth-child(1) > a').click();       
    }
    //Skincare   
    clickOn_Category_Menu(){
        cy.get('#categorymenu > nav > ul > li:nth-child(4) > a').click(); 
    }
    
    clickOn_SubCategory_Menu(){
        //Men
        cy.get('#categorymenu > nav > ul > li:nth-child(6) > a').click(); 
        //body&shower
        cy.get('#categorymenu > nav > ul > li:nth-child(6) > div > ul:nth-child(1) > li:nth-child(1) > a')
        .click({force:true});   

        cy.url().then((url) => {
            if (url.includes('product/category')) {                
                //click on "Men+Care Active Clean Shower Tool"
                 cy.get('div.thumbnails.grid.row.list-inline > div:nth-child(3) > div.fixed_wrapper > div > a') 
                .click();             
                
            }
        }); 
    
    } 
    //click on cart on the menu 
    clickOn_cart_Menu(){
        cy.get('#main_menu_top > li:nth-child(3)> a').click();
    }
  
    clickOn_checkout(){
        cy.get('#main_menu_top > li:nth-child(4)> a').click();
    }


}
export default HomePage_PO;