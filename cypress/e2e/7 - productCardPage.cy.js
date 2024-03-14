import { verifyLogo, verifyCartIcon, checkNavbarCategories } from "./navbar";

describe("Shop - Product Card Page", () => {
  beforeEach(() => {
    // Visit the Home page
    cy.visit(Cypress.env("baseUrl"));

    // Click on the Men's Outewear option on navbar
    cy.contains('a[href="/list/mens_outerwear"]', "Men's Outerwear").click();

    // Click on the specific element in grid
    cy.get("ul.grid li a").contains("Men's Tech Shell Full-Zip").click();
  });

  it("Should display the correct URL", () => {
    // Check if the current URL matches the expected base URL
    cy.url().should("eq", Cypress.env("baseUrl") + "list/mens_outerwear/Men+s+Tech+Shell+Full-Zip");
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

  it("Verifies the visibility of the image", () => {
    cy.get('img#img[alt="Men\'s Tech Shell Full-Zip"]').should("be.visible");
  });

  it("Should verify the title", () => {
    cy.get("#content h1").should("contain", "Men's Tech Shell Full-Zip");
  });

  it("Should verify the price", () => {
    cy.get("#content .price").should("contain", "$50.20");
  });

  it("Should verify the size options", () => {
    cy.get("#content #sizeSelect").should("exist");
    cy.get("#content #sizeSelect")
      .should("contain", "XS")
      .should("contain", "S")
      .should("contain", "M")
      .should("contain", "L")
      .should("contain", "XL");
  });

  it("Should verify selectability of the size options", () => {
    cy.get("#content #sizeSelect").should("exist");
    cy.get("#content #sizeSelect")
      .select("contain", "XS")
      .select("contain", "S")
      .select("contain", "M")
      .select("contain", "L")
      .select("contain", "XL");
  });

  it("Should verify the quantity options", () => {
    cy.get("#content #quantitySelect").should("exist");
    cy.get("#content #quantitySelect")
      .should("contain", "1")
      .should("contain", "2")
      .should("contain", "3")
      .should("contain", "4")
      .should("contain", "5");
  });

  it("Should verify selectability of the quantity options", () => {
    cy.get("#content #quantitySelect").should("exist");
    cy.get("#content #quantitySelect")
      .select("contain", "1")
      .select("contain", "2")
      .select("contain", "3")
      .select("contain", "4")
      .select("contain", "5");
  });

  it("Should verify the description", () => {
    cy.get("#content .description").should("exist");
  });

  it("Should verify the 'Add to Cart' button", () => {
    cy.get("#content shop-button button").should("exist");
    cy.get("#content shop-button button").should(
      "have.attr",
      "aria-label",
      "Add this item to cart"
    );
  });
});
