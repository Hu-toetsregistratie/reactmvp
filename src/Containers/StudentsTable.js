import React, {useState, useEffect } from "react"
import {ColumnsStudent} from "../Components/TableColumns";
import {TablePages} from '../Components/Table';
import {Spinner} from "@instructure/ui-spinner";



 const StudentsTable = () => {
    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(false);
        useEffect(() => {
            getStudent();
        }, []);

        const getStudent = async () => {
            setLoading(true);
            const res = await fetch('https://hu-toetsregistratie.nl/api/student.json', {
                headers: {'Authorization': ('token 74b3873bb95d80d4218104d99468529fb40ff8bd')}})
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
            <div className={StudentsTable}>
                <TablePages
                    caption="Studenten"
                    headers={ColumnsStudent}
                    rows ={student}
                    perPage = {10}
                />
            </div>
        );
    }
export {StudentsTable};