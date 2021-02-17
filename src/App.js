import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import Home from './components/Home';

import {Route} from 'react-router-dom';
import { connect } from "react-redux";

const App = (props) => {
  console.log(props.car, 'app props');
  return (
    <div>
      <Route exact path='/' >
        <Home/>
      </Route>
      <Route path='/car'>
        <div className="boxes">
          <div className="box">
            <Header />
            <AddedFeatures />
          </div>
          <div className="box">
            <AdditionalFeatures  />
            <Total />
          </div>
        </div>
      </Route>
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}
export default connect(mapStateToProps, {})(App)
