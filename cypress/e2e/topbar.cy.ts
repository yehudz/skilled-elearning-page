describe('empty spec', () => {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(350, 540)
  })
  it('should have a top bar container', ()=> {
    cy.get('[data-cy="top-bar-container"]').should('exist')
  })
  it('should have the logo', ()=> {
    cy.get('[data-cy="top-bar-container"]')
    .find('img')
    .should('be.visible')
  })
  it('should have get started button', ()=> {
    cy.get('[data-cy="get-started-button"]').should('exist')
  })
})