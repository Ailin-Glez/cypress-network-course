/// <reference types="cypress" />

it('shows the fruit returned by the server', () => {
  // spy on the network call the application makes
  // visit the page
  // wait for the app to make the network call
  // (there might be a delay)
  // from the network call, get the response body
  // and the name of the fruit and confirm
  // the fruit is shown on the page

  cy.intercept('GET', '/fruit').as('fruit');
  cy.visit('/');
  cy.wait('@fruit').its('response.body.fruit').then(returnedFruit => {
    cy.get('#fruit').should('not.have.text', 'loading...').invoke('text').then(displayedFruit => {
      expect(returnedFruit, 'Returned fruit from server').to.be.equal(displayedFruit);
    });
  });
});
