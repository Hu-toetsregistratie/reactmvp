import React, {useState, useEffect } from "react";
import {ColumnsCijfers} from "../Components/Columns";
import { PaginaTabel } from "../Components/Tabel";
import {Spinner} from "@instructure/ui-spinner";


const GradesView = () => {
    const [loading, setLoading] = useState(false);
    const [cijfers, setCijfers] = useState([]);
    useEffect(() => {
        getCijfers();
    }, []);
    const getCijfers = async () => {
        setLoading(true);
        const response = await fetch('https://hu-toetsregistratie.nl/api/cijfer.json', {
            headers : { 'Authorization':('token 74b3873bb95d80d4218104d99468529fb40ff8bd\n')}});
        const cijfers = await response.json()
        setCijfers(cijfers)
        setLoading(false);
        console.log(cijfers)
    };
    if (loading) {
        return <div style={{height:"20em",display:"flex",alignItems:"center",justifyContent:"center"}}><Spinner renderTitle="Loading" variant="inverse"
        /></div>
    }
    return (
        <div className={GradesView}>
            <PaginaTabel
                caption="Cijfers"
                headers={ColumnsCijfers}
                rows = {cijfers}
                perPage={10}
            />
        </div>
    );
}
export {GradesView};