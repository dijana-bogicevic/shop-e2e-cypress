import { verifyLogo, verifyCartIcon } from "./navbar";

describe("Shop - Checkout Page", () => {
  beforeEach(() => {
    // Visit the Home page
    cy.visit(Cypress.env("baseUrl"));

    // Click on the Men's Outewear option on navbar
    cy.contains('a[href="/list/mens_outerwear"]', "Men's Outerwear").click();

    // Click on the specific element in grid
    cy.get("ul.grid li a").contains("Men's Tech Shell Full-Zip").click();

    //Click on the ADD TO CART
    cy.contains(
      'button[aria-label="Add this item to cart"]',
      "Add to Cart"
    ).click();

    // Check if the cart modal is visible
    cy.get("shop-cart-modal.opened").should("be.visible");

    // Check if VIEW CART button is visible
    cy.contains("a", "View cart").should("be.visible");

    // Check if CHECKOUT button is visible
    cy.contains("a", "Checkout").should("be.visible");

    // Click on the CHECKOUT button
    cy.contains("button", "Checkout").click();
  });

  it("Should display the correct URL", () => {
    // Check if the current URL matches the expected base URL
    cy.url().should("eq", Cypress.env("baseUrl") + "checkout");
  });

  it("Should verify the presence of logo in the navigation bar", () => {
    verifyLogo();
  });

  it("Should verify the presence of cart icon in the navigation bar", () => {
    verifyCartIcon();
  });

  it("Should verify the header content - title and text", () => {
    // Verify if the header contains the correct text for h1 and span elements
    cy.get("header").within(() => {
      cy.contains("h1", "Checkout").should("exist");
      cy.contains(
        "span",
        "Shop is a demo app - form data will not be sent"
      ).should("exist");
    });
  });

  it("Should verify the display of all sections - Account Information, Shipping Address...", () => {
    // Add assertions for verification
  });

  it("Should verify the display of Billing Address section after clicking on the 'Use different billing address' checkbox", () => {
    // Add assertions for verification
  });

  it("Should verify error message after clicking on the PLACE ORDER button", () => {
    cy.contains('input[type="button"][value="Place Order"]').click();

    // Check error message for Email
    cy.get('shop-md-decorator[error-message="Invalid Email"]').should(
      "be.visible"
    );

    // Check error message for Phone
    cy.get('shop-md-decorator[error-message="Invalid Phone Number"]').should(
      "be.visible"
    );

    // Check error message for Adress
    cy.get('shop-md-decorator[error-message="Invalid Address"]').should(
      "be.visible"
    );

    // It is necessary to add all checks for error messages
  });

  it("Should verify error message after entering invalid email and clicking on the PLACE ORDER button", () => {
    // Clear Email field and Enter "test" value
    cy.get("#accountEmail").clear().type("test");

    //Click on the PLACE ORDER Button
    cy.contains('input[type="button"][value="Place Order"]').click();

    // Check error message for Email
    cy.get('shop-md-decorator[error-message="Invalid Email"]').should(
      "be.visible"
    );

    // It is necessary to add all checks for error messages after entering invalid value
  });
});
F