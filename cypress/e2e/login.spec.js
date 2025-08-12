// cypress/e2e/login.spec.js
describe('User Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.openLoginPopup();
  });

  it('Logs in with valid credentials', () => {
    cy.fixture('existingUser').then((user) => {
      cy.get('input[name="login_email"]').type(user.email);
      cy.get('input[name="login_password"]').type(user.password);
      cy.get('button.form-button').click();

      cy.contains(user.name).should('exist');
      cy.url().should('eq', 'https://testzootopia.loremipsum.ge/ka');
    });
  });
});
