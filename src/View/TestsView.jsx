import React from 'react';
import ToetsInvoeren from "../Components/TestsAdd";
import { TestsTable } from "../Components/TestsTable";

export function Toets() {
    return (
        <div className="content">
            <h1>Toetsen overzicht</h1>
            <ToetsInvoeren/>
            <TestsTable />
        </div>
    );
}

