import OratorianoCard from "./oratorianoCard";
import useOratorianos  from "../../hooks/useOratorianos";
import OratorianoCardShort from "./oratorianoCardShort";
import { useContext, useState } from "react";
import { ViewContext } from "./Context/viewContext";
import { OrdemContext } from "./Context/ordemContext";


export default function Oratorianos(){
    const {oratorianos,fetchOratorianosFull,fetchOratorianosShort} = useOratorianos();
    const {view,setView} = useContext(ViewContext);
    const {setOrdem} = useContext(OrdemContext);

    const [ordemTipo,setOrdemTipo] = useState("ID");
    const [ordemSentido,setOrdemSentido] = useState("Crescente");


    function clickView(){
        if(view==="Visualização resumida"){
            fetchOratorianosFull().then(() => {
                setView("Visualização extendida");
            })
        }else{
            fetchOratorianosShort().then(() =>{
                setView("Visualização resumida")
            })
        }
    }

    function clickOrdemTipo(){
        const novoTipo = ordemTipo==="ID" ? "Idade" :
            ordemTipo==="Idade" ? "Nome" : 
            ordemTipo==="Nome" ? "Presencas" : "ID"

        setOrdemTipo(novoTipo)
        setOrdem(`${novoTipo}${ordemSentido}`);
    }

    function clickOrdemSentido(){
        const novoSentido = ordemSentido==="Crescente" ? "Decrescente" : "Crescente"

        setOrdemSentido(novoSentido)
        setOrdem(`${ordemTipo}${novoSentido}`);
    }   

    return(
        <div>
            <button onClick={clickView}>{view}</button>
            <div>
                <header>Ordenação</header>
                <button onClick={clickOrdemTipo}>{ordemTipo}</button>
                <button onClick={clickOrdemSentido}>{ordemSentido}</button>
            </div>
            {
                view==="Visualização resumida" ?
                oratorianos.map((j,index) => (
                    <OratorianoCardShort key={index} json={j}/>
                )):
                oratorianos.map((j,index) => (
                    <OratorianoCard key={index} json={j}/>
                ))
            }
            
        </div>
    )
}