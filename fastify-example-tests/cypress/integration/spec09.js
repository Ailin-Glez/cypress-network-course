/// <reference types="cypress" />

it('returns different fruits', () => {
  // stub the /fruit endpoint to return "apple" on the first visit
  // stub the /fruit endpoint to return "grapes" on the second visit
  // visit the site
  // confirm it shows "apple"
  // reload the site
  // confirm it shows "grapes"

  cy.intercept({ method: 'GET', url: '/fruit', times: 1 }, { fruit: 'grapes' });
  cy.intercept({ method: 'GET', url: '/fruit', times: 1 }, { fruit: 'apple' });
  cy.visit('/');
  cy.get('#fruit').should('have.text', 'apple');
  cy.reload();
  cy.get('#fruit').should('have.text', 'grapes');
});
