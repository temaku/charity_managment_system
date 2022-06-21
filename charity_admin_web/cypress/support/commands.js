/* eslint-disable no-undef */
Cypress.Commands.add("login", (email, password) => {
    cy.visit("http://localhost:3000/");
    cy.waitForReact();
  
    cy.getReactById("FormItem", "username").type(username, { delay: 100 });
    cy.getReactById("FormItem", "password").type(password, { delay: 100 });
    cy.getById("login-form").submit();
    cy.wait(5000);
    cy.getLocalStorageItem("currentUser").as("currentUser");
    cy.get("@currentUser").should("exist");
})
    Cypress.Commands.add("logout", (email, password) => {
        // This is a child command
        cy.request("POST", "https://zema-store.herokuapp.com/api/logout", {
          user: {
            email,
            password,
          },
        }).then((res) => {
          localStorage.setItem("token", res.body.token);
      
          cy.visit("http://localhost:3000");
        });
      });
      Cypress.Commands.add("getLocalStorageItem", (token) => {
        return localStorage.getItem(token);
      });
      
      Cypress.Commands.add("getReactById", (component, name) => {
        return cy.react(component, { props: { "data-cy": name } });
      });
      
      Cypress.Commands.add("getById", { prevSubject: false }, (id) => {
        return cy.get(`[data-cy="${id}"]`);
      });
      
      Cypress.Commands.add("getByClass", { prevSubject: false }, (className) => {
        return cy.get(`[data-test-class="${className}"]`);
      });
      
      Cypress.Commands.add("getByText", { prevSubject: false }, (text) => {
        return cy.get(`[data-test-text="${text}"]`);
      });
      

  
//   Cypress.Commands.add("logout", (email, password) => {
//     // This is a child command
//     cy.request("POST", "https://zema-store.herokuapp.com/api/logout", {
//       user: {
//         email,
//         password,
//       },
//     }).then((res) => {
//       localStorage.setItem("token", res.body.token);
  
//       cy.visit("http://localhost:3000");
//     });
//   });
//   Cypress.Commands.add("getLocalStorageItem", (token) => {
//     return localStorage.getItem(token);
//   });
  
//   Cypress.Commands.add("getReactById", (component, name) => {
//     return cy.react(component, { props: { "data-test-id": name } });
//   });
  
//   Cypress.Commands.add("getById", { prevSubject: false }, (id) => {
//     return cy.get(`[data-test-id="${id}"]`);
//   });
  
//   Cypress.Commands.add("getByClass", { prevSubject: false }, (className) => {
//     return cy.get(`[data-test-class="${className}"]`);
//   });
  
//   Cypress.Commands.add("getByText", { prevSubject: false }, (text) => {
//     return cy.get(`[data-test-text="${text}"]`);
//   });
  
