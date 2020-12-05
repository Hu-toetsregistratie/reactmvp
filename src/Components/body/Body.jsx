import React, {Component} from "react";
import FetchGrades from "./fetchGrades/FetchGrades";
import Chart from "./chart/Chart";
import CountTestResults from "./amountOfResults/CountTestResults";
import FetchStudentNames from "./fetchStudentNames/FetchStudentNames";
import FetchTests from "./fetchTests/FetchTests";

class Body extends Component {
    constructor(){
        super();
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
                {/* WIP: */}
                <FetchStudentNames />

                {/* WIP: */}
                <FetchTests />

                {/* WIP: */}
                <CountTestResults />

                {/* WIP: */}
                <FetchGrades />

                {/* WIP: All the data is defined in the constructor method located in the body-component. */}
                <Chart chartData={this.state.chartData} location="the US of A" legendPosition="bottom"/>
            </div>
        )
    }
}

export default Body;