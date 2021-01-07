import React, { Component } from "react";
import { ProgressCircle } from '@instructure/ui-progress'

import {Histogram} from "../Components/Histogram";
import {StatisticsTable} from "../Components/StatisticsTable";

export class StatisticsView extends Component {
    state = {
        loading: true,
    }

    async componentDidMount() {
        this.setState({loading: false})
    }

    render() {

        if (this.state.loading) {
            return (
            <div>
                <ProgressCircle
                size="small"
                screenReaderLabel="Loading completion"
                valueNow={100}
                valueMax={100}
                margin="0 small 0 0"
                shouldAnimateOnMount/>
            </div>)
        } else {
            return (
                <div>
                    <Histogram/>
                    <StatisticsTable />
                </div>
            )
        }
    }
}