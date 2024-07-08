beforeEach(function(){
    cy.readFile('/Users/babajideshodeyi/Documents/Cypress project/cypress/fixtures/example.json').then((Data) => {
cy.log(Data.body)
})
})
it('readfile', () => {
        
      
 cy.readFile('/Users/babajideshodeyi/Documents/Cypress project/cypress/fixtures/example.json').then((Data)=>{
    cy.log(Data.name)
 })

  })
  it('readfile2', () => {
        
      
    cy.readFile('/Users/babajideshodeyi/Documents/Cypress project/cypress/fixtures/example.json').then((Data)=>{
       cy.log(Data.name)
    })
   
     })