/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
describe("charity navlink", () => {
  const baseUrl = Cypress.config().baseUrl;
  const serverUrl = Cypress.env("serverUrl");

  before(() => {
    // eslint-disable-next-line no-undef
    cy.viewport(1600, 1000);
    cy.clearLocalStorage();
    cy.visit("http://localhost:3000/login");
    cy.waitForReact();
  });

//   beforeEach(() => {
//     // cy.visit("http://localhost:3000/signin");
//     cy.waitForReact();
//   });

  //add

  it("checks if the admin can add charity", () => {
    //cy.refreshDatabase();
    
    cy.getById("username")
      .type("Adem", { delay: 100 })
      .should("have.value", "Adem");

    cy.getById("password")
      .type("pass1234", { delay: 100 })
      .should("have.value", "pass1234");
    // });
    // "should store the token in local storage"
    cy.getById("login_form").submit();
   // cy.wait(10000);
    // should go to dashbaord page"
    cy.url().should("eq", "http://localhost:3000/dashboard");
    // cy.assertRedirect('/dashboard');
    //cy.get(':nth-child(3) > .ant-menu-submenu-title > .ant-menu-title-content').click()
    cy.visit("http://localhost:3000/charity");
    cy.get("a > .ant-btn > span").click();
    //cy.contains("[data-cy='addStaff']", "Add Staff").click();
    cy.get("#name").type("gergesoihon");
    cy.get("#description").type("it is charity org work on mental ill people");
    cy.get("#category").type("62824778d6233ba729718764");
    
    cy.get("#email").type("kyrbvad@gmail.com");
    cy.get("#address").type("Addis Ababa");
    cy.get("#phone").type("093465843");
    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();
    
  });
  it("checks if the admin can not  add with empty field charity", () => {
    cy.getById("logout_button").click();
   // cy.wait(3000);
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
 // cy.wait(10000);
  // should go to dashbaord page"
    cy.visit("http://localhost:3000/charity");
    cy.get("a > .ant-btn > span").click();
    //cy.contains("[data-cy='addStaff']", "Add Staff").click();
    cy.get("#name").type("gergesoihon");
    cy.get("#description").type("it is charity org work on mental ill people");
    cy.get("#category").type("62824778d6233ba729718764");
   // cy.get("#email").type("kebdele@gmail.com");
    cy.get("#address").type("Addis Ababa");
    cy.get("#phone").type("093465843");
    cy.get(".ant-form-item-control-input-content > .ant-btn > span").click();

   
  });

  it("checks if the admin can edit charity", () => {
    cy.getById("logout_button").click();
   // cy.wait(3000);
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
 // cy.wait(10000);
  // should go to dashbaord page"
    cy.visit("http://localhost:3000/charity");
    cy.get(':nth-child(7) > :nth-child(8) > .flex > .mx-3').click()
    cy.get("#name").clear().type("laeke");
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
      
  });
  it('checks if the admin can delete charity', () => {
      cy.visit("http://localhost:3000/login")
      cy.getById("username")
    .type("Adem", { delay: 100 })
    .should("have.value", "Adem");

  cy.getById("password")
    .type("pass1234", { delay: 100 })
    .should("have.value", "pass1234");
  // });
  // "should store the token in local storage"
  cy.getById("login_form").submit();
 // cy.wait(10000);

     cy.visit("http://localhost:3000/charity");
     cy.get(':nth-child(7) > :nth-child(8) > .flex > .mx-2 > path').click();
     cy.get('.ant-modal-footer > .ant-btn-primary > span').click();
    // cy.refreshDatabase();
  


});
})

