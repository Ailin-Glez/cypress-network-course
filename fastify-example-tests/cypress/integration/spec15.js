/// <reference types="cypress" />

it('finds all fruits', () => {
  // visit the page
  // keep getting the fruit from the page
  // and storing it in a Set object
  // and reloading the page
  // until we see the fruit we have already added
  // print the collected list of fruits
  // check its length against the expected value

  const fruits = new Set();

  function getFruits() {
    cy.get('#fruit').should('not.have.text', 'loading...').invoke('text').then(fruit => {
      if (fruits.has(fruit)) {
        cy.log('All fruits!');
      } else {
        fruits.add(fruit);
        cy.wait(500);
        cy.reload().then(getFruits);
      }
    });
  }

  cy.visit('/');
  getFruits();
});
