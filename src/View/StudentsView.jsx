import React from 'react';
import StudentInvoeren from "../Components/StudentsAdd";
import {StudentsTable} from "../Components/StudentsTable";

export function StudentsView() {
    return (
        <div className='content'>
            <h3>Voeg een student toe.</h3>
            <StudentInvoeren/>
            <StudentsTable />
        </div>
    );
}

