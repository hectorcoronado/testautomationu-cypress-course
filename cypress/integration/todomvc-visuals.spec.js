/// <reference  types='cypress'/>

import * as todoPage from "../page-objects/todo-page";

describe("visual validation", () => {
  before(() => {
    todoPage.navigate();

    // uncomment following line to trigger test failure
    // cy.visit("http://todomvc-app-for-testing.surge.sh/?different-title-color");
  });

  beforeEach(() => {
    cy.eyesOpen({
      appName: "tau todomvc",
      batchName: "tau todomvc",
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it("should look good", () => {
    cy.eyesCheckWindow("empty todo list");

    todoPage.addTodo("clean room");
    todoPage.addTodo("learn js");
    cy.eyesCheckWindow("two todos");

    todoPage.toggleTodo(0);
    cy.eyesCheckWindow("mark as completed");
  });
});
