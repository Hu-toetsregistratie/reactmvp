import React from "react";
import { Route, Switch } from 'react-router-dom'

import {GradesView} from "./Containers/GradesView";
import {StudentsView} from "./Containers/StudentsView"
import {BarChartView} from "./Containers/BarChartView"
import {IndividualStudentView} from "./Containers/IndividualStudentView";
import {getIndividualData} from "./Containers/ClickStudent";

const BaseRouter = () => (
<div>
   <Switch>
    <Route Exact path='/GradesView' component={GradesView} />
    <Route Exact path='/StudentsView' component={StudentsView} />
    <Route Exact path='/BarChartView' component={BarChartView} />
    <Route Exact path='/ClickStudent' component={getIndividualData} />
    <Route Exact path='/IndividualStudentView' component={IndividualStudentView} />
   </Switch>
   </div>

);



export { BaseRouter };