/// <reference types="cypress"/>
import { LoginPage } from "./pages/loginpage.cy";
import { dashboard } from "./pages/dashboard.cy";

var loginpage = new LoginPage()
var dashboardpage = new dashboard()
describe('search admin user', () => {
  
    
    it('validate existing user search', () => {
        
      
     loginpage.loginfn()
     cy.wait(1000)
     dashboardpage.admin()
     dashboardpage.searchuser('admin')
     dashboardpage.searchbtn()
     cy.wait(2000)
     dashboardpage.resetbtn()
 
    })
    it('validate non-existing user search', () => {
        
      
        loginpage.loginfn()
        cy.wait(1000)
        dashboardpage.admin()
        dashboardpage.searchuser('pouuytre')
        dashboardpage.searchbtn()
        cy.wait(2000)
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('have.text','No Records Found')
    
       })
       it('validate search by user role', () => {
        
      
        loginpage.loginfn()
        cy.wait(1000)
        dashboardpage.admin()
        dashboardpage.userrole()
       dashboardpage.ESS()
       cy.wait(2000)
       dashboardpage.searchbtn()
    
       })
       it('validate search by disabled', () => {
        
      
        loginpage.loginfn()
        cy.wait(1000)
        dashboardpage.admin()
        dashboardpage.statusclick()
        dashboardpage.Enable()
       cy.wait(2000)
       dashboardpage.searchbtn()
    
       })
  })