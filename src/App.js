

import React, {Suspense, lazy}from "react";
import { CijfersView } from './Container/CijfersView';
import '@instructure/canvas-theme';
//import {Spinner} from '@instructure/ui-spinner';
//const StudentView2 = lazy(() => import('./Container/StudentView2.js'));
//import {StudentView2} from "./Container/StudentView2";
//import {StudentView} from './Container/StudentView.js'
import {CijfersView2} from './Container/CijfersView2'

function App() {
  return (
      <div className="App">
          <Router>
                  <BaseRouter/>
          </Router>
      </div>

  );

}

export default App;

