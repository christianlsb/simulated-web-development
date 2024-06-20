import { TreinosRecomendados } from "../../components";
import { treinos } from "../../data";

export function Home() {
  return (
    <div>
      <h1>Pagina Home</h1>
      <TreinosRecomendados lista_treinos={treinos} />
    </div>
  );
}
