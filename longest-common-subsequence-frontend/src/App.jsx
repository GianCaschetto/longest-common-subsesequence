import React, { useState } from "react";
import axios from "axios";
import "./index.css"

function App() {
    const [cadena1, setCadena1] = useState("");
    const [cadena2, setCadena2] = useState("");
    const [lcs, setLcs] = useState([]);
    const [teamMembers] = useState([
        "Gisela Alonso",
        "Gianluca Dalia",
        "Gianfranco Caschetto",
        "Luis Baptista",
        "Daniel Millan",
        "Jose Bastidas",
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "cadena1") {
            setCadena1(value);
        } else if (name === "cadena2") {
            setCadena2(value);
        }
    };

    const getLCS = (cadena1, cadena2) => {
        axios
            .get("http://localhost:3000/lcs", {
                params: {
                    str1: cadena1,
                    str2: cadena2,
                },
            })
            .then((response) => {
                const lcsResponse = response.data;
                setLcs(lcsResponse);
                console.log(
                    `Longitud de la subsecuencia es: ${
                        lcsResponse.length
                    } común más larga: ${lcsResponse.join("")}`
                );
            })
            .catch((error) => {
                console.error("Error al llamar a la API:", error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getLCS(cadena1, cadena2);
    };

    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    className="flex items-center justify-center p-6 lg:px-8"
                    aria-label="Global"
                >
                    <h1 className="text-lg font-semibold leading-6 text-gray-900">
                        Metodos Cuantitativos
                    </h1>
                </nav>
                <div className="border-b-2 border-white"></div>
            </header>

            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-blue-200 relative">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-md w-full">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                        Ingrese los datos
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="cadena1"
                            value={cadena1}
                            onChange={handleInputChange}
                            placeholder="Cadena 1"
                            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <input
                            type="text"
                            name="cadena2"
                            value={cadena2}
                            onChange={handleInputChange}
                            placeholder="Cadena 2"
                            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-500"
                        />

                        <div className="mt-4 flex items-center justify-center">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                            >
                                Calcular la subsecuencia
                            </button>
                        </div>
                    </form>

                    {lcs.length > 0 && (
                        <div className="mt-6">
                            <p className="text-lg text-gray-700 text-center">
                                Longitud de la subsecuencia común más larga:{" "}
                                {lcs.length}, LCS: {lcs.join("")}
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <footer className=" absolute inset-x-0 bottom-0 p-4 text-center text-black flex justify-center ">
                <div className="border-t-2 border-white w-full ">
                    <div className="flex justify-center my-4 text-center">
                        <div className="w-1/5">
                            {teamMembers.slice(0, 3).map((member, index) => (
                                <p key={index} className="text-center">
                                    {member}
                                </p>
                            ))}
                        </div>
                        <div className="w-1/5">
                            {teamMembers.slice(3, 6).map((member, index) => (
                                <p key={index} className="text-center">
                                    {member}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
