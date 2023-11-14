describe('Stubbing', () => {
  it('Should be only one article and modified', () => {
    cy.intercept('GET', 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', {
      statusCode: 200,
      fixture: 'superheroes.json',
    }).as('getSuperheroes');
    cy.visit('https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html');
    cy.wait('@getSuperheroes').then((interception) => {
      expect(interception.response.body.members).to.have.lengthOf(1);
    });
  });
});

