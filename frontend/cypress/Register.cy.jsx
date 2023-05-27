import React from 'react'
import Register from '../src/pages/Register'
import { BrowserRouter } from "react-router-dom";

describe('Pruebas unitarias campo Contraseña en Registro', () => {
  it('Longitud 1 contraseña', () => {
    cy.mount(<BrowserRouter> <Register /> </BrowserRouter>)
    cy.get('#contraseña').type('1')
    cy.get('#submit').click()
    cy.get('.swal2-html-container').contains('Password is too short')
    cy.get('.swal2-confirm').click()
  })
  it('Longitud 7 contraseña', () => {
    cy.mount(<BrowserRouter> <Register /> </BrowserRouter>)
    cy.get('#contraseña').type('1234561')
    cy.get('#submit').click()
    cy.get('.swal2-html-container').contains('Password is too short')
    cy.get('.swal2-confirm').click()
  })
  it('Longitud 8 contraseña', () => {
    cy.mount(<BrowserRouter> <Register /> </BrowserRouter>)
    cy.get('#contraseña').type('12512616')
    cy.get('#submit').click()
    cy.get('.swal2-html-container').contains('Passwords are not the same')
    cy.get('.swal2-confirm').click()
  })
})

describe('Pruebas unitarias Boton a login', () => {
  it('Redireccionamiento a login', () => {
    cy.mount(<BrowserRouter> <Register /> </BrowserRouter>)
    cy.get('#redirlogin').click()
    cy.url().should('include', '/login');
  })
})