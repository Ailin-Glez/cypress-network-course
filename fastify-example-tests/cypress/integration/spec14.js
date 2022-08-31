/// <reference types="cypress" />

it('reloads the page until it shows Bananas', () => {
  // visit the page
  // if it shows the fruit "Bananas", stop
  // else
  //   wait for 1 second for clarity
  //   reload the page
  //   check again
  // Tip: use recursion

  function checkBananas() {
    cy.get('#fruit').should('not.have.text', 'loading...').invoke('text').then(fruit => {
      if (fruit === 'Bananas') {
        cy.log('It shows Bananas!');
      } else {
        cy.wait(1000);
        cy.reload().then(checkBananas);
      }
    });
  }

  cy.visit('/');
  checkBananas();

})
