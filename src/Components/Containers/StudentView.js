import React, {useState, useEffect } from "react"
import {ColumnsStudent} from "../Columns";
import {PaginaTabel} from '../Tabel';
import {Spinner} from "@instructure/ui-spinner";
require("node-fetch");



export function StudentView() {
    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(false);
        useEffect(() => {
            getStudent();
        }, []);

        const getStudent = async () => {
            setLoading(true);
            const res = await fetch('https://hu-toetsregistratie.nl/api/student.json', {
                headers: {'Authorization': ('token 3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a')}})
                const student = await res.json();

            setStudent(student);
            setLoading(false);
            console.log(student)
        };
    if (loading) {
        return <div style={{height:"20em",display:"flex",alignItems:"center",justifyContent:"center"}}><Spinner renderTitle="Loading" variant="inverse"
        /></div>
    }

        return (
            <div className={StudentView}>
                <PaginaTabel
                    caption="Studenten"
                    headers={ColumnsStudent}
                    rows ={student}
                    perPage = {10}
                />
            </div>
        );
    }

