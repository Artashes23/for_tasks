import testData from "../fixtures/test_datas"
import loginPage  from "../pages/loginPage"

let deviceName = '';

describe('Check Successfull login', () => { 
   
  beforeEach(() => {
    if (Cypress.env('deviceName') === 'mobile') {
      deviceName = 'iphone-8';
    } else if (Cypress.env('deviceName') === 'desktop') {
      deviceName = 'macbook-15';
    }
    cy.viewport(deviceName);
  });
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')
    
    it('Should login successfully', () => {
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(username,password)
        cy.url().should('include',testData.mainData.urlAfterLogin)
        cy.get(loginPage.elements.shopCart).should('be.visible')
    })
    it('Should receive invalid credentials error message', () => {
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.invalidUsername,testData.loginData.invalidPswd)
        cy.get(loginPage.elements.loginErrMessage).should('have.text', testData.loginData.logineErrMsg);
  })
    it('Should receive locked out user error message', () => {
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.lockedUsername,testData.loginData.password)
        cy.get(loginPage.elements.loginErrMessage).should('have.text', testData.loginData.lockedAccountErr);
    
})
    
})