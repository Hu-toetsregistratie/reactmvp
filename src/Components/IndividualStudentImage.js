import React from 'react';

const IndividualStudentImage = () =>{


    const styles = {
        Circle: {
            maxWidth: '100%',
            maxHeight: '100%',
            height: 'auto',
            width: 'auto',
            borderRadius: '50%'
        },
        Container: {
            maxWidth: '50%',
            maxHeight: '50%',
            float: 'right'
        },

        Text:{
            paddingLeft:'35%',
            float: 'left'
        }

    };
    return(

        <div>
            <div style = {styles.Container} >
                <img alt="Student" style={styles.Circle} src={'https://wallpaperplay.com/walls/full/1/5/0/212353.jpg'}/>
                <h3 style={styles.Text}>Naam Pandas</h3>
            </div>

        </div>
    );
}
export {IndividualStudentImage};