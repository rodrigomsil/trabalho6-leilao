import { useEffect, useState } from "react";
import { api } from "../services/Endpoints";
import { useHistory } from "react-router-dom";


export function ListagemParticipante() {
  const [participantes, setParticipantes] = useState([]);
  const history = useHistory();
  useEffect(() => {
    try {
      const loads = async () => {
        const response = await api.get(`participante`);
        console.log(response.data);
        setParticipantes(response.data);
      };

      loads();
    } catch (error) {}
  }, []);

  function handleEditar(id) {
    history.push(`participantes/${id}`);
  }

  async function handleApagar(id) {
    try {
      console.log("teste", id);
      await api.delete(`participante/${id}`);
      setParticipantes((p) => [...participantes.filter((a) => a.id !== id)]);
      console.log("Excluido com Sucesso");
    } catch (error) {
      console.log("Ocorreu um erro");
    }
  }

  return (
    <div className="row">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="row mt-4">
          <div className="col-sm-10">
            <div className="h1 mt-4">Participantes</div>
          </div>

          <div className="col-sm-2">
            <a href="/Novo" className="btn btn-primary p-4 h-10">
              Novo
            </a>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-12 flex-fill">
          <div className="card bg-light">
            <div className="card-body">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">CPF</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Opções</th>
                  </tr>
                </thead>
                <tbody>
                  {participantes.map((participante) => (
                    <tr key={participante.id}>
                      <td>{participante.id}</td>
                      <td>{participante.cpf}</td>
                      <td>{participante.nome}</td>
                      <td className="d-flex flex-row">
                        
                        <button
                          type="button"
                          onClick={() => handleEditar(participante.id)}
                          className="orange btn btn-warning text-light"
                        >
                          Editar
                        </button>
                        
                        <button
                          type="button"
                          style={{ marginRight: 20 }}
                          onClick={() => handleApagar(participante.id)}
                          className="btn btn-danger text-light"
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}