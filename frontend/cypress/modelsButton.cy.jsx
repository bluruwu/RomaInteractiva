import React from "react";
import { BrowserRouter } from "react-router-dom";
import LessonRomuloRemo from "../src/pages/lessons/LessonRomuloRemo";

// Prueba unitaria que verifica el funcionamiento del boton de intercambio de y carga de los modelos 3D
describe("Funcionamiento del cambio de modelos", () => {
	it("Modelos mostrados", () => {
		cy.mount(
			<BrowserRouter>
				{" "}
				<LessonRomuloRemo />{" "}
			</BrowserRouter>
		);
		cy.get("#modelos").click();
		cy.get("#option-0").click({ force: true });
		cy.get("iframe").should(
			"have.attr",
			"src",
			"https://sketchfab.com/models/23ad914573fe46c49b510a736715a377/embed"
		);
		cy.get("#modelos").click();
		cy.get("#option-1").click({ force: true });
		cy.get("iframe").should(
			"have.attr",
			"src",
			"https://sketchfab.com/models/4b90b61d1ad94456b957844dbaccc0a2/embed"
		);
	});
});
