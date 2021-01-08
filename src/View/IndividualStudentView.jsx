import React, {useState,useEffect} from 'react';
import {IndividualStudentImage} from "../Components/IndividualStudentImage";
import {TablePages} from "../Components/Table";
import {ColumnsIndividual} from "../Components/TableColumns";

const IndividualStudentView = () =>{
    const styles ={
        ContainerTabel: {
            maxWidth: '50%',
            maxHeight: '50%',
        }
    }
    const [name, setName] = useState([])
    const [Individual, setIndividual] = useState([]);
    const fetchIndividual = async () => {
        const res = await fetch('https://hu-toetsregistratie.nl/api/cijfer.json/?student__id=1',{
            headers: {'Authorization': ('token 74b3873bb95d80d4218104d99468529fb40ff8bd')}} )
        const Individual = await res.json();
        console.log(Individual);
        for (let i=0; i<Individual.length; i+=1){
            if (Individual[i].voldoende){
                Individual[i].voldoende = 'Voldoende';
            }
            if (!Individual[i].voldoende){
                Individual[i].voldoende = 'Onvoldoende';
            }
        }
        const name = Individual[1].student.voornaam + ' ' + Individual[1].student.achternaam;

        setName(name);

        setIndividual(Individual);
    }
    useEffect(()=>{
        fetchIndividual();
    },[]);

    return(
      <div className={IndividualStudentView}>
          <IndividualStudentImage name={name}/>
          <h2>Behaalde resultaten van de student.</h2>
          <div style={styles.ContainerTabel}>
              <TablePages
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