import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {Spinner} from "@instructure/ui-spinner";



export class Histogram extends Component {
    state = {
        chartData: {},
        chartOptions: {},
        data: [],
        loading: true
    };

    async componentDidMount() {

        const res = await fetch('https://hu-toetsregistratie.nl/api/cijfer/?')
        const d = await res.json()

        this.setState({data: d})

        const testNames = []
        const testsPassedColors = []
        const testsFailedColors = []

        // Graph displays 18 different tests so we need 18 different zeros
        // This is far from ideal but it was the best solution I had back then...
        const testsPassed = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        const testsFailed = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        // Gets all the unique values for the toets_naam key from the api-call:
        let testsUnique = [...new Set(d.map(test => test.toets_naam))];

        // @WHAT:
        // Creates a new list for every unique value for toets_naam.
        // Also adds a new value in the testsPassedColors and testsFailedColors lists' for every unique value of toets_naam.
        // @WHY:
        // We want the names of the tests to be a string and not an integer.
        // The values in the api are in integer formar (so 1,2,3, etc.)
        // We want "toets 1, toets 2, toets 3, ...' etc.
        testsUnique.forEach((testName) => {
            testNames.push(`Toets ${testName}`);

            // adds a color value for each unique element (= each unique test)
            testsPassedColors.push('rgba(54, 162, 235, 0.2)')
            testsFailedColors.push('rgba(255, 99, 132, 0.2)')
        })

        // eslint-disable-next-line array-callback-return
        testsUnique.map((id) => {

            let loc = id-1;
            // eslint-disable-next-line array-callback-return
            d.map((test) => {
                // this loop counts all the passed and failed grades into the two arrays testsPassed and testsFailed
                if (test.toets_naam === id && test.voldoende) {
                    testsPassed[loc] += 1;      // if voldoende=true, add 1 to the position [i] in the array testsPassed

                } else if (test.toets_naam === id && !test.voldoende) {
                    testsFailed[loc] +=  1;      // if voldoende=false, add 1 to the position [i] in the array testsFailed
                }
            })
        })

        // saving the data to the components' state
        this.setState({
                chartData: {
                    labels: testNames,
                    datasets: [
                        {
                            label: ['Voldoendes'],
                            data: testsPassed,
                            backgroundColor: testsPassedColors,
                            borderColor: testsPassedColors,
                            borderWidth: 0.7,
                        },
                        {
                            label: ['Onvoldoendes'],
                            data: testsFailed,
                            backgroundColor: testsFailedColors,
                            borderColor: testsFailedColors,
                            borderWidth: 0.7,
                        }
                    ]},

                chartOptions: {
                    barValueSpacing: 30,
                    scales: {yAxes: [{ticks: {
                                beginAtZero: true,
                                min: 0,}}]}
                },
            loading: false
            }
        );
    }


    render() {
        if (this.state.loading) {
            return <div style={{height:"20em",display:"flex",alignItems:"center",justifyContent:"center"}}><Spinner renderTitle="Loading" variant="inverse"
            /></div>
        }
        const HistogramStyle = {
           maxWidth: '600px',
        }
        return (
            <div>
                <h2> Resultaten van toets 1 tot en met toets 18 </h2>
                <div style={HistogramStyle}>
                    <Bar data={this.state.chartData} options={this.state.chartOptions}/>
                </div>
            </div>
        )
    }
}