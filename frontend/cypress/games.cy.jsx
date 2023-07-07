import React from 'react'
import HomePage from "../src/pages/homePage";
import Games from "../src/pages/Games";
import { BrowserRouter } from "react-router-dom";

//Prueba unitaria para verificar el comportamiento del boton juegos y la redireccion a los mismos
describe('Prueba unitaria del funcionamiento de games', () => {
    it('Credenciales correctas', () => {
        cy.mount(<BrowserRouter> <HomePage /> </BrowserRouter>)
        cy.get('#gamesButton').click()
        cy.mount(<BrowserRouter> <Games /> </BrowserRouter>)
        cy.get('#puzzle').click()
        cy.url().should('include', '/puzzle');
        cy.get('#crossword').click()
        cy.url().should('include', '/crossword');
    })
})