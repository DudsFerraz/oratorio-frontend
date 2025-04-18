import { useState } from "react";
import { ViewContext } from "./viewContext";

export const ViewProvider = ({children}) => {
    const [view,setView] = useState("Visualização resumida");
    
    return(
        <ViewContext value={{view,setView}}>
            {children}
        </ViewContext>
    )  
}