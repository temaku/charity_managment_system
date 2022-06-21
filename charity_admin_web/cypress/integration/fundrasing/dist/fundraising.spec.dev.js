"use strict";

/* eslint-disable testing-library/await-async-utils */

/* eslint-disable no-undef */
describe("fundrasing navlink", function () {
  var baseUrl = Cypress.config().baseUrl;
  var serverUrl = Cypress.env("serverUrl");
  before(function () {
    // eslint-disable-next-line no-undef
    cy.viewport(1600, 1000);
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000/login");
    cy.waitForReact();
  }); // beforeEach(() => {
  //   // cy.visit("http://localhost:3000/signin");
  //   cy.waitForReact();
  // });

  it("checks if the admin can add Fundrasing", function () {
    cy.getById("username").type("Adem", {
      delay: 100
    }).should("have.value", "Adem");
    cy.getById("password").type("pass1234", {
      delay: 100
    }).should("have.value", "pass1234"); // });
    // "should store the token in local storage"

    cy.getById("login_form").submit(); // cy.wait(5000);
    // should go to dashbaord page"

    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.visit("http://localhost:3000/fundraising"); //cy.get('a > .ant-btn > span').click();

    cy.get('a > .ant-btn > span').click();
    cy.get('#title').type('Help this person');
    cy.get("#description").type("this is description");
    cy.get('#amount').type('10000');
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
  });
  it("checks if the admin can not  add fundraisnig the field required is null", function () {
    cy.getById("logout_button").click(); //cy.wait(3000);

    cy.url().should("eq", "http://localhost:3000/");
    cy.getById("username").type("Adem", {
      delay: 100
    }).should("have.value", "Adem");
    cy.getById("password").type("pass1234", {
      delay: 100
    }).should("have.value", "pass1234"); // });
    // "should store the token in local storage"

    cy.getById("login_form").submit(); // cy.wait(5000);

    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.visit("http://localhost:3000/fundraising");
    cy.get('a > .ant-btn > span').click();
    cy.get('#title').type('Help this person');
    cy.get('#description').type('thisnewtask');
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
  });
});