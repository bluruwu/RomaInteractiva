import React from "react";
import Register from "../src/pages/Register";
import { BrowserRouter } from "react-router-dom";

// Prueba unitaria que verifica que el campo "Contraseña" falle si la longitud no es la correcta.
describe("Pruebas unitarias campo Contraseña en Registro", () => {
	it("Longitud 1 contraseña", () => {
		cy.mount(
			<BrowserRouter>
				{" "}
				<Register />{" "}
			</BrowserRouter>
		);
		cy.get("#password").type("1");
		cy.get("#submit").click();
		cy.get(".swal2-html-container").contains("Password is too short");
		cy.get(".swal2-confirm").click();
	});

	it("Longitud 7 contraseña", () => {
		cy.mount(
			<BrowserRouter>
				{" "}
				<Register />{" "}
			</BrowserRouter>
		);
		cy.get("#password").type("12345");
		cy.get("#submit").click();
		cy.get(".swal2-html-container").contains("Password is too short");
		cy.get(".swal2-confirm").click();
	});
	it("Longitud 8 contraseña", () => {
		cy.mount(
			<BrowserRouter>
				{" "}
				<Register />{" "}
			</BrowserRouter>
		);
		cy.get("#password").type("12345678");
		cy.get("#submit").click();
		cy.get(".swal2-html-container").contains("Passwords are not the same");
		cy.get(".swal2-confirm").click();
	});
});

// Prueba unitaria que verifica que el boton que hay en registro SÍ lleve a Login
describe("Pruebas unitarias Boton a login", () => {
	it("Redireccionamiento a login", () => {
		cy.mount(
			<BrowserRouter>
				{" "}
				<Register />{" "}
			</BrowserRouter>
		);
		cy.get("#gotologin").click();
		cy.url().should("include", "/login");
	});
});
