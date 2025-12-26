/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const {primeironome,ultimonome,telefone,email,senha,confirmarsenha} = require('../fixtures/data.json')
describe('Teste de Cadastro', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  })

  it('Deve fazer o cadastro com sucesso', () => {
    homePage.openMenu('Account')
    loginPage.login(primeironome,ultimonome,telefone,email,senha,confirmarsenha)
    homePage.openMenu('Account').should('contain', 'Profile')
  })
})