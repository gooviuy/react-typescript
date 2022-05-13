describe("First menu", () => {
  it("Find general title", () => {
    cy.visit("/");
    cy.contains("Hello typescript");
  });
});
