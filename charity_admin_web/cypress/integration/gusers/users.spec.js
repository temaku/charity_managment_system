/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
describe("user navlink", () => {
    const baseUrl = Cypress.config().baseUrl;
    const serverUrl = Cypress.env("serverUrl");
  
    before(() => {
      // eslint-disable-next-line no-undef
      cy.viewport(1600, 1000);
      cy.clearLocalStorage();
      cy.visit("http://localhost:3000/login");
      cy.waitForReact();
    });
  
    // beforeEach(() => {
    //   // cy.visit("http://localhost:3000/signin");
    //   cy.waitForReact();
    // })
    it("checks if the admin can add volunteers", () => {
    cy.getById("username")
      .type("Adem", { delay: 100 })
      .should("have.value", "Adem");

    cy.getById("password")
      .type("pass1234", { delay: 100 })
      .should("have.value", "pass1234");
    // });
    // "should store the token in local storage"
    cy.getById("login_form").submit();
    //cy.wait(5000);
    // should go to dashbaord page"
    cy.url().should("eq", "http://localhost:3000/dashboard");

    cy.visit("http://localhost:3000/users");
    cy.get('a > .ant-btn > span').click();
    cy.get("#username").type("hamza");
    cy.get("#email").type("namurud@gmail.com");
    cy.get("#password").type("62824778d6233ba7297");
    cy.get("#phone").type("093457643");
    cy.get("#address").type("Addis Ababa");
    cy.get("#role").type("volunteers");
    cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();



    })
    it("checks if the admin can not  add volunteers with empty field", () => {
        cy.getById("logout_button").click();
        //cy.wait(3000);
        cy.url().should("eq", "http://localhost:3000/");
        cy.getById("username")
        .type("Adem", { delay: 100 })
        .should("have.value", "Adem");
  
      cy.getById("password")
        .type("pass1234", { delay: 100 })
        .should("have.value", "pass1234");
      // });
      // "should store the token in local storage"
      cy.getById("login_form").submit();
         cy.wait(5000);
         cy.url().should("eq", "http://localhost:3000/dashboard");
       
    
        cy.visit("http://localhost:3000/users");
        cy.get('a > .ant-btn > span').click();
        cy.get("#username").type("hamza");
        cy.get("#email").type("namurud@gmail.com");
        cy.get("#password").type("62824778d6233ba7297");
        //cy.get("#phone").type("093457643");
        cy.get("#address").type("Addis Ababa");
        cy.get("#role").type("volunteers");
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
    
    
    
        })
});