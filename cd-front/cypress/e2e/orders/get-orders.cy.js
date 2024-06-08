// cypress/e2e/getOrderButton.spec.js
describe('GetOrderButton Component', () => {
    beforeEach(() => {
        // Mount the component using the cypress-react-selector
        cy.visit('http://localhost:3000/');
    });

    it('fetches and displays order IDs, and allows copying to clipboard', () => {
        // Click the "Get IDs" button to fetch orders
        cy.get('button').contains('Get IDs').click();
        cy.wait(500); // Wait for the API call to complete

        // Check that the order IDs are displayed
        cy.get('li').should('have.length', 2);
        cy.get('li').eq(1).contains('Order ID: orderA');
        cy.get('li').eq(0).contains('Order ID: orderB');

        // Copy the first order ID to the clipboard
        cy.get('li').first().find('button').click();

        // Verify the tooltip changes to "Copied!"
        cy.get('[aria-label="copy"]').first().trigger('mouseover');
        cy.contains('Copied!').should('be.visible');
    });
});
