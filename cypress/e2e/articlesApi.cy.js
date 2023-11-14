describe('API Test', () => {
  let age;
  let name;
  let secretIdentity;
  let powers = [];
  it('should make a GET request and handle JSON response', () => {
    cy.request('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json').then((response) => {
      expect(response.status).to.equal(200);
      age = response.body.members[0].age
      name = response.body.members[0].name
      secretIdentity = response.body.members[0].secretIdentity
      powers = powers.concat(response.body.members[0].powers)
      //console.log(age,name,secretIdentity,powers)
    });
  });
});
