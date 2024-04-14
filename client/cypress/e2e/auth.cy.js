describe('auth', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/auth/login')
    cy.get("#login").type("test");
    cy.get("#password").type("test");
    cy.get(".login-btn").click();
    cy.get('label[title="city"]').should('exist')
    cy.get('.logout-btn').click();
    cy.get('h2').contains("О сервисе").should('exist')
  })
})
