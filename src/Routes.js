import React from "react";
import { Route } from 'react-router-dom'

import {GradesView} from "./Containers/GradesView";
import {StudentsView} from "./Containers/StudentsView"
import {BarChartView} from "./Containers/BarChartView"
import {IndividualStudentView} from "./Containers/IndividualStudentView";


const BaseRouter = () => (
<div>
    <Route Exact path='/GradesView' component={GradesView} />
    <Route Exact path='/StudentsView' component={StudentsView} />
    <Route Exact path='/BarChartView' component={BarChartView} />
    <Route Exact='/StudentIndividual' component={IndividualStudentView}/>
</div>

);



export { BaseRouter };