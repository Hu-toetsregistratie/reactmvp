import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {PaginaTabel} from "../Components/Tabel";
import {ColumnsStudent} from "../Components/Columns";

export const CijfersView2 = () => {
    const [cijfers, setCijfers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostsPerPage] = useState(10);

    useEffect(() =>{
        getCijfers2();
    }, []);
    function getCijfers2() {
        const fetchCijfers2 = async () => {
            setLoading(true);
            const res = await axios
                .get('https://hu-toetsregistratie.nl/api/student.json', {
                    headers: {'Authorization': ('token 3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a')}
                });
            setCijfers(res.data);
            setLoading(false);

        }
        fetchCijfers2();
    }
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = cijfers.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div className={CijfersView2}>
            <Cijfersfunk cijfers={currentPosts} loading={loading}/>
        </div>
    );
}
const Cijfersfunk= ({cijfers, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <div className={Cijfersfunk}>
            <PaginaTabel
                caption="Studenten"
                headers={ColumnsStudent}
                rows ={cijfers}
                perPage = {10}
            />
        </div>
    );
}