/// <reference types= "cypress"/>

class createAccountPage{

    fillGender(value){
        if (value.toLowerCase()==='male' || 'm'){
            cy.get('#id_gender1').should('exist').click()
        }
        else{
            cy.get('#id_gender2').should('exist').click()
        }
    }

    fillFirstName(value){
        cy.get('#customer_firstname').should('exist').type(value)
    }

    fillLastName(value){
        cy.get('#customer_lastname').should('exist').type(value)
    }

    filcapasswd(value){
        cy.get('#passwd').should('exist').type(value)
    }

    fillNewsletter(value){
        if(value=='yes')
        cy.get('#newsletter').should('exist').click()
    }

    fillSpecialOffer(value){
        if (value=='yes')
        cy.get('#account-creation_form > :nth-child(1)').should('exist').click()
    }

    fillDOB(value){
        let dob=value.split(',')
        cy.get('#days').select(dob[0])
        cy.get('#months').select(parseInt(dob[1]))
        cy.get('#years').select(dob[2])
    }

    fillCompany(value){
        cy.get('#company').should('exist').type(value)
    }

    fillAddress(value){
        cy.get('#address1').should('exist').type(value)
    }

    fillCity(value){
        cy.get('#city').should('exist').type(value)
    }

    fillState(value){
        cy.get('#id_state').should('exist').select(value)
    }

    fillZip(value){
        cy.get('#postcode').should('exist').type(value)
    }

    fillCountry(value){
        cy.get('#id_country').should('exist').select(value)
    }

    filcaphone(value){
        cy.get('#phone_mobile').should('exist').type(value)
    }

    fillAlias(value){
        cy.get('#alias').clear().should('exist').type(value)
    }

    clickSubmit(){
        cy.get('#submitAccount > span').should('exist').click()
    }

}
export default createAccountPage