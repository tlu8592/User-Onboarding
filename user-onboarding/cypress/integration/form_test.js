const firstNameInput = cy.get('input[name="first_name"]')
const lastNameInput = cy.get('input[name="last_name"]')
const emailInput = cy.get('input[name="email"]')
const passwordInput = cy.get('input[name="password"]')
const termsCheckbox = cy.get('input[name="termsAgreed"]')
const submitButton = cy.get('button[id="submitBtn"]')

describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('check for right elements showing', () => {
        firstNameInput().should('exist')
        lastNameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
    })

    it('submit button is at first disabled', () => {
        submitButton().should('be.disabled')
    })

    it('check that text can be typed in', () => {
        firstNameInput()
            .should('have.value', "")
            .type("Tony")
            .should('have.value',"Tony")

        lastNameInput()
            .should('have.value', "")
            .type("Lu")
            .should('have.value',"Lu")

        emailInput()
            .should('have.value', "")
            .type("tony@ld.ld")
            .should('have.value',"tony@ld.ld")

        passwordInput()
            .should('have.value', "")
            .type("1234")
            .should('have.value',"1234")
    })

    it('check that terms checkbox can be checked', () => {
        termsCheckbox().check()
    })

    it('submit button should be enabled', () => {
        firstNameInput().type("Tony")
        lastNameInput().type("Lu")
        emailInput().type("tony@ld.ld")
        passwordInput().type("1234")
        termsCheckbox().check()
        submitButton().should('not.be.disabled')
    })


    
})