import React from 'react';
import {GradesTable} from "../Components/GradesTable";
import GradesAdd from "../Components/GradesAdd";
import {PostResult} from "../Components/postResult";

export function GradesView() {
    return (
        <div className='content'>
            <h1>Resultaten overzicht</h1>
            <PostResult />
            <br />
            <br />
            <br />
            <GradesAdd />
            <GradesTable />
        </div>
    );
}


