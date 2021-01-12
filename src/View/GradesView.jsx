import React from 'react';
import {GradesTable} from "../Containers/GradesTable";

export function GradesView() {
    return (
        <div className='content'>
            <h1>Resultaten overzicht</h1>
            <GradesTable />
        </div>
    );
}


