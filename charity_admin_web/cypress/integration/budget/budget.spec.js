/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
describe("budget aloc navlink", () => {
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
    // });


    it("checks if the admin can allocate budget", () => {
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
      
        cy.visit("http://localhost:3000/budgetAllocate");
        cy.get('a > .ant-btn > span').click();
        cy.get('#reason').type('mekdonia need budget to buy generator')
        cy.get('#description').type('this the description')
        cy.get('#amount').type('10000')
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
        //cy.wait(10000);
      

        
    })
    it("checks if the admin can not allocate the field required is empty", () => {
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
         //cy.wait(5000);
         cy.url().should("eq", "http://localhost:3000/dashboard");
      
        cy.visit("http://localhost:3000/budgetAllocate");
        cy.get('a > .ant-btn > span').click();
        cy.get('#reason').type('mekdonia need budget to buy generator');
        cy.get('#description').type('this the description')
        //cy.get('#amount').type('10000')
        cy.get('.ant-form-item-control-input-content > .ant-btn > span').click();
       

        
    })


    });