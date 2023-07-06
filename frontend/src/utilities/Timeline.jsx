import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
    const items = [
        {
            title: "21 de abril de 753 a.C",
            cardTitle: "Fundación de Roma",
            cardDetailedText: "Según las leyendas este día Rómulo fundó la ciudad de Roma en la colina Palatina."
        },
        {
            title: "509 a.C",
            cardTitle: "Expulsión del último rey de Roma y comienzo de la República",
            cardDetailedText: "Roma se convirtió en una república después de expulsar al último rey etrusco, Lucio Tarquinio el Soberbio."
        },
        {
            title: "264 a.C - 146 a.C",
            cardTitle: "Guerras Púnicas",
            cardDetailedText: "Conflictos bélicos entre la República de Roma y Cartago, culminando con la destrucción de Cartago y la anexión de sus territorios."
        },
        {
            title: "49 a.C",
            cardTitle: "Dictadura de Julio César",
            cardDetailedText: "Julio César se convirtió en dictador perpetuo de Roma, reformó el calendario y llevó a cabo varias reformas políticas."
        },
        {
            title: "15 de marzo de 44 a.C",
            cardTitle: "Asesinato de Julio César",
            cardDetailedText: "Julio César fue asesinado por un grupo de senadores liderados por Brutus y Casio."
        },
        {
            title: "27 a.C",
            cardTitle: "Coronación de Augusto e inicio del Imperio",
            cardDetailedText: "Octavio se convirtió en el primer emperador de Roma bajo el nombre de Augusto, marcando el inicio del período imperial"
        },
        {
            title: "80 d.C",
            cardTitle: "Construcción del Coliseo",
            cardDetailedText: "El emperador Vespasiano comenzó la construcción del famoso anfiteatro Flavio, conocido como el Coliseo, que se convirtió en un símbolo icónico de la Roma antigua."
        },
        {
            title: "313 d.C",
            cardTitle: "Edicto de Milán",
            cardDetailedText: "El emperador Constantino emitió un edicto que concedía libertad religiosa y puso fin a la persecución de los cristianos en el Imperio Romano."
        },
        {
            title: "395 d.C",
            cardTitle: "División del Imperio Romano",
            cardDetailedText: "El emperador Teodosio dividió el Imperio Romano en dos partes: el Imperio Romano de Occidente y el Imperio Romano de Oriente."
        },
        {
            title: "4 de abril de 476 d.C",
            cardTitle: "Caída del Imperio Romano de Occidente",
            cardDetailedText: "Rómulo Augústulo, el último emperador romano de Occidente, fue depuesto por el jefe germano Odoacro, marcando el fin del Imperio Romano de Occidente luego de doce siglos."
        }
    ];
    
      return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "1000px" }}>
            <Chrono
              items={items}
              mode="HORIZONTAL"
              cardHeight={100}
              theme={{
                primary: '#8E0000',
                secondary: '#ffcc33',
                titleColor: 'black',
                titleColorActive: '#8E0000',
                cardTitleColor: "#8E0000",
              }}
            />
          </div>
        </div>
      );
    };

export default Timeline;
