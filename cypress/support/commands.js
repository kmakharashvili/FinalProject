Cypress.Commands.add('openLoginPopup', () => {
  cy.get('div.opn', { timeout: 10000 }).click({ force: true });
  cy.get('a.iprof > p').should('be.visible').click({ force: true });
});
