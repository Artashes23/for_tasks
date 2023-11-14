const cheerio = require('cheerio');

it('Should have h1 and "Lorem Ipsum" text', () => {
  cy.request({
    method: 'GET',
    url: 'https://www.lipsum.com/',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  }).as('resp').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.headers['content-type']).to.include('text/html');
    expect(response.body).include('h1')
    expect(response.body).include("Lorem Ipsum") 
    //const $ = cheerio.load(response.body);
    //expect($('h1:contains("Lorem Ipsum")')).to.exist;
  });
});

  