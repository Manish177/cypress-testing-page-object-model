///<reference types="cypress"/>

import createAccountPage from '../../Page objects/createAccountPage'
import homePage from '../../Page objects/homePage'
import signInPage from '../../Page objects/signInPage'
import myAccountPage from '../../Page objects/myAccountPage'

describe('Create user 3', () => {

    beforeEach(function () {  
        cy.fixture('user3').then((user3) => {
        this.user3 = user3
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
 
    it('User 3 registration', function () {
        cy.visit("http://automationpractice.com/index.php")
        
        const hp= new homePage()
        hp.clickSignIn()

        const sip= new signInPage()
        sip.createAnAccount(this.user3.email)
        sip.submitCreate()

        if (cy.get('#create_account_error')){  
            cy.log("User already registered")
        }
        else{
        const cap = new createAccountPage()
        cap.fillGender(this.user3.gender)
        cap.fillFirstName(this.user3.firstName)
        cap.fillLastName(this.user3.lastName)
        cap.filcapasswd(this.user3.password)
        cap.fillNewsletter(this.user3.newsLetter)
        cap.fillSpecialOffer(this.user3.specialOffer)
        cap.fillDOB(this.user3.DOB)
        cap.fillCompany(this.user3.company)
        cap.fillAddress(this.user3.address)
        cap.fillCity(this.user3.city)  
        cap.fillZip(this.user3.zip)
        cap.fillCountry(this.user3.country)
        cap.fillState(this.user3.state)
        cap.filcaphone(this.user3.mobilePhone)
        cap.fillAlias(this.user3.addressAlias)
        cap.clickSubmit()
        }
    })

    it('new user 3 login to buying process', function () {

        const hp= new homePage()
        hp.clickSignIn()
        const sip= new signInPage()

        sip.alreadyRegisteredEmail(this.user3.email)
        sip.alreadyRegisteredPass(this.user3.password)
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
        map.contact()

        const cp = new contactPage()
        cp.subject()
        cp.orderNumber()
        cp.typeMessage()
        cp.sendMessage()

    })
})

