import React, {useState,useEffect} from 'react';
import {IndividualStudentImage} from "../Components/IndividualStudentImage";
import {PaginaTabel} from "../Components/Tabel";
import {ColumnsIndividual} from "../Components/Columns";
import {IndividualRow} from "./ClickStudent";



const IndividualStudentView = () =>{

    const styles = {
        ContainerTabel: {
            maxWidth: '50%',
            maxHeight: '50%'
        }
    }
    const [naam, setNaam]= useState([]);
    const [Individual, setIndividual] = useState([]);
    const s_id = '2';
    const fetchIndividual = async () => {

        const res = await fetch(`https://hu-toetsregistratie.nl/api/cijfer.json/?student__id=${s_id}`,{
            headers: {'Authorization': ('token 74b3873bb95d80d4218104d99468529fb40ff8bd')}} )
        const Individual = await res.json();
        console.log(Individual);
        for (let i=0;i<Individual.length;i+=1){
            if (Individual[i].voldoende === true){
                Individual[i].voldoende = 'voldoende';
            }
            if (Individual[i].voldoende === false){
                Individual[i].voldoende = 'onvoldoende';
            }
        }
        const naam = Individual[1].student.voornaam + ' ' + Individual[1].student.achternaam;
        setNaam(naam);
        setIndividual(Individual);
        console.log(naam)
    }


    useEffect(()=>{
        fetchIndividual();
    },[]);
    return(
      <div className={IndividualStudentView}>
          <IndividualStudentImage naam = {naam} />
          <div style={styles.ContainerTabel}>
              <PaginaTabel
                  caption='Student Individueel'
                  headers={ColumnsIndividual}
                  rows={Individual}
                  perPage={5}
              />
          </div>
      </div>
    );
}
export {IndividualStudentView}