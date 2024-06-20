import React from "react";

export function TreinosRecomendados({ lista_treinos }) {
  function adicionarTreino(id, nome, descricao, tempo) {
    const novoTreino = { id, nome, descricao, tempo };

    const treinosSalvos =
      JSON.parse(localStorage.getItem("lista_de_treino")) || [];

    const novosTreinos = [...treinosSalvos, novoTreino];

    localStorage.setItem("lista_de_treino", JSON.stringify(novosTreinos));

    alert(`Treino ${nome} adicionado ao seu plano!`);
  }

  return (
    <section>
      <h2>Treinos recomendados</h2>
      <ul>
        {lista_treinos.map(({ id, exercicio: { nome, descricao, tempo } }) => (
          <li key={id}>
            <div>{nome}</div>
            <div>{descricao}</div>
            <div>{tempo}</div>
            <button onClick={() => adicionarTreino(id, nome, descricao, tempo)}>
              Adicionar ao Meu Plano
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
