import React, {useState,useEffect} from 'react';
import {IndividualStudentImage} from "../Components/IndividualStudentImage";
import {PaginaTabel} from "../Components/Tabel";
import {ColumnsIndividual} from "../Components/Columns";

const IndividualStudentView = () =>{
    const styles ={
        ContainerTabel: {
            maxWidth: '50%',
            maxHeight: '50%',
        }
    }

    const [Individual, setIndividual] = useState([]);
    const fetchIndividual = async () => {
        const res = await fetch('https://hu-toetsregistratie.nl/api/cijfer.json/?student__id=1',{
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
        setIndividual(Individual);
    }
    useEffect(()=>{
        fetchIndividual();
    },[]);

    return(
      <div className={IndividualStudentView}>
          <IndividualStudentImage />
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