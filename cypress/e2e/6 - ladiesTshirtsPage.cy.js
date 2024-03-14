import { verifyLogo, verifyCartIcon, checkNavbarCategories } from "./navbar";

describe("Shop - Ladies T-Shirts Page", () => {
  beforeEach(() => {
    // Visit the Ladies T-Shirts page before each test
    cy.visit(Cypress.env("baseUrl"));
    // Click on the Ladies T-Shirts option on navbar
    cy.contains('a[href="/list/ladies_tshirt"]', "Ladies T-Shirts").click();
  });

  it("Should display the correct URL", () => {
    // Check if the current URL matches the expected base URL
    cy.url().should("eq", Cypress.env("baseUrl") + "list/ladies_tshirts");
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

  it("Should verify Ladies T-Shirts image ", () => {
    // Verify that the Ladies T-Shirts image exists
    cy.get('img#img[alt="Ladies T-Shirts"]').should("exist");
  });

  it("Should verify the header content - title and number of items", () => {
    // Verify if the header contains the correct text for h1 and span elements
    cy.get("header").within(() => {
      cy.contains("h1", "Ladies T-Shirts").should("exist");
      cy.contains("span", "(40 items)").should("exist");
    });
  });

  it("Should verify items belong to the Ladies T-Shirts Page ", () => {
    // Get all the items within the grid
    cy.get("ul.grid li").each(($item) => {
      // Get the image source and verify if it contains '/ladies_tshirts/'
      cy.get($item)
        .find("img")
        .should("have.attr", "src")
        .and("include", "/ladies_tshirts/");
      // Get the title and verify if it exists
      cy.get($item).find(".title").should("exist");
      // Get the price and verify if it exists
      cy.get($item).find(".price").should("exist");
    });
  });
});
