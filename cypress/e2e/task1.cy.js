import TestData from "../fixtures/test_datas"
import LoginPage  from "../pages/loginPage"

let deviceName = '';

describe('Check Successfull login', () => { 
  const username = Cypress.env('USERNAMEENV')
  const password = Cypress.env('PASSWORDENV')
  const userAgent = Cypress.env('USER_AGENT');
  beforeEach(() => {
    /*if (Cypress.env('deviceName') === 'mobile') {
      deviceName = 'iphone-8';
    } else if (Cypress.env('deviceName') === 'desktop') {
      deviceName = 'macbook-15';
    }*/
    cy.viewport(userAgent);
    cy.visit(TestData.mainData.baseUrl)
  });
    
    it('Should login successfully', () => {
        LoginPage.login(username,password)
        cy.url().should('include',TestData.mainData.urlAfterLogin)
        cy.get(LoginPage.shopCart).should('be.visible')
    })
    it('Should receive invalid credentials error message', () => {
        LoginPage.login(TestData.loginData.invalidUsername,TestData.loginData.invalidPswd)
        cy.get(LoginPage.loginErrMessage).should('have.text', TestData.loginData.logineErrMsg);
  })
    it('Should receive locked out user error message', () => {
        LoginPage.login(TestData.loginData.lockedUsername,TestData.loginData.password)
        cy.get(LoginPage.loginErrMessage).should('have.text', TestData.loginData.lockedAccountErr);
})
    
})

