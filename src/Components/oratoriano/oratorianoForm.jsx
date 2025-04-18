import { useContext, useState } from "react"
import oratorianoService from "../../services/oratorianoService";
import useOratorianos from "../../hooks/useOratorianos";
import { ViewContext } from "./Context/viewContext";

export default function OratorianoForm(){

    const [nome,setNome] = useState(null);
    const [dataNascimento,setDataNascimento] = useState(null);

    const {fetchOratorianosShort,fetchOratorianosFull} = useOratorianos();
    const {view} = useContext(ViewContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        oratorianoService.register({
            "nome": nome,
            "dataNascimento": dataNascimento  
        }).then(() => {
            if(view==="Visualização resumida"){
                fetchOratorianosShort();
            }else{
                fetchOratorianosFull();
            }
        });
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <header>Registrar Oratoriano</header>
            <label htmlFor="nome">Nome:</label>
            <input 
                required
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite o nome"
                onChange={(e)=> setNome(e.target.value)}
                />
            
            <label htmlFor="dataNascimento">Data de nascimento:</label>
            <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            onChange={(e)=> setDataNascimento(e.target.value)}
            />

            <button type="submit">Enviar</button>
        </form>
    )
}