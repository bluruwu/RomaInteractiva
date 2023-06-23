import React from "react";
import { Dropdown } from "flowbite-react";

const DropdownMenu = ({ modelos, handleModelo }) => {
	return (
		<div
			id="modelos"
			data-dropdown-toggle="dropdown"
			title="Boton para cambiar modelos"
			className="font-bold p-3 mr-8 mb-3 bg-custom-rojo text-white rounded-md shadow-xl items-center focus:ring-4 focus:outline-none focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			type="button"
		>
			<Dropdown
				inline /* Hace que respete el classname del div */
				label="Visualizar otros modelos 3D" /* Titulo del menu */
				placement="top" /* Para donde saldran las opcoines */
			>
				{/* Se mapean las opciones que estan en el array mandando y se muestran como opciones en el menu */}
				{modelos.map((model, index) => (
					<Dropdown.Item key={index} onClick={() => handleModelo(model)}>
						{model.titleModel}
					</Dropdown.Item>
				))}
			</Dropdown>
		</div>
	);
};

export default DropdownMenu;
