/// <reference types= "cypress"/>

class signInPage {
    createAnAccount(value){
        cy.get('#email_create').should('exist').type(value)      
    }

    submitCreate(){
        cy.get('#SubmitCreate > span').should('exist').click()          
    }

    alreadyRegisteredEmail(value){
        cy.get('#email').should('exist').type(value)       
    }

    alreadyRegisteredPass(value){
        cy.get('#passwd').should('exist').type(value)       
    }

    submitLogIn(){
        cy.get('#SubmitLogin > span').should('exist').click()
        cy.url().should('include', 'controller=my-account') 
    }

}
export default signInPage