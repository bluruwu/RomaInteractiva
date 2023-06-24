import React from 'react'
import Login from '../src/pages/Login'
import { BrowserRouter } from "react-router-dom";

// Prueba unitaria que verifica que el login de un usuario de forma correcta e incorrecta
describe('Pruebas unitarias campo Contraseña en Login', () => {
  it('Credenciales incorrectas', () => {
    cy.mount(<BrowserRouter> <Login /> </BrowserRouter>)
    cy.get('#email').type('roberto@gmail.com')
    cy.get('#password').type('12345678')
    cy.get('#submit').click()
    cy.get('.swal2-html-container').contains('Credenciales incorrectas')
    cy.get('.swal2-confirm').click()
  })
  it('Credenciales correctas', () => {
    cy.mount(<BrowserRouter> <Login /> </BrowserRouter>)
    cy.get('#email').type('roberto@gmail.com')
    cy.get('#password').type('123456')
    cy.get('#submit').click()
    cy.get('.swal2-html-container').contains('You have succesfully been logged!')
    cy.get('.swal2-confirm').click()
  })
})