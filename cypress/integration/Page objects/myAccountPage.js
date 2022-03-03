/// <reference types= "cypress"/>

class myAccountPage{
    
    signOut(value){
        cy.get('.logout').should('exist').check()     
    }
    home(value){
    cy.get('.logo').should('exist').check()   
    }

    checkAccount(){
    cy.get('.account > span').should('exist').click() 
    }

    orderHistory(){
        cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span').should('exist').click() 
    }

    contact(){
        cy.get('.toggle-footer > :nth-child(5) > a').should('exist').click()
        cy.url().should('include', 'controller=contact')
    }

}    

export default myAccountPage