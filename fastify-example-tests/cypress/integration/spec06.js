/// <reference types="cypress" />

it('shows the loading element then fruit from a fixture', () => {
  // intercept the GET call to /fruit with fixture "apple.json"
  // visit the site
  // confirm the "loading..." text is shown
  // confirm the "apple" text is shown
  // confirm there is no element with the text "loading..."

  cy.intercept('GET', '/fruit', { fixture: 'apple.json' }).as('fruit');
  cy.visit('/');
  cy.contains('#fruit', 'loading...').should('be.visible');
  cy.get('#fruit').should('have.text', 'apple');
  cy.contains('#fruit', 'loading...').should('not.exist');
});
