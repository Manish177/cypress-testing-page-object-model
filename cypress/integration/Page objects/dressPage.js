/// <reference types= "cypress"/>

class dressPage {
    sizeMedium(){
        cy.get('#layered_id_attribute_group_2').should('exist').check()
    }

    dressColor(){
        cy.get('#layered_id_attribute_group_15').should('exist').click()
    }
    sortBy(){
        cy.get('#selectProductSort').should('exist').select('Price: Lowest first')
    }

    addToCart(){
        cy.get('.last-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist').click()
    }

    continueShopping(){
        cy.get('.continue > span').should('exist').click()
    }

    addToCart1(){
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist').click()
    }

    proceedCheckout(){
        cy.get('.button-container > .button-medium > span').should('exist').click()
    }

    chekcout(){
        cy.get('[title="View my shopping cart"]').should('exist').click()
    }
}
export default dressPage
