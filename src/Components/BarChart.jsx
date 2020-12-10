import React, { Component } from 'react';
import { Bar }  from 'react-chartjs-2'

const data = {
    labels: [],
    datasets: [
        {
            // styling
            label: 'string',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            // data[0] = col1, data[1] = col2, etc.
            data: [],
        }
    ]
};

export default class BarChart extends Component {

    render() {

        return (
            <Bar data={data} />
        )
    }
}

