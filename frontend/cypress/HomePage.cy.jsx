import React from 'react'
import { BrowserRouter } from "react-router-dom";
import HomePage from '../src/pages/homePage';

describe('Prueba unitaria sobre redireccionamiento lecciones', () => {
  it('Monarquia', () => {
    cy.mount(<BrowserRouter> <HomePage /> </BrowserRouter>)
    cy.get('#monarquia').click()
    cy.url().should('include', '/fundacion_de_roma');
  })
  it('La República', () => {
    cy.mount(<BrowserRouter> <HomePage /> </BrowserRouter>)
    cy.get('#republica').click()
    cy.url().should('include', '/Fundacion_Republica');
  })
  it('Imperio', () => {
    cy.mount(<BrowserRouter> <HomePage /> </BrowserRouter>)
    cy.get('#imperio').click()
    cy.url().should('include', '/Cristianismo_Imperio');
  })
  it('Personajes', () => {
    cy.mount(<BrowserRouter> <HomePage /> </BrowserRouter>)
    cy.get('#personajes').click()
    cy.url().should('include', '/Romulo_Remo');
  })
  it('Arquitectura', () => {
    cy.mount(<BrowserRouter> <HomePage /> </BrowserRouter>)
    cy.get('#arquitectura').click()
    cy.url().should('include', '/Coliseo_Romano');
  })
  it('Cultura', () => {
    cy.mount(<BrowserRouter> <HomePage /> </BrowserRouter>)
    cy.get('#cultura').click()
    cy.url().should('include', '/Viviendas');
  })
})

describe('Prueba unitaria sobre redireccionamiento a Login', () => {
    it('Boton Login', () => {
      cy.mount(<BrowserRouter> <HomePage /> </BrowserRouter>)
      cy.get('#iniciarsesion').click()
      cy.url().should('include', '/login');
    })
  })