import { useState } from "react";
import { api } from "../services/Endpoints";

export function NovoParticipante() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  async function handleSubmit(e){
    try {
      e.preventDefault()

      console.log({
        cpf, nome
      })
  
    const participanteNovo = await  api.post('participante', {
        nome, cpf
      })
      console.log('participante: ', participanteNovo)
    } catch (error) {
      alert('Ocorreu um erro')
    }
  }

  return (
    <div className="container mt-4 p-4 card">

       <div className="row">
         <h1>Cadastro de Participante</h1>
       </div>

      <form className="card-body mt-4" onSubmit={handleSubmit} action="">

        
        <div className="row">
          <div className="col-6">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="cpf"
                placeholder="CPF"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
              />
              <label htmlFor="cpf">CPF</label>
            </div>
          </div>

          <div className="col-6">
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="nome"
                placeholder="Nome"
                value={nome}
                onChange={e => setNome(e.target.value)}

              />
              <label htmlFor="nome">Nome</label>
            </div>
          </div>
        </div>

        <button style={{
          marginRight: 20
        }} className="btn btn-primary mt-4 p-2 "type="submit">Cadastrar</button>
        <button className="btn btn-primary mt-4 p-2 "type="reset">Limpar</button>
      </form>
    </div>
  );
}