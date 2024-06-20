import React, { useEffect, useState } from "react";

export function MeuPlano() {
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    const treinosSalvos =
      JSON.parse(localStorage.getItem("lista_de_treino")) || [];
    setTreinos(treinosSalvos);
  }, []);

  console.log(treinos);

  return (
    <div>
      <h1>Pagina MeuPlano</h1>
      <ul>
        {treinos.map(({ nome }, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}
