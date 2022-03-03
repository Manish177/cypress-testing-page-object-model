///<reference types="cypress"/>

import createAccountPage from '../../Page objects/createAccountPage'
import homePage from '../../Page objects/homePage'
import signInPage from '../../Page objects/signInPage'
import myAccountPage from '../../Page objects/myAccountPage'
import categoryWomenPage from '../../Page objects/categoryWomenPage'
import orderControllerPage from'../../Page objects/orderControllerPage'

describe('Create user 1', () => {

    beforeEach(function () {  
        cy.fixture('user1').then((user1) => {
        this.user1 = user1
        })
    })   
 
// Testing user registeration
// If its a new user, it fills out all the info required from the fixture
// Else logs the msg that user is laready registered

// This project uses Page object model. For each web page there is a 
// corresponding Page Class. This Page class will identify the WebElements
// of that web page and also contains Page methods which perform operations
// on those WebElements.

// Different user (user1, user2, user3) will be registered to perform different
// tasks
    
    it('User 1 registration', function () {

        cy.visit("http://automationpractice.com/index.php")
        
        const hp= new homePage()
        hp.clickSignIn()

        const sip= new signInPage()
        sip.createAnAccount(this.user1.email)
        sip.submitCreate()

        if (cy.get('#create_account_error')){  
            cy.log("User already registered")
        }

        else{
            const cap = new createAccountPage()
            cap.fillGender(this.user1.gender)
            cap.fillFirstName(this.user1.firstName)
            cap.fillLastName(this.user1.lastName)
            cap.filcapasswd(this.user1.password)
            cap.fillNewsletter(this.user1.newsLetter)
            cap.fillSpecialOffer(this.user1.specialOffer)
            cap.fillDOB(this.user1.DOB)
            cap.fillCompany(this.user1.company)
            cap.fillAddress(this.user1.address)
            cap.fillCity(this.user1.city)  
            cap.fillZip(this.user1.zip)
            cap.fillCountry(this.user1.country)
            cap.fillState(this.user1.state)
            cap.filcaphone(this.user1.mobilePhone)
            cap.fillAlias(this.user1.addressAlias)
            cap.clickSubmit()
            }
        })


    it('new user 1 login to buying process', function () {

        const hp= new homePage()
        cy.log('wevfgedv')
        hp.clickHomeLogo()
        
        if(cy.get('.login')){

        hp.clickSignIn()

        const sip= new signInPage()

        sip.alreadyRegisteredEmail(this.user1.email)
        sip.alreadyRegisteredPass(this.user1.password)
        sip.submitLogIn()
        hp.goHomePage()
        hp.addAllPopularToCart()
        hp.proceedCheckout()

        const ocp = new orderControllerPage()
        ocp.orderDetails()
        ocp.addressDetails()   
        ocp.shippingDetails()   
        ocp.paymentOptions()   
        ocp.confirmOrder()

        const map = new myAccountPage()
        map.checkAccount()
        map.orderHistory()
        }

    else{
        hp.addAllPopularToCart()
        hp.proceedCheckout()

        const ocp = new orderControllerPage()
        ocp.orderDetails()
        ocp.addressDetails()   
        ocp.shippingDetails()   
        ocp.paymentOptions()   
        ocp.confirmOrder()

        const map = new myAccountPage()
        map.checkAccount()
        map.orderHistory()
    }
            
    })
})

