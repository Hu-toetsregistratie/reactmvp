import React from 'react';

const IndividualStudentImage = (props) =>{
    const styles = {
        Circle: {
            maxWidth: '120px',
            maxHeight: '120px',
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
                <img alt="Student" style={styles.Circle} src={'https://images.pexels.com/photos/4855548/pexels-photo-4855548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
                <h3 style={styles.Text}>{props.name}</h3>
            </div>

        </div>
    );
}
export {IndividualStudentImage};