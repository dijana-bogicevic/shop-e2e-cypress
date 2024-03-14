// Test for verifying the logo in the navigation bar
export function verifyLogo() {
  cy.get(".logo").should("exist");
}

// Test for verifying the shopping cart icon in the navigation bar
export function verifyCartIcon() {
  cy.get('.cart-btn-container paper-icon-button[icon="shopping-cart"]').should(
    "exist"
  );
}

// Test for verifying the navbar with specific categories
export function checkNavbarCategories() {
  // Check if the shop-tabs element is visible
  cy.get("shop-tabs").should("be.visible");

  // Check if the specific categories are present in the navbar
  cy.get("shop-tabs shop-tab").should(($tabs) => {
    expect($tabs).to.have.length(4);
    expect($tabs.eq(0)).to.contain("Men's Outerwear");
    expect($tabs.eq(1)).to.contain("Ladies Outerwear");
    expect($tabs.eq(2)).to.contain("Men's T-Shirts");
    expect($tabs.eq(3)).to.contain("Ladies T-Shirts");
  });
}
