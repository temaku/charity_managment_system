/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
describe("task navlink", () => {
    const baseUrl = Cypress.config().baseUrl;
    const serverUrl = Cypress.env("serverUrl");
  
    before(() => {
      // eslint-disable-next-line no-undef
      cy.viewport(1600, 1000);
      cy.clearLocalStorage();
      cy.visit("http://localhost:3000");
      cy.waitForReact();
    });
  
    // beforeEach(() => {
    //   // cy.visit("http://localhost:3000/signin");
    //   cy.waitForReact();
    // });


    it("checks if the admin can add tasks", () => {
        cy.getById("username")
        .type("Adem", { delay: 100 })
        .should("have.value", "Adem");
  
      cy.getById("password")
        .type("pass1234", { delay: 100 })
        .should("have.value", "pass1234");
      // });
      // "should store the token in local storage"
      cy.getById("login_form").submit();
        cy.url().should("eq", "http://localhost:3000/dashboard");
        cy.visit("http://localhost:3000/tasks");
        cy.get('a > .ant-btn > span').click();
        cy.get('#volunteer').type('6296a2b525f9647c08356c9f');
        cy.get('#task').type('thisnewtask');
        cy.get('#description').type('this is the desctiption of the new task');
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();

        
    })
    it("checks if the admin can not  add tasks the field required is null", () => {
        cy.getById("logout_button").click();
         cy.wait(3000);
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
        // cy.wait(5000);
         cy.url().should("eq", "http://localhost:3000/dashboard");
       
        cy.visit("http://localhost:3000/tasks");
        cy.get('a > .ant-btn > span').click();
        cy.get('#volunteer').type('6296a2b525f9647c08356c9f');
       // cy.get('#task').type('thisnewtask');
        cy.get('#description').type('this is the desctiption of the new task');
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();

        
    })


    });