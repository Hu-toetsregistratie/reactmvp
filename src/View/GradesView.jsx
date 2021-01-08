import React from 'react';
import {GradesTable} from "../Components/GradesTable";
import ResultaatInvoeren from "../Components/GradesAdd";

export function GradesView() {
    return (
        <div className='content'>
            <h1>Resultaten overzicht</h1>
            <ResultaatInvoeren/>
            <GradesTable />
        </div>
    );
}


