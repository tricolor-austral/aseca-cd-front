// cypress/e2e/deliverOrder.spec.js
describe('DeliverOrder Component', () => {
    beforeEach(() => {
        // Mount the component using a custom command or by navigating to the page where it is rendered
        cy.visit('http://localhost:3000');
    });

    it('delivers the order successfully', () => {

        // Enter the order ID
        cy.get('input').type('orderA');

        // Click the deliver button
        cy.get('button').contains('Deliver').click();

        cy.wait(3000); // Wait for the API call to complete

        // Check for the success message
        cy.get('.MuiAlert-root').should('contain', 'Order delivered successfully!');
    });

    it('handles order delivery error', () => {
        // Enter the order ID
        cy.get('input').type('orderA');

        // Click the deliver button
        cy.get('button').contains('Deliver').click();

        cy.wait(3000); // Wait for the API call to complete

        // Check for the error message
        cy.get('.MuiAlert-root').should('contain', 'Order already delivered');
    });

    it('handles not existing order', () => {
        // Enter the order ID
        cy.get('input').type('orderC');

        // Click the deliver button
        cy.get('button').contains('Deliver').click();

        cy.wait(500); // Wait for the API call to complete

        // Check for the error message
        cy.get('.MuiAlert-root').should('contain', 'Order not found');
    });
});
