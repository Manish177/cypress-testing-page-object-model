///<reference types="cypress"/>

import createAccountPage from '../../Page objects/createAccountPage'
import homePage from '../../Page objects/homePage'
import signInPage from '../../Page objects/signInPage'
import myAccountPage from '../../Page objects/myAccountPage'

describe('Create user 2', () => {

    beforeEach(function () {  
        cy.fixture('user2').then((user2) => {
        this.user2 = user2
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

    it('User 2 registration', function () {
        cy.visit("http://automationpractice.com/index.php")
        
        const hp= new homePage()
        hp.clickSignIn()

        const sip= new signInPage()
        sip.createAnAccount(this.user2.email)
        sip.submitCreate()

        if (cy.get('#create_account_error')){  
            cy.log("User already registered")
        }

        else{

        const cap = new createAccountPage()
        cap.fillGender(this.user2.gender)
        cap.fillFirstName(this.user2.firstName)
        cap.fillLastName(this.user2.lastName)
        cap.filcapasswd(this.user2.password)
        cap.fillNewsletter(this.user2.newsLetter)
        cap.fillSpecialOffer(this.user2.specialOffer)
        cap.fillDOB(this.user2.DOB)
        cap.fillCompany(this.user2.company)
        cap.fillAddress(this.user2.address)
        cap.fillCity(this.user2.city)  
        cap.fillZip(this.user2.zip)
        cap.fillCountry(this.user2.country)
        cap.fillState(this.user2.state)
        cap.filcaphone(this.user2.mobilePhone)
        cap.fillAlias(this.user2.addressAlias)
        cap.clickSubmit()
        }
    })

    it('new user 2 login to buying process', function () {

        const hp= new homePage()
        hp.clickSignIn()
        const sip= new signInPage()

        sip.alreadyRegisteredEmail(this.user2.email)
        sip.alreadyRegisteredPass(this.user2.password)
        sip.submitLogIn()
        hp.goHomePage()
        hp.dressSection()

        const dp = new dressPage()
        dp.sizeMedium()
        dp.dressColor()
        dp.sortBy()
        dp.addToCart()
        dp.continueShopping()
        dp.addToCart1()
        dp.continueShopping()
        dp.chekcout()

        const ocp = new orderControllerPage()
        ocp.orderDetails()
        ocp.addressDetails()   
        ocp.shippingDetails()   
        ocp.paymentOptions()   
        ocp.confirmOrder()

        const map = new myAccountPage()
        map.checkAccount()
        map.orderHistory()
    })
})

