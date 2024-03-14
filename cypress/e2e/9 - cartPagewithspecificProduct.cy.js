import { verifyLogo, verifyCartIcon } from "./navbar";

describe("Shop - Your Cart Page - specific product", () => {
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

    // Click on the VIEW CART button
    cy.contains("button", "View cart").click();
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
  it("Should verify the header content - title and text", () => {
    // Verify if the header contains the correct text for h1 and span elements
    cy.get("header").within(() => {
      cy.contains("h1", "Your Cart").should("exist");
      cy.contains("span", "(1 item)").should("exist");
    });
  });
  it("Should verify if the shopping cart icon displays '1' item", () => {
    cy.get('paper-icon-button[icon="shopping-cart"]').should(
      "have.attr",
      "aria-label",
      "Shopping cart: 1 item"
    );
  });

  it("Should verify the presence of the product details", () => {
    // Check product title
    cy.get('a[title="Men\'s Tech Shell Full-Zip"]').should("exist");

    // Here it's possible to select values from 1 to 12, while on the product page it's from 1 to 5
    // Check quantity
    cy.get("select#quantitySelect").should("have.value", "1");

    // Check size
    cy.get(".size").should("exist").and("contain", "Size: M");

    // Check price
    cy.get(".price").should("exist").and("contain", "$50.20");
  });
});
