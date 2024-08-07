import fixtures from '../../fixtures/registrations.json';

describe('Registrations List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('should display all registrations to be reviewed', () => {
    cy.intercept('GET', '**/registrations*', {
      fixture: 'registrations.json',
    }).as('getRegistrations');
    cy.get('[data-testid="skeleton"]').should('exist');
    cy.wait('@getRegistrations');

    cy.get('[data-testci="column-REVIEW"]')
      .find('[data-testci="registration-card"]')
      .should('have.length', 1)
      .and('contain', 'Gustavo Nogales')
      .and('contain', 'gustavoonogales@gmail.com')
      .and('contain', 'Reprovar')
      .and('contain', 'Aprovar');
  });

  it('should display all approved registrations', () => {
    cy.get('[data-testci="column-APPROVED"]')
      .find('[data-testci="registration-card"]')
      .should('have.length', 1)
      .and('contain', 'Filipe Marins')
      .and('contain', 'Revisar novamente')
      .not('contain', 'Aprovar')
      .not('contain', 'Reprovar');
  });

  it('should display all reproved registrations', () => {
    cy.get('[data-testci="column-REPROVED"]')
      .find('[data-testci="registration-card"]')
      .should('have.length', 1)
      .and('contain', 'José Leão')
      .and('contain', 'Revisar novamente')
      .not('contain', 'Aprovar')
      .not('contain', 'Reprovar');
  });

  it('should filter by CPF', () => {
    cy.request('POST', 'http://localhost:3000/registrations', fixtures[0]);
    cy.get('input').type('44757851898');

    cy.wait(800);

    cy.get('[data-testci="registration-card"]').should('have.length', 1);

    cy.request(
      'DELETE',
      `http://localhost:3000/registrations/${fixtures[0].id}`,
    );
  });
});
