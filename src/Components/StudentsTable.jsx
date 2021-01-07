import React, {useState, useEffect } from "react"
import {ColumnsStudent} from "./TableColumns";
import {TablePages} from "./Table";
import {Spinner} from "@instructure/ui-spinner";



 const StudentsTable = () => {
    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(false);
        useEffect(() => {
            getStudent();
        }, []);

        const getStudent = async () => {
            setLoading(true);
            const res = await fetch("https://hu-toetsregistratie.nl/api/student.json", {
                headers: {"Authorization": ("token 74b3873bb95d80d4218104d99468529fb40ff8bd")}})
                const student = await res.json();
            console.log(student);
            setStudent(student);
            setLoading(false);

        };
    if (loading) {
        return <div style={{height:"20em",display:"flex",alignItems:"center",justifyContent:"center"}}><Spinner renderTitle="Loading" variant="inverse"
        /></div>
    }

        return (
            <div>
                <h2>Studentenoverzicht</h2>
                <div className={StudentsTable}>
                    <TablePages
                        caption="Studenten"
                        headers={ColumnsStudent}
                        rows ={student}
                        perPage = {180}
                    />
                </div>
            </div>
        );
    }
export {StudentsTable};