import React from "react";
import { useState } from "react";
import ExitButton from "./exitButton";
import Avatar from "./avatar";

export default function ModalAvatar({saveAvatar}) {

    const [showModal, setShowModal] = useState(false);

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            setShowModal(false);
        }
    };

    const setAvatar = (id) => {
        localStorage.setItem(`avatar`, JSON.stringify(id));
        saveAvatar(id);
        setShowModal(false);
    }

    return (
        <>
            {/*<ButtonBack texto='abrir' onClick={() => { setShowModal(true) }} />*/}
            <div className="mb-4 md:mb-0 h-8 rounded-xl transform transition duration-300 hover:scale-110 underline cursor-pointer">
                <a
                    onClick={() => { setShowModal(true) }}
                    className=""
                >
                    Cambiar avatar
                </a>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                        onClick={handleBackdropClick}
                        data-testid="modal"
                    >
                        <div className="border rounded-xl relative w-auto mx-auto max-w-3xl">
                            <div className="border rounded-xl shadow-lg relative flex flex-col w-[39rem] bg-white outline-none focus:outline-none">
                                <section className="bg-gray-50 border rounded-xl">
                                    <div className="border rounded-xl flex flex-col items-center justify-center px-6 ">
                                        <div className="w-full bg-white xl:p-0">
                                            <div className="flex justify-end mt-4" >
                                                <ExitButton onClick={() => setShowModal(false)} />
                                            </div>
                                            <div className="pl-6 pr-6 pb-6 space-y-4 ">
                                                <h1 className="text-3xl font-bold leading-tight tracking-tight text-black text-center">
                                                    Avatares
                                                </h1>
                                                <div className="flex flex-row flex-wrap">
                                                    {Array.from({ length: 8 }, (_, index) => (
                                                        <Avatar changeAvatar={setAvatar} key={index} id={index} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}