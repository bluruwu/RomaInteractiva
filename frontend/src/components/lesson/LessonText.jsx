import React from "react";
import HomeButton from "../../utilities/HomeButton";


const LessonText = ({title, firstparag, secondparag, thirdparag}) => {
	return (
        <div className=" w-full md:w-1/2 min-h-screen p-14"> 
            <HomeButton/>
            <div className="mb-10 text-3xl ">
                <p className=" font-bold text-center filter drop-shadow-lg">{title}</p>
            </div>

            <div>
                <p className="text-justify mb-4">
                    {firstparag}
                </p>
                <p className="text-justify mb-4">
                    {secondparag}
                </p>
                <p className="text-justify mb-4">
                    {thirdparag}
                </p>
			</div>
        </div>
	);
};

export default LessonText;
