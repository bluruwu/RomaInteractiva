const fetch = require("node-fetch");

describe("POST /endpoint", () => {
	it("should respond with status 200 and a success message", async () => {
		const mydata = {
			email: "ana@gmail.com",
			contrasena: "123456",
		};
		const response = await fetch("https://roma-interactiva-back.vercel.app/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(mydata),
		});
		const responseBody = await response.json();
		expect(response.status).toBe(200);
		expect(responseBody.message).toEqual("Inicio de sesión exitoso");
	});
});
