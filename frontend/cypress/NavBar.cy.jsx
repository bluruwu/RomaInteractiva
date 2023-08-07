import React from "react";
import NavBar from "../src/utilities/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Pruebas de redireccionamiento", () => {
	it("Prueba redireccionamiento a GAMES", () => {
		cy.mount(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);
		cy.get("#juegos").click();
		cy.url().should("include", "/games");
	});

	it("Prueba redireccionamiento a LOGIN", () => {
		cy.mount(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);
		cy.get("#iniciarsesion").click();
		cy.url().should("include", "/login");
	});
});
