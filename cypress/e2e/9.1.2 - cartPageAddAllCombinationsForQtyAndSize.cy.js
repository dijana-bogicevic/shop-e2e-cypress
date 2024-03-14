function addAllCombinationsForQtyAndSize() {
    // Define all possible values for the size
    const size = [
      "XS",
      "S",
      "M",
      "L",
      "XL",
    ];
    size.forEach((item) => {
      cy.get("#content #sizeSelect").should("contain", item);
    });
  
    // Define all possible values for the quantity
    const quantity = ["1", "2", "3", "4", "5"];
    quantity.forEach((qty) => {
      cy.get("select#type").should("contain", qty);
    });
  
    // Loop through each combination of Business Unit and Type
    businessUnits.forEach((item) => {
      types.forEach((qty) => {
        // Select specific Business Unit and Type
        cy.get("select#businessId").select(item);
        cy.get("select#type").select(qty);
      });
    });
  }