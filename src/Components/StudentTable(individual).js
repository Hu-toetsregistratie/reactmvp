import React, {useState,useEffect} from 'react';
import {PaginaTabel} from "./Tabel";
import {ColumnsIndividual} from "./Columns";
//{

const StudentIndividual = () =>{

    const [Individual, setIndividual] = useState([]);
    const fetchIndividual = async () => {
        const res = await fetch('https://hu-toetsregistratie.nl/api/cijfer.json/?student__id=1',{
                headers: {'Authorization': ('token 74b3873bb95d80d4218104d99468529fb40ff8bd')}} )
        const Individual = await res.json();
        console.log(Individual);
        setIndividual(Individual);

    }
    useEffect(()=>{
        fetchIndividual();
    },[]);


/*
  const Individual = [{
        blok: "Blok 1",
        id: 1,
        toets_code: "9806729",
        voldoende: true,
        }]
    */
    const styles = {
        Circle: {
            maxWidth: '100%',
            maxHeight: '100%',
            heigth: 'auto',
            width: 'auto',
            borderRadius: '50%'
        },
        Container: {
            maxWidth: '50%',
            maxHeight: '50%',
            float: 'right'
        },
        ContainerTabel: {
            maxWidth: '50%',
            maxHeight: '50%',
            float: 'left'
        },
        Text:{
            paddingLeft:'35%',
            float: 'left'
        }

    };
    return(

        <div  >
            <div style = {styles.Container} >
                <img style={styles.Circle} src={'https://wallpaperplay.com/walls/full/1/5/0/212353.jpg'}/>
                <h3 style={styles.Text}>Naam Pandas</h3>
            </div>
            <div style={styles.ContainerTabel}>
                <PaginaTabel
                    caption='Student Individueel'
                    headers={ColumnsIndividual}
                    rows = {Individual}
                    perPage={10}
                />
            </div>
        </div>
    );
}
export {StudentIndividual};