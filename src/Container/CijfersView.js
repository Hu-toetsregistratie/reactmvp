import React, {useState, useEffect } from "react"
import {ColumnsCijfers} from "../Components/Columns";
import { SortTabel } from "../Components/Tabel.js";
require("node-fetch");


export function CijfersView() {

    const [cijfers, setCijfers] = useState([]);
    useEffect(() => {
        getCijfers();
    }, []);
    const getCijfers = async () => {
        const response = await fetch('https://hu-toetsregistratie.nl/api/cijfer.json', {
            headers : { 'Authorization':('token '+ '3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a')}});
        const cijfers = await response.json()
        setCijfers(cijfers)
        console.log(cijfers)
    };
    return (
        <div className={CijfersView}>
            <SortTabel
                caption="Cijfers"
                headers={ColumnsCijfers}
                rows ={cijfers}
            />

        </div>
    );
}
