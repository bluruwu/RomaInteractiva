import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/homePage";

// Prueba unitaria que verifica que el boton de lecciones aleatorias redirija correctamente
describe("Prueba del boton de lecciones aleatorias", () => {
	it("Funcionamiento del botón", () => {
		cy.mount(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		);
		cy.get("#randomButton").click();
		cy.url().should(($url) => {
			const validUrls = [
				"/Fundacion_de_Roma",
				"/Reyes_de_Roma",
				"/Final_Monarquia",
				"/Augusto",
				"/Romulo_Remo",
				"/Julio_Cesar",
				"/Fundacion_Republica",
				"/Expansion_Republica",
				"/Colapso_Republica",
				"/Panteon_Agripa",
				"/Coliseo_Romano",
				"/Cristianismo_Imperio",
				"/Armas_Imperio",
				"/Final_Imperio",
			];
			expect(validUrls.some((url) => $url.includes(url))).to.be.true;
		});
	});
});
