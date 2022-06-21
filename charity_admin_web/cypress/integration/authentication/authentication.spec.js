/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Sign In Actions", () => {
  const baseUrl = Cypress.config().baseUrl;
  const serverUrl = Cypress.env("serverUrl");
  let user;

  before(() => {
      //load login data
      cy.fixture("user").then(val => {
          user = val;
      });
  })

  before(() => {
    // eslint-disable-next-line no-undef
    // cy.fixture('user').then(function (testdata) {
    //   this.testdata = testdata
    // })
    cy.viewport(1600, 1000);
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000");
    cy.waitForReact();
  })

  // beforeEach(() => {
  //   // cy.visit("http://localhost:3000/signin");
  //   cy.waitForReact();
  // });

  it("should sign in", () => {
    cy.getById("username")
      .type(user["valid"].username, { delay: 100 })
      .should("have.value",user["valid"].username);

    cy.getById("password")
      .type(user["valid"].password, { delay: 100 })
      .should("have.value", user["valid"].password);
    // });

    // "should store the token in local storage"
    cy.intercept("POST","https://charity-manager-api.herokuapp.com/api/v1/admin/login").as('dataload');
    cy.getById("login_form").submit();
     cy.wait(5000);
    cy.wait("@dataload")
    cy.getLocalStorageItem("currentUser").as("curentUser");

    cy.get("@curentUser").should("exist");
    

    // should go to dashbaord page"
    cy.url().should("eq", "http://localhost:3000/dashboard");
    cy.wait(5000)
  });

  it("should sign out", () => {
    // "should remove the token from local storage"
  
    cy.getById("logout_button").click();
    cy.wait(3000);

    cy.url().should("eq", "http://localhost:3000/");
  });
  it("should error for an invalid password for existing user", () => {
    cy.getById("username")
      .type(user["invalid"].username, { delay: 100 })
      .should("have.value", user["invalid"].username);

    cy.getById("password")
      .type(user["invalid"].password, { delay: 100 })
      .should("have.value", user["invalid"].password);
    // });

    // "should submit"
    cy.getById("login_form").submit();
    cy.wait(5000);

    // "should display error message"
    //cy.getById("error-message").should("exist");
  });
});
