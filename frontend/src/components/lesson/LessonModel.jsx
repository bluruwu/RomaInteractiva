import React from "react";



const LessonModel = ({description, titleModel, source}) => {
	return (
        <div className="w-full md:w-1/2 flex relative sketchfab-embed-wrapper"> 
            {" "}
            {/* El iframe para mostrar el modelo 3D */}
            <iframe
                // title={"Romulus & Remus"}
                title = {titleModel}
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                // src="https://sketchfab.com/models/3d839aadacb34322b1d1dd48dc2a818b/embed"
                src = {source}
                className="w-full"
            >
                {" "}
            </iframe>{" "}

            {/* Descripcion del modelo 3D */}
            <div className="flex font-bold items-end justify-end absolute bottom-14 right-8 p-3 bg-custom-dorado rounded-md shadow-xl ">
                <p>{description}</p>
            </div>
        </div>
	);
};

export default LessonModel;