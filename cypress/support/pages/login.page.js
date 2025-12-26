/// <reference types="cypress" />
import { fakerPT_BR as faker } from '@faker-js/faker'

class LoginPage {
    get #signUp() { return cy.get('[data-testid="signUp"] > .css-146c3p1') }
    get #firstName() { return cy.get('[data-testid="firstName"]') }
    get #lastName() { return cy.get('[data-testid="lastName"]') }
    get #phone() { return cy.get('[data-testid="phone"]') }
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }
    get #repassword() { return cy.get('[data-testid="repassword"]') }
    get #create() { return cy.get('[data-testid="create"]') }

    login() {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        const phone = faker.phone.number('119########')
        const email = faker.internet.email().toLowerCase()
        const password = faker.internet.password(8)

        this.#signUp.click()
        this.#firstName.type(firstName)
        this.#lastName.type(lastName)
        this.#phone.type(phone)
        this.#email.type(email)
        this.#password.type(password)
        this.#repassword.type(password)
        this.#create.click()
    }
}

export default new LoginPage()
