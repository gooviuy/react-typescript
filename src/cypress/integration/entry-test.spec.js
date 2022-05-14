describe("First menu", () => {
  it("Find general title", () => {
    cy.visit("/");
    cy.contains("New application");

    cy.get("form").then((inputValue) => {
      cy.wrap(inputValue).find('[placeholder="nickName"]').type("Sebas");
      cy.wrap(inputValue).find('[placeholder="age"]').type("23");
      cy.wrap(inputValue).find('[placeholder="description"]').type("Trainee");
      cy.wrap(inputValue)
        .find('[placeholder="icon"]')
        .type("https://i.pravatar.cc/150?u=sebas");
      cy.wrap(inputValue).get("button").click();
    });
  });
});
