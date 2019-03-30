describe('user tests suite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000/');
  });
  it('can login as user1', () => {
    cy.get('#email')
      .click()
      .type('tester@tester.com');
    cy.get('#password')
      .click()
      .type('abc');
    cy.contains('Sign In').click();
    cy.location('pathname').should(val => expect(val).to.equal('/notes'));

    cy.getCookies()
      .should('have.length', 2)
      .should(cookies => {
        // each cookie has these properties
        expect(cookies[0]).to.have.property('name', 'bsc-session');
        expect(cookies[0]).to.have.property('httpOnly', true);
        expect(cookies[0]).to.have.property('secure', false);
        expect(cookies[0]).to.have.property('domain');
        expect(cookies[0]).to.have.property('path');

        expect(cookies[1]).to.have.property('name', 'bsc-session.sig');
        expect(cookies[1]).to.have.property('httpOnly', true);
        expect(cookies[1]).to.have.property('secure', false);
        expect(cookies[1]).to.have.property('domain');
        expect(cookies[1]).to.have.property('path');
      });
  });

  it('can login as user2', () => {
    cy.get('#email')
      .click()
      .type('bsc@gmail.com');
    cy.get('#password')
      .click()
      .type('cbc');
    cy.contains('Sign In').click();
    cy.location('pathname').should(val => expect(val).to.equal('/notes'));
  });

  it('can see BE error - email does not exist', () => {
    cy.get('#email')
      .click()
      .type('does_not_exists@gmail.com');
    cy.get('#password')
      .click()
      .type('cbc');
    cy.contains('Sign In').click();
    cy.get('p[data-testid]').should('have.text', "Problem!user doesn't exist t(-.-t)");
  });

  it('can see BE error - passwords do not match', () => {
    cy.get('#email')
      .click()
      .type('bsc@gmail.com');
    cy.get('#password')
      .click()
      .type('aaa');
    cy.contains('Sign In').click();
    cy.get('p[data-testid]').should('have.text', "Problem!passwords don't match (ಠ_ಠ)");
  });

  it('can logout', () => {
    cy.get('#email')
      .click()
      .type('tester@tester.com');
    cy.get('#password')
      .click()
      .type('abc');
    cy.contains('Sign In').click();
    cy.contains('Logout').click();
    cy.location('pathname').should(val => expect(val).to.equal('/'));
  });

  it('can change language', () => {
    cy.visit('http://localhost:9000/');
    cy.contains('sk').click();
    cy.get('form > button').should('have.text', 'Prihlásiť sa');
  });

  it("can't click on button when fields empty", () => {
    cy.get('button').should('be.disabled');
  });

  it("can't click on button when invalid email format is entered", () => {
    cy.get('#email')
      .click()
      .type('tester@.com');
    cy.get('#password')
      .click()
      .type('abc');
    cy.get('button').should('be.disabled');
  });
});
