import React from 'react';
import {IndividualStudentImage} from "../Components/IndividualStudentImage";
import {IndividualStudentTable} from "../Components/IndividualStudentTable";

export function IndividualStudentView() {
    return (
        <div>
            <IndividualStudentImage name={"Merel van Houten"}/>
            <IndividualStudentTable />
        </div>
    )
}

