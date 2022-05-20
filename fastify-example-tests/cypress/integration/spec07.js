/// <reference types="cypress" />

it('uses the fixture to stub and check the page', () => {
  // load the data from the fixture file "apple.json"
  // intercept the GET call to /fruit with fixture "apple.json"
  // visit the site
  // confirm the fruit from the fixture is shown on the page

  cy.fixture('apple.json').then(data => {
      cy.intercept('GET', '/fruit', { body: data }).as('fruit');
      cy.visit('/');
      cy.get('#fruit').should('have.text', data.fruit);
  });
});
