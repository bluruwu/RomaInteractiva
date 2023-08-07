import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/homePage";

// Prueba unitaria que verifica que la barra de busqueda
describe("Pruebas barra de busqueda", () => {
	it("Prueba redireccionamiento barra de busqueda", () => {
		cy.mount(
			<BrowserRouter>
				{" "}
				<HomePage />{" "}
			</BrowserRouter>
		);
		cy.get("#busqueda").type("Fundacion");
		cy.get("#search-result-0").click();
		cy.url().should("include", "/Fundacion_de_Roma");
	});
	it("Flexibilidad barra de busqueda", () => {
		cy.mount(
			<BrowserRouter>
				{" "}
				<HomePage />{" "}
			</BrowserRouter>
		);
		cy.get("#busqueda").type("fundavinn d rome");
		cy.get("#search-result-0").click();
		cy.url().should("include", "/Fundacion_de_Roma");
	});
});
