import React from "react";
import { Route } from 'react-router-dom';

import {StatisticsView} from "./View/StatisticsView";
import {StudentsView} from "./View/StudentsView";
import {GradesView} from "./View/GradesView";
import {IndividualStudentView} from "./View/IndividualStudentView";
import {Toets} from "./View/TestsView";

import Home from "./View/Home";


export const BaseRouter = () => (
    <div>
        <Route Exact path="/"  component={Home} />
        <Route Exact path='/Resultaten' component={GradesView} />
        <Route Exact path='/Studenten' component={StudentsView} />
        <Route Exact path='/IndividueleStudent' component={IndividualStudentView} />
        <Route Exact path='/Statistiek' component={StatisticsView} />
        <Route Exact path='/Toetsen' component={Toets} />
    </div>
);
