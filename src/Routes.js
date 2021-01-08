import React from "react";
import { Route, Switch } from 'react-router-dom'

import {GradesTable} from "./Containers/GradesTable";
import {StudentsTable} from "./Containers/StudentsTable"
import {BarChartView} from "./Containers/BarChartView"
import {IndividualStudentTable} from "./Containers/IndividualStudentTable";
import {getIndividualData} from "./Containers/ClickStudent";
import {Test} from './Components/Base/Test'

const BaseRouter = () => (
<div>
   <Switch>
    <Route Exact path='/GradesTable' component={GradesTable} />
    <Route Exact path='/StudentsTable' component={StudentsTable} />
    <Route Exact path='/BarChartView' component={BarChartView} />
    <Route Exact path='/ClickStudent' component={getIndividualData} />
    <Route Exact path='/IndividualStudentTable' component={IndividualStudentTable} />
    <Route Exact path='/Test' component={Test} />
   </Switch>
   </div>

);



export { BaseRouter };