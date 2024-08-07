describe('Registrations List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('Should create new registration', () => {
    cy.intercept('POST', '**/registrations').as('postRegistration');
    cy.get('[data-testci="admission-button"]').click();	
    
    cy.get('input[name="employeeName"]').type('Gustavo Nogales')
    cy.get('input[name="email"]').type('gustavoonogales@gmail.com')
    cy.get('input[name="cpf"]').type('44757851898')
    cy.get('input[name="admissionDate"]').type('2024-06-20')
    cy.get('button').contains('Cadastrar').click();

    cy.wait('@postRegistration');

    cy.get('[role="status"]').should('contain', 'Novo registro criado com sucesso!');
  });

});
