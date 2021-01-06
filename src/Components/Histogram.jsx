import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';



export class Histogram extends Component {
    state = {
        chartData: {},
        chartOptions: {},
        data: [],
    };

    async componentDidMount() {

        const res = await fetch('https://hu-toetsregistratie.nl/api/cijfer/?')
        const d = await res.json()

        this.setState({data: d})

        const testNames = []
        const testsPassedColors = []
        const testsFailedColors = []

        const testsPassed = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        const testsFailed = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        // Get all the unique values for toets_naam:
        let testsUnique = [...new Set(d.map(test => test.toets_naam))];
        testsUnique.forEach((testName) => {
            testNames.push(`Toets ${testName}`);
            testsPassedColors.push('rgba(54, 162, 235, 0.2)')
            testsFailedColors.push('rgba(255, 99, 132, 0.2)')
        })

        // eslint-disable-next-line array-callback-return
        testsUnique.map((id) => {

            let loc = id-1;
            // eslint-disable-next-line array-callback-return
            d.map((test) => {
                if (test.toets_naam === id && test.voldoende) {
                    testsPassed[loc] += 1;

                } else if (test.toets_naam === id && !test.voldoende) {
                    testsFailed[loc] +=  1;
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
            }
        );
    }


    render() {
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