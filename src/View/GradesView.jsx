import React from 'react';
import {GradesTable} from "../Containers/GradesTable";
import {PostResult} from "../Components/postResult";
import StudentsAdd from "../Components/StudentsAdd";

export function GradesView() {
    return (
        <div className='content'>
            <h1>Resultaten overzicht</h1>
            <postResult />
            <GradesTable />
        </div>
    );
}


