describe('Hero Section', ()=> {
  beforeEach(()=> {
    cy.visit('/')
    cy.viewport(350, 540)
  })
  it('should have a hero container', ()=> {
    cy.get('[data-cy="hero-container"]')
    .should('exist')
  })
  it('should have big header', ()=> {
    cy.get('[data-cy="hero-header"]')
    .invoke('text')
    .should('not.be.empty')
  })
  it('should have description', ()=> {
    cy.get('[data-cy="hero-description"]')
    .invoke('text')
    .should('not.be.empty')
  })
  it('should have get started button', ()=> {
    cy.get('[data-cy="get-started-button"]')
    .should('not.be.empty')
  })
  it('should have hero image', ()=> {
    cy.get('[data-cy="hero-image-container"]')
    .should('have.css', 'background-image')
  })
})