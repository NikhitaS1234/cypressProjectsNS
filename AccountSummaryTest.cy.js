import { LoginFunction } from "./CommonFunctions.cy.js"


describe('Para bank Account Summary Scenarios', () => {

    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      })

      it('Validate Account Balance', () => {
    
        LoginFunction('testuser','password');
       cy.wait(40000000);
        cy.get('h2').contains('Account Services');
        cy.xpath('//table//tr[1]/td[2]').contains('$515.50');

      })
    })
