import { verifyLogo, verifyCartIcon, checkNavbarCategories } from "./navbar";

describe("Shop - Men's Outerwear Page", () => {
  beforeEach(() => {
    // Visit the Home Page
    cy.visit(Cypress.env("baseUrl"));
    // Click on the Men's Outewear option on navbar
    cy.contains('a[href="/list/mens_outerwear"]', "Men's Outerwear").click();
  });

  it("Should display the correct URL", () => {
    // Check if the current URL matches the expected base URL
    cy.url().should("eq", Cypress.env("baseUrl") + "list/mens_outerwear");
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

  it("Should verify Men's Outerwear image ", () => {
    // Verify that the Men's Outerwear image exists
    cy.get('img#img[alt="Men\'s Outerwear"]').should("exist");
  });

  it("Should verify the header content - title and number of items", () => {
    // Verify if the header contains the correct text for h1 and span elements
    cy.get("header").within(() => {
      cy.contains("h1", "Men's Outerwear").should("exist");
      cy.contains("span", "(16 items)").should("exist");
    });
  });

  it("Should verify items belong to the Men's Outerwear Page ", () => {
    // Get all the items within the grid
    cy.get("ul.grid li").each(($item) => {
      // Get the image source and verify if it contains '/mens_outerwear/'
      cy.get($item)
        .find("img")
        .should("have.attr", "src")
        .and("include", "/mens_outerwear/");
      // Get the title and verify if it exists
      cy.get($item).find(".title").should("exist");
      // Get the price and verify if it exists
      cy.get($item).find(".price").should("exist");
    });
  });
});
