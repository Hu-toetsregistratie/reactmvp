import React, {useState, useEffect } from "react";
import {ColumnsCijfers} from "../Components/Columns";
import { PaginaTabel } from "../Components/Tabel";
import {Spinner} from "@instructure/ui-spinner";


const GradesView = () => {
    const [loading, setLoading] = useState(false);
    const [cijfers, setCijfers] = useState([]);
    useEffect(() => {
        getCijfers();
    }, []);
    const getCijfers = async () => {
        setLoading(true);
        const response = await fetch('https://hu-toetsregistratie.nl/api/cijfer.json', {
            headers : { 'Authorization':('token 74b3873bb95d80d4218104d99468529fb40ff8bd\n')}});
        const cijfers = await response.json()
        setCijfers(cijfers)
        setLoading(false);
        console.log(cijfers)
    };
    if (loading) {
        return <div style={{height:"20em",display:"flex",alignItems:"center",justifyContent:"center"}}><Spinner renderTitle="Loading" variant="inverse"
        /></div>
    }
    return (
        <div className={GradesView}>
            <PaginaTabel
                caption="Cijfers"
                headers={ColumnsCijfers}
                rows = {cijfers}
                perPage={10}
            />
        </div>
    );
}
export {GradesView};


////////////////////////////////////////Lazy Loading uit probeersel ///////////////////////////////////////////
const GradesView2 = () => {
    const [cijfers, setCijfers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage] = useState(1);
    const [postPerPage] = useState(10);

    useEffect(() =>{
        getCijfers2();
    }, []);
    function getCijfers2() {
        const fetchCijfers2 = async () => {
            setLoading(true);
            const res = await fetch('https://hu-toetsregistratie.nl/api/cijfer.json', {
                headers: {'Authorization': ('token 3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a')}
            });
            const cijfers = await res.json()
            setCijfers(cijfers);
            console.log(cijfers)
            setLoading(false);

        }
        fetchCijfers2();
    }
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = cijfers.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div className={GradesView2}>
            <Cijfersfunk cijfers={currentPosts} loading={loading}/>
        </div>
    );
}
const Cijfersfunk= ({cijfers, loading}) => {
    if (loading) {
        return <div style={{height:"20em",display:"flex",alignItems:"center",justifyContent:"center"}}><Spinner renderTitle="Loading" variant="inverse"
        /></div>
    }
    return (
        <div className={Cijfersfunk}>
            <PaginaTabel
                caption="Cijfers"
                headers={ColumnsCijfers}
                rows={cijfers}
                perPage={100}
            />
        </div>
    );
}