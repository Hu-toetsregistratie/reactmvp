import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {PaginaTabel} from "../Tabel";
import {ColumnsCijfers} from "../Columns";
import {Spinner} from '@instructure/ui-spinner'

export const CijfersView2 = () => {
    const [cijfers, setCijfers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage] = useState(1);
    const [postPerPage] = useState(100);

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
        <div className={CijfersView2}>
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