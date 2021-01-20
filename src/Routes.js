import React from "react";
import { Route } from 'react-router-dom';

import {GradesView} from "./View/GradesView";

import {DataTableView} from "./View/DataTableView";

import {StudentsView} from "./View/StudentsView";
import {IndividualStudentView} from "./View/IndividualStudentView";
import {StatisticsView} from "./View/StatisticsView";
import {Toets} from "./View/TestsView";

import Home from "./View/Home";


export const BaseRouter = () => (
    <div>
        <Route Exact path="/"  component={Home} />
        <Route Exact path='/Resultaten' component={GradesView} />

        <Route Exact path='/DataTable' component={DataTableView} />

        <Route Exact path='/Studenten' component={StudentsView} />
        <Route Exact path='/IndividueleStudent' component={IndividualStudentView} />
        <Route Exact path='/Statistiek' component={StatisticsView} />
        <Route Exact path='/Toetsen' component={Toets} />
    </div>
);
