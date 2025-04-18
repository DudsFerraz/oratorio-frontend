import { useState } from "react";
import { OratorianosContext } from "./oratorianosContext";

export const OratorianosProvider = ({children}) => {
    const [oratorianos,setOratorianos] = useState([]);

    return(
        <OratorianosContext.Provider value={{oratorianos,setOratorianos}}>
            {children}
        </OratorianosContext.Provider>
    )
}