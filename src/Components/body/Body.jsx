import React, {Component} from "react";
import FetchGrades from "./FetchGrades";
import Chart from "./Chart";
// import CountTestResults from "./input/selectTest/amountOfResults/CountTestResults";
import FetchStudentNames from "./FetchStudentNames";
import FetchTests from "./FetchTests";
import { Alert } from "@instructure/ui-alerts";

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{},
            studentData:{},
            resultData:{},
        }
    }

    componentWillMount(){
        this.getChartData();
        this.getStudentData()
    }

    getStudentData(){
        this.setState({studentData: {
            voornaam: 'voornaam',
            achternaam: 'achternaam',
            studentennummer: 'studentennummer'
            }})
    }

    getChartData(){
        this.setState({
            chartData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[{
                    label:'Amount of hentai books in areas of the US of A',
                    data:[617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)']}
                ]}
        });
    }
    render() {
        return(
            <div>
                <Alert
                    variant="success"
                    renderCloseButtonLabel="Close"
                    margin="small"
                    transition="none"
                >Sample success alert text. I will close w/o a transition out if you close me
                </Alert>
                <Alert
                    variant="info"
                    renderCloseButtonLabel="Close"
                    margin="small"
                >
                    Sample info text. I will fade out if you close me.
                </Alert>
                <Alert
                    variant="error"
                    renderCloseButtonLabel="Close"
                    margin="small"
                >
                    Sample error text that continues for a while
                    to demonstrate what happens when the content stretches over
                    several lines. It really does take a lot of prose to get the
                    text to wrap when you are on a high resolution screen.
                </Alert>
                <Alert
                    variant="warning"
                    margin="small"
                >
                    Sample warning text. This alert is not dismissible and cannot be closed.
                </Alert>
                {/*/!* WIP: *!/*/}
                <FetchStudentNames />

                {/*/!* WIP: *!/*/}
                <FetchTests />

                {/* WIP: */}
                {/*<CountTestResults />*/}

                {/*/!* WIP: *!/*/}
                <FetchGrades />

                {/*/!* WIP: All the data is defined in the constructor method located in the body-component. *!/*/}
                <Chart chartData={this.state.chartData} location="the US of A" legendPosition="bottom"/>
            </div>
        )
    }
}

export default Body;