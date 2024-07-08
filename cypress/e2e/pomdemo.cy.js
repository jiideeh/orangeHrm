/// <reference types="cypress"/>
import { LoginPage } from "./pages/loginpage.cy";
var loginpage = new LoginPage()
describe('hr app login', () => {
  
    
    it('login with invalid username', () => {
        
      
      loginpage.username()
      loginpage.password()
      loginpage.loginbtn()
      cy.get('.oxd-alert-content > .oxd-text').should('contain','Invalid credentials')
 
    })
    it('login with valid password', () => {
        
  
      loginpage.username2()
      loginpage.password()
      loginpage.loginbtn()
      cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
 
    })
  })