import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions';

const AdditionalFeature = props => {
  //when add is clicked we want to add the clicked on feature to the cars feature array and remove
  //it from the additional features array
  const addFeature = (e) => {
    console.log('add feature event')
    e.preventDefault();
    console.log(e.target, 'e.target')
    props.addFeature(props.feature);
    //need an action creator here
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
