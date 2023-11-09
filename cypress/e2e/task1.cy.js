import testData from "../fixtures/test_datas"
import loginPage  from "../pages/loginPage"

const viewports = [
  { width: 1200, height: 800 },  
  { width: 375, height: 667 }
];

describe('Check Successfull login', () => {
    viewports.forEach(viewport => {
      
      it('Should login successfully', () => {
        cy.viewport(viewport.width,viewport.height)
        cy.visit(testData.mainData.baseUrl)
        loginPage.login(testData.loginData.username,testData.loginData.password)
        cy.url().should('include',testData.mainData.urlAfterLogin)
        cy.get(loginPage.elements.shopCart).should('be.visible')
    })
    })
    
})

describe('Check Invalid message', () => {
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

