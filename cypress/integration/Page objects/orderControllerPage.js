/// <reference types= "cypress"/>

class orderControllerPage {
    
    orderDetails(){
        cy.get('.cart_navigation > .button > span').should('exist').click()     
    }

    addressDetails(){
        cy.get('.cart_navigation > .button > span').should('exist').click()  
    }

    shippingDetails(){
        cy.get('#cgv').should('exist').click()
        cy.get('.cart_navigation > .button > span').should('exist').click()  
    }

    paymentOptions(){
        cy.get('.bankwire > span').should('exist').should('exist').click()  
    }

    confirmOrder(){
        cy.get('#cart_navigation > .button > span').should('exist').click()  
    }
}    
export default orderControllerPage