import React, { Component } from "react";
import {Histogram} from "../Components/Histogram";

export class HistogramView extends Component {
    state = {
        loading: true,
    }

    async componentDidMount() {
        this.setState({loading: false})
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        }

        return(
            <div>
                <Histogram />
            </div>
        )
    }
}