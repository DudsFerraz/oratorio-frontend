

export default function OratorianoCard(props){
    return(
        <div>
            <p>Nome: {props.json.nome}</p>
            <p>Id: {props.json.id}</p>
            <p>Data de Nascimento: {props.json.dataNascimento}</p>
            <p>CPF: {props.json.cpf}</p>
            <p>RG: {props.json.rg}</p>
            <div>
                <header>Endereco</header>
                <p>CEP: {props.json.enderecoDto.CEP}</p>
                <p>Cidade: {props.json.enderecoDto.cidade}</p>
                <p>Bairro: {props.json.enderecoDto.bairro}</p>
                <p>Rua: {props.json.enderecoDto.rua}</p>
                <p>Numero: {props.json.enderecoDto.numero}</p>
            </div>
            <p>Telefone: {props.json.telefone}</p>
            <div>
                <p>Escola: {props.json.escola}</p>
                <p>Ano escolar: {props.json.anoEscola}</p>
            </div>
            <div>
                <header>Responsaveis</header>
                {
                    props.json.responsaveisDto.map((r,i) =>(
                        <div key={i}>
                            <p>Nome: {r.nome}</p>
                            <p>CPF: {r.cpf}</p>
                            <p>Parentesco: {r.parentesco}</p>
                        </div>
                    ))
                }
            </div>
            <p>Presencas totais: {props.json.presencasTotais}</p>
        </div>
    )
    
}