describe('note test suite', () => {
  before(() => {
    cy.visit('http://localhost:9000/');
    cy.get('#email')
      .click()
      .type('tester@tester.com');
    cy.get('#password')
      .click()
      .type('abc');
    cy.contains('Sign In').click();
    cy.location('pathname').should(val => expect(val).to.equal('/notes'));
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('bsc-session', 'bsc-session.sig');
  });

  it('creates note', () => {
    cy.contains('+').click();
    cy.get('.ReactModal__Content > div')
      .as('note')
      .should('have.text', 'Write Here');
    cy.get('.ReactModal__Content > button')
      .as('button')
      .should('have.text', 'Confirm');
    cy.get('@note').type('new note\nfrom test');
    cy.get('@button').click();
    cy.get('main > div').contains('new note\nfrom test');
    // for ID from BE
    cy.wait(500);
  });

  it('updates note', () => {
    cy.get('main > div')
      .contains('new note\nfrom test')
      .as('note');
    cy.get('@note').dblclick();
    cy.get('.ReactModal__Content > div')
      .as('note')
      .should('have.text', 'new note\nfrom test');
    cy.get('@note')
      .clear()
      .type('updated note');
    cy.get('.ReactModal__Content > button').click();
    cy.get('main > div').contains('updated note');
  });

  it('deletes note', () => {
    cy.get('main > div')
      .contains('updated note')
      .as('note');
    cy.get('svg[name=trash]').then(el => {
      const trash = el[0].getBoundingClientRect();
      cy.get('.react-draggable > div')
        .trigger('mousedown', { clientX: 201, clientY: 145 })
        .trigger('mousemove', { clientX: trash.x, clientY: trash.y });
    });
    cy.get('svg[name=trash]').trigger('mouseup');
  });
});
