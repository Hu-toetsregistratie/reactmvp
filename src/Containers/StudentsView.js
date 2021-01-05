import React, {useState, useEffect } from "react"
import {ColumnsStudent} from "../Components/Columns";
import {PaginaTabel} from '../Components/Tabel';
import {Spinner} from "@instructure/ui-spinner";



 const StudentsView = () => {
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
            <div className={StudentsView}>
                <PaginaTabel
                    caption="Studenten"
                    headers={ColumnsStudent}
                    rows ={student}
                    perPage = {10}
                />
            </div>
        );
    }
export {StudentsView};

 //////////////////////////////////////////////Lazy Tabel loading//////////////////////////////////////////////////////
/*
const LazyTabel =()=> {
    function fetchDataStudent () {
        const studentPromise = fetchStudent();
        return {
            student: wrapPromise(studentPromise)
        }
    }
    const
        wrapPromise = (promise) => {
            let status = 'pending';
            let result;
            let suspender = promise.then(
                student => {
                    status = 'success';
                    result = student;
                },
                err => {
                    status = 'error';
                    result = err;
                }
            );
            return {
                read() {
                    if (status === 'pending') {
                        throw suspender;
                    } else if (status === 'error') {
                        throw result;
                    } else if (status === 'success') {
                        throw result;
                    }
                }
            }
        }

    const
        fetchStudent = async () => {
            await fetch('https://hu-toetsregistratie.nl/api/student.json', {
                headers: {'Authorization': ('token 3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a')}
            })
                .then((res) => res.json())
                .catch((err) => console.log(err));
        }
        function StudentView2() {

        const resource = fetchDataStudent();
        const student = resource.student.read();

        return (

            <div className={StudentView2}>
                <PaginaTabel
                    caption="Studenten"
                    headers={ColumnsStudent}
                    rows={student}
                    perPage={10}
                />
            </div>

        );
    }
}
//export {LazyTabel};
*/