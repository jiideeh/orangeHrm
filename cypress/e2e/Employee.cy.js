/// <reference types="cypress"/>
import { LoginPage } from "./pages/loginpage.cy";
import { dashboard } from "./pages/dashboard.cy";
import { pim } from "./pages/PIM.cy";
var loginpage = new LoginPage()
var dashboardpage = new dashboard()
var Pim = new pim()
describe('Employee management', () => {
  
    
    it('search employee by id', () => {
        
      
     loginpage.loginfn()
     cy.wait(1000)
     dashboardpage.PIM()
     Pim.employeeid('0312')
     Pim.searchbtn()
    
 
    })
    it(' validate search by past employee', () => {
        
      
        loginpage.loginfn()
        cy.wait(1000)
        dashboardpage.PIM()
        Pim.includes()
        Pim.pastemployee()
        Pim.searchbtn()
       
    
       })
       it(' validate search by job Title', () => {
        
      
        loginpage.loginfn()
        cy.wait(1000)
        dashboardpage.PIM()
        Pim.jobTitle()
        Pim.AutomationTester()
        Pim.searchbtn()
       
    
       })
  })