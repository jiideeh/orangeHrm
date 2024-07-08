/// <reference types="cypress"/>
import { LoginPage } from "./pages/loginpage.cy";
import { dashboard } from "./pages/dashboard.cy";
import { profile } from "./pages/profilepage.cy";


var loginpage = new LoginPage()
var dashboardpage = new dashboard()
var ProfilePage = new profile()
var pic = 'jide.jpg';
describe('Employee profile', () => {
  
    
    it('view personal details', () => {
        
      
     loginpage.loginfn()
     cy.wait(1000)
     dashboardpage.myinfo()
     
    
    
 
    })
    it('edit personal details', () => {
        
      
        loginpage.loginfn()
        cy.wait(1000)
        dashboardpage.myinfo()
        cy.wait(2000)
        ProfilePage.nationality()
        ProfilePage.Nigerian()
        ProfilePage.savebtn()
        cy.wait(2000)
        ProfilePage.bloodtype()
        ProfilePage.oplus()
        ProfilePage.savebtn2()
       
    
       })
       it('edit contact details', () => {
        
      
        loginpage.loginfn()
        cy.wait(1000)
        dashboardpage.myinfo()
        cy.wait(2000)
       ProfilePage.contactdetails()
       ProfilePage.street1()
       ProfilePage.street2()
       ProfilePage.city()
       ProfilePage.state()
       ProfilePage.country()
       ProfilePage.Nigeria()
       ProfilePage.mobile()
       
      ProfilePage.savebtn3()
      ProfilePage.attachment()
      cy.get('.oxd-file-button').attachFile(pic)
      ProfilePage.comment()
      
      ProfilePage.savebtn4()
       
    
       })
   
  })