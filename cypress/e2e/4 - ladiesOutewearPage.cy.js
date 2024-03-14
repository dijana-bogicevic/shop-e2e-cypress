import { verifyLogo, verifyCartIcon, checkNavbarCategories } from "./navbar";

describe("Shop - Ladies Outerwear Page", () => {
  beforeEach(() => {
    // Visit the Home Page
    cy.visit(Cypress.env("baseUrl"));
    // Click on the Ladies Outewear option on navbar
    cy.contains('a[href="/list/ladies_outerwear"]', "Ladies Outerwear").click();
  });

  it("Should display the correct URL", () => {
    // Check if the current URL matches the expected base URL
    cy.url().should("eq", Cypress.env("baseUrl") + "list/ladies_outerwear");
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

  it("Should verify Ladies Outerwear image ", () => {
    // Verify that the Ladies Outerwear image exists
    cy.get('img#img[alt="Ladies Outerwear"]').should("exist");
  });

  it("Should verify the header content - title and number of items", () => {
    // Verify if the header contains the correct text for h1 and span elements
    cy.get("header").within(() => {
      cy.contains("h1", "Ladies Outerwear").should("exist");
      cy.contains("span", "(6 items)").should("exist");
    });
  });

  it("Should verify items belong to the Ladies Outerwear Page ", () => {
    // Get all the items within the grid
    cy.get("ul.grid li").each(($item) => {
      // Get the image source and verify if it contains '/ladies_outerwear/'
      cy.get($item)
        .find("img")
        .should("have.attr", "src")
        .and("include", "/ladies_outerwear/");
      // Get the title and verify if it exists
      cy.get($item).find(".title").should("exist");
      // Get the price and verify if it exists
      cy.get($item).find(".price").should("exist");
    });
  });
});
