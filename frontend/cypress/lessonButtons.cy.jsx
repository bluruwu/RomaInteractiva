import React from 'react'
import LessonFundacionRoma from "../src/pages/lessons/LessonFundacionRoma";
import { BrowserRouter } from "react-router-dom";

//Prueba unitaria de los botones de texto de las lecciones rediseñadas
it('Funcionamiento de los botones de párrafos de las lecciones', () => {
    cy.mount(<BrowserRouter> <LessonFundacionRoma /> </BrowserRouter>)
    cy.get('#button-0').click()
    cy.contains('#text-0', "La fundación de Roma como una monarquía se remonta a la antigüedad y está envuelta en leyendas y mitos. Según la tradición, la ciudad de Roma fue fundada en el año 753 a.C. por Rómulo, quien se convirtió en el primer rey. La historia temprana de Roma se basa en gran medida en la obra 'Ab urbe condita' escrita por Tito Livio. Aunque muchas de las historias anteriores a la República temprana son consideradas legendarias, se cree que Rómulo estableció las bases de la estructura política y social de la incipiente ciudad. Dividió la población en tribus y curias, y estableció un senado compuesto por líderes locales.")
    cy.get('#button-1').click()
    cy.contains('#text-1', 'La leyenda cuenta que Rómulo y su hermano Remo fueron abandonados en el río Tíber y criados por una loba. Al crecer, decidieron fundar una ciudad en el lugar donde fueron encontrados. Sin embargo, surgieron disputas entre los hermanos sobre quién gobernaría la nueva ciudad. La disputa terminó trágicamente cuando Rómulo mató a Remo y se convirtió en el primer rey de Roma. Bajo su reinado, se estableció la monarquía y se sentaron las bases para el futuro desarrollo de la ciudad.')
    cy.get('#button-2').click()
    cy.contains('#text-2', 'Aunque la fundación de Roma como una monarquía se basa en la tradición y la mitología, ha dejado un impacto duradero en la historia y la cultura romanas. La monarquía romana sentó las bases de la futura República y posteriormente del Imperio, y su legado continúa influyendo en la concepción del poder y la organización política en el mundo antiguo y más allá.')
})