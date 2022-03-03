/// <reference types= "cypress"/>

class homePage {

    clickHomeLogo(){
        cy.get('.logo').click()
    }
    
    clickSignIn(){
        cy.get('.login').should('exist').click()  
        cy.url().should('include', 'controller=authentication')     
    }

    goHomePage(){
        cy.get('.logo').click().should('exist')
        cy.url().should('include', 'index')
    }

    addToCart(){
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist').click()
    }

    dressSection(){
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('exist').click()
        cy.url().should('include', 'controller=category')
    }  
    
    proceedCheckout(){
        cy.get('.button-medium > span').click()
        cy.url().should('include', 'controller=order')
    }

    addAllPopularToCart(){
        cy.get('.active > .homefeatured').click()
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .last-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
    }   

    addAllBEstSellerToCart(){
        cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').click()
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .last-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.continue > span').click()

    }

}    
export default homePage