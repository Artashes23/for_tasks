



const selectors = require("../../selectors")
const test_data = require("../../test_datas")
//require('dotenv').config()


describe('Test Successfull login',{
    retries: {
      runMode: 2,
      openMode: 2,
    }
  }, () => {
    
    it('Test1', () => {

        
        cy.visit(test_data.base_url)
        cy.get(selectors.username_field).type(test_data.username)
        cy.get(selectors.password_field).type(test_data.password)
        cy.get(selectors.login_btn).click()
        cy.url().should('include',test_data.url_after_login)
        cy.get(selectors.shop_cart).should('be.visible')
    })
})


describe('Test Error message',{
    retries: {
      runMode: 2,
      openMode: 2,
    }
  }, () => {
    
    
    it('Test2', () => {
        cy.visit(test_data.base_url)
        cy.get(selectors.username_field).type(test_data.invalid_username)
        cy.get(selectors.password_field).type(test_data.invalid_pswd)
        cy.get(selectors.login_btn).click()
        cy.get(selectors.login_err_msg_selector).should('have.text', test_data.login_err_msg);
    })
})

describe('Test Locked account',{
    retries: {
      runMode: 2,
      openMode: 2,
    }
  }, () => {

    
    it('Test3', () => {
        cy.visit(test_data.base_url)
        cy.get(selectors.username_field).type(test_data.locked_username)
        cy.get(selectors.password_field).type(test_data.password)
        cy.get(selectors.login_btn).click()
        cy.get(selectors.login_err_msg_selector).should('have.text', test_data.locked_account_err);
    })
})

