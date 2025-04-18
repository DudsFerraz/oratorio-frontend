import { useState } from "react";
import { OrdemContext } from "./ordemContext";

export const OrdemProvider = ({children}) => {
    const [ordem,setOrdem] = useState("IDCrescente");

    return(
        <OrdemContext value={{ordem,setOrdem}}>
            {children}
        </OrdemContext>
    )
}