import React from "react";
import { BrowserRouter } from "react-router-dom";
import QuizPersonajes from "../src/pages/quizes/QuizPersonajes";

// Prueba unitaria que verifica la revisión de las respuestas de los quices
describe("Navegacion entre preguntas", () => {
	it("Respuestas a preguntas", () => {
		cy.mount(
			<BrowserRouter>
				{" "}
				<QuizPersonajes />{" "}
			</BrowserRouter>
		);
		cy.get("#nextButton").click();
		cy.get("#nextButton").click();
		cy.get("#nextButton").click();
		cy.get("#nextButton").click();
		cy.get("#nextButton").click();
		cy.get(".swal2-popup").contains("¿Quieres terminar el intento?");
		cy.get(".swal2-confirm").click();
		cy.get("#nextButton").click({ force: true });
		cy.get("#nextButton").click({ force: true });
		cy.get("#nextButton").click({ force: true });
		cy.get("#nextButton").click({ force: true });
		cy.get("#nextButton").click({ force: true });
		cy.get(".swal2-popup").contains("¿Terminar revisión?");
		cy.get(".swal2-confirm").click();
		cy.url().should("include", "/home");
	});
});
