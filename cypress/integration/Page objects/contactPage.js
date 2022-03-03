/// <reference types= "cypress"/>

class contactPage{
    subject(){
        cy.get('#id_contact').should('exist').select('Customer service')
    }

    orderNumber(){
        cy.get(':nth-child(6) > .selector > .form-control').should('exist').select(1)
    }

    typeMessage(){
        cy.get('#message').should('exist').type('please hurry')
    }

    sendMessage(){
        cy.get('#submitMessage > span').should('exist').click()
    }

}    

export default contactPage