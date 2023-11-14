describe('API Test', () => {
  let article;
  let age;
  let name;
  let secretIdentity;
  let powers = [];
  it('should make a GET request and handle JSON response', () => {
    cy.request('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json').then((response) => {
      expect(response.status).to.equal(200);
      article = response.body.members[0]
      age = article.age
      name = article.name
      secretIdentity = article.secretIdentity
      powers = powers.concat(article.powers)
      //console.log(age,name,secretIdentity,powers)
    });
  });
});
