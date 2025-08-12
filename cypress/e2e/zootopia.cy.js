import testData from '../fixtures/myData.json';

describe('Zootopia automation tests', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('ახალი მომხმარებლის რეგისტრაცია', () => {
        cy.contains('a', 'ავტორიზაცია').click();
        cy.contains(testData.registerText).should('be.visible');
        cy.contains(testData.registerBtn).click();

        cy.get('input[name="name"]').type(testData.fullName);
        cy.get('input[name="personal_id"]').type(testData.personalId);
        cy.get('input[name="email"]').type(testData.userEmail);
        cy.get('input[name="phone"]').type(testData.phone);
        cy.get('input[type="password"]').eq(0).type(testData.userPass);
        cy.get('input[type="password"]').eq(1).type(testData.userPass);

        cy.get('[for="profile2"]').click();
        cy.get('label[for="etx"]').click();
        cy.get('button[type="submit"]').click();

        cy.get('.iprof').should('be.visible');
    });

    it('სწორი მონაცემებით ავტორიზაცია', () => {
        cy.get('.menu-pop > .rprof').click();
        cy.get('input[type="email"]').type(testData.userEmail);
        cy.get('input[type="password"]').type(testData.userPass);
        cy.get('form').submit();
        cy.contains(testData.profileTitle).should('be.visible');
    });

    it('კალათაში პროდუქტის დამატება', () => {
        cy.login(testData.userEmail, testData.userPass);
        cy.contains('კატალოგი').click();
        cy.contains(testData.categoryName).click();
        cy.get('h2 a').contains(testData.productName).click();
        cy.get('.add-pro').click();
        cy.get('a[href*="cart"]').click();
        cy.contains(testData.productName).should('be.visible');
    });

    it('შეკვეთის გაფორმება', () => {
        cy.login(testData.userEmail, testData.userPass);
        cy.visit('/ka/cart');
        cy.get('.location').type(testData.address);
        cy.contains(testData.city).click({ force: true });
        cy.get('label[for="gadaxda1"]').click();
        cy.get('#code-input').type(testData.promoCode);
        cy.get('.cart-submit').click();
    });

    it('ენა ინგლისურად და პროდუქტის ძებნა', () => {
        cy.get('.lang a').contains('ENG').click();
        cy.contains(testData.productEngTitle).should('be.visible');
        cy.get('.popsrch input').type('Zolux');
        cy.get('.popsrch button[type="submit"]').click();
        cy.contains('Zolux').should('be.visible');
    });

});
