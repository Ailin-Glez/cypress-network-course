/// <reference types="cypress" />

it('does not call API until 60 seconds passed', () => {
  // spy on the GET /fruit call and pass a cy.spy function
  // as the request handler. The callback function does nothing
  // but we can use it later (via an alias) to check how
  // many times it was called = how many times the network
  // call happened
  // freeze the clock
  // visit the page
  // get the spy via its alias and confirm it was called once
  // then reset the history of calls
  // tick 59 seconds
  // confirm the spy was not executed = there were no network calls
  // tick 1 second
  // confirm the spy was executed = there was a network call

  cy.intercept('GET', '/fruit', cy.spy().as('getFruit'));
  cy.clock();
  cy.visit('/');
  cy.get('@getFruit').should('have.been.calledOnce').invoke('resetHistory');
  cy.tick(59000);
  cy.get('@getFruit').should('not.been.called');
  cy.tick(1000);
  cy.get('@getFruit').should('have.been.calledOnce')
});
