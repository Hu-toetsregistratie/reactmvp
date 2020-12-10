import React, {useState, useEffect } from "react"
import {ColumnsCijfers} from "../Columns";
import { PaginaTabel } from "../Tabel.js";
import {Spinner} from "@instructure/ui-spinner";
require("node-fetch");


export function CijfersView() {
    const [loading, setLoading] = useState(false);
    const [cijfers, setCijfers] = useState([]);
    useEffect(() => {
        getCijfers();
    }, []);
    const getCijfers = async () => {
        setLoading(true);
        const response = await fetch('https://hu-toetsregistratie.nl/api/cijfer.json', {
            headers : { 'Authorization':('token 3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a')}});
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
        <div className={CijfersView}>
            <PaginaTabel
                caption="Cijfers"
                headers={ColumnsCijfers}
                rows ={cijfers}
            />

        </div>
    );
}
