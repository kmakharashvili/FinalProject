// cypress/e2e/cart.spec.js
describe('Cart Functionality', () => {
  it('Adds product to cart and verifies it', () => {
    cy.visit('/');
    cy.get('ul > li:nth-child(5) > a').click();
    cy.contains('კალათში დამატება').click();
    cy.get('a.icart > p').click();

    cy.contains('SANICAT SUPERPLUS TR V/N 10L').should('exist');
    cy.url().should('include', '/cart');
  });
});
