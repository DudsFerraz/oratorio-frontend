import { useContext, useEffect, useCallback } from "react";
import oratorianoService from "../services/oratorianoService";
import { OratorianosContext } from "../Components/oratoriano/Context/oratorianosContext";
import { OrdemContext } from "../Components/oratoriano/Context/ordemContext";
import { ViewContext } from "../Components/oratoriano/Context/viewContext";


export default function useOratorianos() {
    const { oratorianos, setOratorianos } = useContext(OratorianosContext);
    const {ordem} = useContext(OrdemContext);
    const {view} = useContext(ViewContext);

    const fetchOratorianosFull = useCallback(() => {
        return oratorianoService.getAllFull(ordem).then((response) => {
            setOratorianos(response.data);
        });
    }, [setOratorianos,ordem]);

    const fetchOratorianosShort = useCallback(() => {
        return oratorianoService.getAllShort(ordem).then((response) => {
            setOratorianos(response.data);
        });
    }, [setOratorianos,ordem]);

    useEffect(() => {
        view=== "Visualização resumida" ? fetchOratorianosShort(ordem) : fetchOratorianosFull(ordem)

    }, [fetchOratorianosShort,fetchOratorianosFull,view,ordem]);

    return { oratorianos, fetchOratorianosShort, fetchOratorianosFull };
}