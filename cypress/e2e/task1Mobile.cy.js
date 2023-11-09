import testData from "../fixtures/test_datas"
import loginPage  from "../pages/loginPage"

describe('Check Successfull login', () => {
    beforeEach(() =>{
        cy.viewport('iphone-8')
    })
    it('Should login successfully', () => {
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.username,testData.loginData.password)
        cy.url().should('include',testData.mainData.urlAfterLogin)
        cy.get(loginPage.elements.shopCart).should('be.visible')
    })
})

describe('Check Invalid message', () => {
    beforeEach(() =>{
        cy.viewport('iphone-8')
    })
    it('Should receive invalid credentials error message', () => {
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.invalidUsername,testData.loginData.invalidPswd)
        cy.get(loginPage.elements.loginErrMessage).should('have.text', testData.loginData.logineErrMsg);
    })
})

describe('Check Locked account', () => {
    beforeEach(() =>{
        cy.viewport('iphone-8')
    })
    it('Should receive locked out user error message', () => {
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.lockedUsername,testData.loginData.password)
        cy.get(loginPage.elements.loginErrMessage).should('have.text', testData.loginData.lockedAccountErr);
    })
})
