import React from 'react';
import StudentInvoeren from "../Components/StudentsAdd";
import {StudentsTable} from "../Containers/StudentsTable";

export function StudentsView() {
    return (
        <div className='content'>
            <h1>Studenten</h1>
            <StudentInvoeren/>
            <StudentsTable />
        </div>
    );
}

