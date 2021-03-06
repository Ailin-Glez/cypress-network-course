/// <reference types="cypress" />
// import the fixture JSON data from the file "../fixtures/apple.json"
import { fruit } from '../fixtures/apple.json';

it('imports the fixture from JSON file', () => {
  // print the imported fruit to the Command Log
  // intercept the GET call to /fruit with fixture "apple.json"
  // visit the site
  // confirm the fruit from the fixture is shown on the page

  cy.log(fruit);
  cy.intercept('GET', '/fruit', { fixture: 'apple.json' }).as('fruit');
  cy.visit('/');
  cy.contains('#fruit', fruit).should('be.visible');
});
