/// <reference types="Cypress" />

it('shows some fruit', () => {
  // visit the page
  // get the fruit element by ID
  // and confirm it does not have the loading text
  // and confirm it has the fruit name which is a word
  // that starts with a capital letter
  // followed by all lowercase letters

  cy.visit('/');
  cy.get('#fruit').should('not.have.text', 'loading...').invoke('text').then(fruit => {
    const allCaps = fruit.toUpperCase();
    const otherCharacters = fruit.slice(1);
    expect(fruit.split(' '), 'Fruit is a single word').to.have.length(1);
    expect(allCaps[0], 'Fruit starts with a capital letter').to.be.equal(fruit[0]);
    expect(otherCharacters.toLowerCase(), 'Remaining characters are lowercase').to.be.equal(otherCharacters);
  });
});
