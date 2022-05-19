/// <reference types="cypress" />

it('clearly shows the loading element', () => {
  // stub the network call the application makes
  // and delay returning the fruit by 2 seconds
  // visit the page
  // check if the loading element is visible
  // and then does not exist
  // confirm the displayed fruit

  const fruit = 'Kiwi';
  const fruitLocator = '#fruit';
  const loadingText = 'loading...';

  cy.intercept('GET', '/fruit', {
    body: { fruit }, delay: 2000
  });
  cy.visit('/');
  cy.get(fruitLocator).should('be.visible').and('have.text', loadingText);
  cy.get(fruitLocator).should('not.have.text', loadingText);
  cy.get(fruitLocator).should('have.text', fruit);
});
