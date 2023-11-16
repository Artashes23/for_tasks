class LoginPage {
    
        usernameField = 'input#user-name'
        passwordField = 'input#password'
        loginBtn = 'input#login-button'
        loginErrMessage = 'h3[data-test=error]'
        shopCart = 'div#shopping_cart_container'

    login(username,password) {
        cy.get(this.usernameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginBtn).click()
    }
}

module.exports = new LoginPage();