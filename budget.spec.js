describe('Verify the form fields warn users who enter too much data', () => {
    context('thisForm', ()=> {
        before('can visit budget', ()=> {
            cy.visit('https://mybudget.now.sh/');

        })

        it('Paycheck name is required', ()=> {
            cy.get('.budget > form > .button')
            .click();
        })
    })
})