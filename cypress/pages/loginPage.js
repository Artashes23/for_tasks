class loginPage {
    elements = {
        usernameField: () => cy.get('input[id = "user-name"]'),
        passwordField: () => cy.get('input[id = "password"]'),
        loginBtn: () => cy.get('input[id = "login-button"]'),
        loginErrMessage: () => cy.get('h3[data-test=error]'),
        shopCart: () => cy.get('div#shopping_cart_container')
    }

    login(username,password) {
        this.elements.usernameField().type(username)
        this.elements.passwordField().type(password)
        this.elements.loginBtn().click()
    }
}

module.exports = new loginPage();