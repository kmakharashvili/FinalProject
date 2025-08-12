// cypress/e2e/register.spec.js
describe('User Registration', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.openLoginPopup();
    cy.contains('გაიარეთ რეგისტრაცია').click();
  });

  it('Successfully registers a new user', () => {
    cy.fixture('newUser').then((user) => {
      cy.get('input[name="first_name"]').type(user.name);
      cy.get('input[name="reg_email"]').type(user.email);
      cy.get('input[name="personal_id"]').type(user.personalId);
      cy.get('input[name="phone"]').type(user.phone);
      cy.get('input[name="reg_password"]').type(user.password);
      cy.get('input[name="reg_password_confirmation"]').type(user.password);
      cy.get('button.regsub').click();

      cy.url().should('not.include', 'register');
      cy.contains(user.name).should('exist');
    });
  });
});
