/// <reference types="cypress" />

it('shows the fruit returned from the test', () => {
  // stub the network call the application makes
  // to the server using "GET /fruit"
  // return "Kiwi" json object
  // visit the page
  // wait for the app to make the network call
  // to make sure the stub was used
  // confirm the application shows the fruit "Kiwi"

  const fruit = 'Kiwi';

  cy.intercept('GET', '/fruit', { fruit }).as('fruit');
  cy.visit('/');
  cy.wait('@fruit');
  cy.get('#fruit').should('have.text', fruit);
});
