describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Welcome to Angular!');
    cy.contains('Ready to create an app?');
  });
});
