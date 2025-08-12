// cypress/e2e/search.spec.js
describe('Search Functionality', () => {
  it('Finds a product using search', () => {
    cy.visit('/');
    cy.get('input.srch2-inp').type('Bosch{enter}');
    cy.contains('Bosch Active 15 kg').should('exist');
    cy.url().should('include', 'Bosch');
  });
});
