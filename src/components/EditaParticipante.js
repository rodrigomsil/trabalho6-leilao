import { useEffect, useState } from 'react';
import { useRouteMatch,  useHistory } from 'react-router-dom';
import { api } from '../services/Endpoints';

export function EditaParticipante(){


const { params } = useRouteMatch();
  console.log('params', params)
  const history = useHistory();


  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    try {
      const loads = async () => {
        const response = await api.get(`participante/${params?.id}`);
        console.log(response.data);
    
        setNome(response.data.nome)
        setCpf(response.data.cpf)
      };

      loads();
    } catch (error) {}
  }, [params]);


  async function handleSubmit(e){
    try {
      e.preventDefault()

      console.log({
        cpf, nome
      })
  
    const participanteNovo = await  api.put(`participante/${params?.id}`, {
        nome, cpf
      })
      console.log('participante: ', participanteNovo)
      history.push(`participantes`);
    } catch (error) {
      alert('Ocorreu Erro Ao enviar')
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
     }} className="btn btn-success mt-3 mx-3"type="submit">Editar</button>
 
   </form>
 </div>
  );
 }