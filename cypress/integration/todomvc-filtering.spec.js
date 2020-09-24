/// <reference types="cypress" />

describe("filtering", () => {
  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Clean room{enter}");
    cy.get(".new-todo").type("learn javascript{enter}");
    cy.get(".new-todo").type("use cypress{enter}");

    cy.get(".todo-list li:nth-child(2) .toggle").click();
  });

  it('should filter "Active" todos', () => {
    // click on Active button:
    cy.contains("Active").click();

    // check that after clicking on 'learn javascript',
    // there should only be two elements in the list
    cy.get(".todo-list li").should("have.length", 2);
  });

  it('should filter "Completed" todos', () => {
    // click on Completed button:
    cy.contains("Completed").click();

    // check that after clicking on 'learn javascript',
    // there should only be two elements in the list
    cy.get(".todo-list li").should("have.length", 1);
  });

  it('should filter "All" todos', () => {
    // click on All button:
    cy.contains("All").click();

    // check that after clicking on 'learn javascript',
    // there should only be two elements in the list
    cy.get(".todo-list li").should("have.length", 3);
  });
});
