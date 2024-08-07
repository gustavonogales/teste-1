import fixtures from '../../fixtures/registrations.json';

describe('Registrations List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
    cy.request('POST', 'http://localhost:3000/registrations', fixtures[0]);
  });

  afterEach(() => {
    cy.request(
      'DELETE',
      `http://localhost:3000/registrations/${fixtures[0].id}`,
    );
  });

  it('should be able to move from REVIEW column to APPROVED column', () => {
    cy.get('[data-testci="column-REVIEW"]')
      .find('[data-testci="registration-card"]')
      .should('contain', 'Gustavo Nogales')
      .find('button')
      .contains('Aprovar')
      .click();

    cy.get('[role="dialog"]')
      .should('exist')
      .find('button')
      .contains('Confirmar')
      .click();

    cy.get('[role="status"]').should(
      'contain',
      'Status atualizado com sucesso!',
    );

    cy.get('[data-testci="column-APPROVED"]')
      .find('[data-testci="registration-card"]')
      .should('contain', 'Gustavo Nogales');
  });
});
