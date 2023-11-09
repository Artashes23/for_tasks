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

    // Set the viewport only once for all 'it' blocks
    cy.viewport(deviceName);
  });
    
    it('Should login successfully', () => {
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.username,testData.loginData.password)
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

/*describe('Check Invalid message', () => {
  viewports.forEach(viewport => {
    it('Should receive invalid credentials error message', () => {
        cy.viewport(viewport.width,viewport.height)
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.invalidUsername,testData.loginData.invalidPswd)
        cy.get(loginPage.elements.loginErrMessage).should('have.text', testData.loginData.logineErrMsg);
    })
  })
})

describe('Check Locked account', () => {
    viewports.forEach(viewport => {
    it('Should receive locked out user error message', () => {
        cy.viewport(viewport.width,viewport.height)
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.lockedUsername,testData.loginData.password)
        cy.get(loginPage.elements.loginErrMessage).should('have.text', testData.loginData.lockedAccountErr);
        
    })
  })
})
*/
