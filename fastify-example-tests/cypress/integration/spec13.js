/// <reference types="cypress" />

it('fetches 10 fruits from the server', () => {
  // spy on the GET /fruit network call
  // and store each received fruit in a list
  // freeze the clock before visiting the page
  // confirm there is one fruit in the list after loading the page
  // advance the clock by 9 minutes
  // and confirm the list of fruits has 10 items
  // and it includes "Oranges"

  const fruitList = [];

  cy.intercept('GET', '/fruit', (req) => {
    req.continue((res) => {
      fruitList.push(res.body.fruit);
    });
  }).as('fruit');
  cy.clock();
  cy.visit('/');
  cy.wrap(fruitList).should('have.length', 1);
  cy.tick(540000);
  cy.wrap(fruitList).should('have.length', 10).and('include', 'Oranges');

});