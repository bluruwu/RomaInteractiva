import React from "react";
import { Dropdown } from "flowbite-react";

const DropdownMenu = ({ modelos, handleModelo }) => {
	return (
		<div
			id="modelos"
			data-dropdown-toggle="dropdown"
			title="Boton para cambiar modelos"
			className="font-bold bg-custom-rojo text-white text-md px-4 py-1 rounded-xl shadow-xl items-center focus:ring-4 focus:outline-none focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			type="button"
		>
			<Dropdown
				inline /* Hace que respete el classname del div */
				label="Ver otros modelos 3D" /* Titulo del menu */
				placement="top" /* Para donde saldran las opcoines */
			>
				{/* Se mapean las opciones que estan en el array mandando y se muestran como opciones en el menu */}
				{modelos.map((model, index) => (
					<Dropdown.Item id={`option-${index}`} key={index} onClick={() => handleModelo(model)}>
						{model.titleModel}
					</Dropdown.Item>
				))}
			</Dropdown>
		</div>
	);
};

export default DropdownMenu;
