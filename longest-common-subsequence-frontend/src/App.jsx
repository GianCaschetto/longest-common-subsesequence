import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cadena1, setCadena1] = useState("");
  const [cadena2, setCadena2] = useState("");
  const [lcs, setLcs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "cadena1") {
      setCadena1(value);
    } else if (name === "cadena2") {
      setCadena2(value);
    }
  };

  //Comunicacion con el servidor
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
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cadena1"
          value={cadena1}
          onChange={handleInputChange}
          placeholder="Cadena 1"
        />
        <input
          type="text"
          name="cadena2"
          value={cadena2}
          onChange={handleInputChange}
          placeholder="Cadena 2"
        />
        <input type="submit" value="Calcular la subsecuencia" />
      </form>

      {lcs && (
        <p>
          Longitud de la subsecuencia común más larga: {lcs.length}, LCS: {lcs}
        </p>
      )}
    </main>
  );
}

export default App;
