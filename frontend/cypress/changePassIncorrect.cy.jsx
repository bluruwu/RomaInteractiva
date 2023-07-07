import React from 'react'
import Perfil from '../src/pages/Perfil'
import Login from '../src/pages/Login'
import { BrowserRouter } from "react-router-dom";

// Prueba unitaria que verifica el cambio de password de un usuario
describe('Pruebas unitarias cambio de password', () => {
    it('Credenciales incorrectas', () => {
        cy.mount(<BrowserRouter> <Login /> </BrowserRouter>)
        cy.get('#email').type('alejandro@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#submit').click()
        cy.get('.swal2-html-container').contains('You have succesfully been logged!')
        cy.get('.swal2-confirm').click()
        cy.mount(<BrowserRouter> <Perfil /> </BrowserRouter>)
        cy.get('#passwordField').click()
        cy.get('#currentPassword').type('12345678')
        cy.get('#newPassword').type('123456789')
        cy.get('#newPasswordAgain').type('123456789')
        cy.get('#confirmButton').click()
        cy.get('.swal2-title').contains('Contraseña incorrecta')
        cy.get('#confirm-button-id').click()
    })
})