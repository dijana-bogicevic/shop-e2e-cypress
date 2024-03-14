import { verifyLogo, verifyCartIcon, checkNavbarCategories } from "./navbar";

describe("Shop - Home Page", () => {
  beforeEach(() => {
    // Visit the home Page
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Should display the correct URL", () => {
    // Check if the current URL matches the expected base URL
    cy.url().should("eq", Cypress.env("baseUrl"));
  });

  it("Should verify the presence of logo in the navigation bar", () => {
    verifyLogo();
  });

  it("Should verify the presence of cart icon in the navigation bar", () => {
    verifyCartIcon();
  });

  it("Should verify the presence of navbar with specific categories", () => {
    checkNavbarCategories();
  });

  it("Each item should have an image, title - h2, and a 'SHOP NOW' option", () => {
    // Check each item on the page
    cy.get(".item").each(($item) => {
      // Check if the item contains an image
      cy.get($item).find(".image-link shop-image").should("be.visible");

      // Check if the item contains an h2 element
      cy.get($item).find("h2").should("be.visible");

      // Check if the item contains a "SHOP NOW" option
      cy.get($item)
        .find("shop-button a")
        .should("be.visible")
        .and("have.attr", "aria-label");
    });
  });

  it("First item - Men's Outewear should have correct image name, title, and 'SHOP NOW' link", () => {
    // Check if the first item contains an image with the correct name
    cy.get(".item:first-child(1) .image-link shop-image")
      .should("have.attr", "style")
      .and("include", "mens_outerwear.jpg");

    // Check if the first item contains the correct title (h2)
    cy.get(".item:first-child(1) h2").should("contain", "Men's Outerwear");

    // Check if the first item contains the "SHOP NOW" link
    cy.get(".item:first-child(1) shop-button a")
      .should("be.visible")
      .and("have.attr", "aria-label", "Men's Outerwear Shop Now");
  });

  it("Second item - Ladies Outewear should have correct image name, title, and 'SHOP NOW' link", () => {
    // Check if the second item contains an image with the correct name
    cy.get(".item:nth-child(2) .image-link shop-image")
      .should("have.attr", "style")
      .and("include", "ladies_outerwear.jpg");

    // Check if the second item contains the correct title (h2)
    cy.get(".item:nth-child(2) h2").should("contain", "Ladies Outerwear");

    // Check if the second item contains the "SHOP NOW" link
    cy.get(".item:nth-child(2) shop-button a")
      .should("be.visible")
      .and("have.attr", "aria-label", "Ladies Outerwear Shop Now");
  });

  it("Third item - Men's T-Shirts should have correct image name, title, and 'SHOP NOW' link", () => {
    // Check if the third item contains an image with the correct name
    cy.get(".item:nth-child(3) .image-link shop-image")
      .should("have.attr", "style")
      .and("include", "mens_tshirts.jpg");

    // Check if the third item contains the correct title (h2)
    cy.get(".item:nth-child(3) h2").should("contain", "Men's T-Shirts");

    // Check if the third item contains the "SHOP NOW" link
    cy.get(".item:nth-child(3) shop-button a")
      .should("be.visible")
      .and("have.attr", "aria-label", "Men's T-Shirts Shop Now");
  });

  it("Fourth item - Ladies T-Shirts should have correct image name, title, and 'SHOP NOW' link", () => {
    // Check if the fourth item contains an image with the correct name
    cy.get(".item:nth-child(4) .image-link shop-image")
      .should("have.attr", "style")
      .and("include", "ladies_tshirts.jpg");

    // Check if the fourth item contains the correct title (h2)
    cy.get(".item:nth-child(4) h2").should("contain", "Ladies T-Shirts");

    // Check if the fourth item contains the "SHOP NOW" link
    cy.get(".item:nth-child(4) shop-button a")
      .should("be.visible")
      .and("have.attr", "aria-label", "Ladies T-Shirts Shop Now");
  });
});
