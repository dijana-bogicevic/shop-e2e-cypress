import { verifyLogo, verifyCartIcon } from "./navbar";

describe("Shop - Cart Page", () => {
  beforeEach(() => {
    // Visit the Home page
    cy.visit(Cypress.env("baseUrl"));

    // Check if the Cart icon is visible and click on that icon
    cy.get(".cart-btn-container")
      .should("exist")
      .within(() => {
        cy.get("#icon").should("exist").click();
      });
  });

  it("Should display the correct URL", () => {
    // Check if the current URL matches the expected base URL
    cy.url().should("eq", Cypress.env("baseUrl") + "cart");
  });

  it("Should verify the presence of logo in the navigation bar", () => {
    verifyLogo();
  });

  it("Should verify the presence of cart icon in the navigation bar", () => {
    verifyCartIcon();
  });

  it("Should verify the info message on the Cart page - Your shopping cart is empty.", () => {
    // Check if the info message is visible
    cy.get(".subsection p.empty-cart")
      .should("be.visible")
      .and("contain", "Your shopping cart is empty.");
  });
});
