import React, {useState, useEffect } from "react"
import {ColumnsStudent} from "../Components/Columns";
import { SortTabel } from '../Components/Tabel';
require("node-fetch");


export function StudentView() {
        const [student, setStudent] = useState([]);
        useEffect(() => {
            getStudent();
        }, []);
        const getStudent = async () => {
            const response = await fetch('https://hu-toetsregistratie.nl/api/student.json', {
                headers: {'Authorization': ('token ' + '3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a')}});
            const student = await response.json();
            setStudent(student);
            console.log(student)
        };

        return (
            <div className={StudentView}>
                <SortTabel
                    caption="Studenten"
                    headers={ColumnsStudent}
                    rows ={student}
                />

            </div>
        );
    }

