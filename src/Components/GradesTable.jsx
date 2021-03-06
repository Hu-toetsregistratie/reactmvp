import React, {useState, useEffect } from "react";
import {ColumnsCijfers} from "./TableColumns";
import { TablePages } from "./Table";
import {Spinner} from "@instructure/ui-spinner";


const GradesTable = () => {
    const [loading, setLoading] = useState(false);
    const [cijfers, setCijfers] = useState([]);

    useEffect(() => {
        getCijfers();
    }, []);

    const getCijfers = async () => {
        setLoading(true);
        const response = await fetch("https://hu-toetsregistratie.nl/api/cijfer.json", {
            headers : { "Authorization":("token 74b3873bb95d80d4218104d99468529fb40ff8bd")}});
        const cijfers = await response.json();

        for (let i=0; i<cijfers.length; i+=1){
            if (cijfers[i].voldoende){
                cijfers[i].voldoende = "Voldoende";
            }
            if (!cijfers[i].voldoende){
                cijfers[i].voldoende = "Onvoldoende";
            }
            cijfers[i].naamstudent = cijfers[i].student.voornaam + ' '+ cijfers[i].student.achternaam
        }
        setCijfers(cijfers)
        setLoading(false);
    };

    if (loading) {
        return <div style={{height:"20em",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Spinner renderTitle="Loading" variant="inverse"/>
        </div>
    }

    return (
        <div className={GradesTable}>
            <TablePages
                caption="Cijfers"
                headers={ColumnsCijfers}
                rows = {cijfers}
                perPage={160}
            />
        </div>
    );
}
export {GradesTable};