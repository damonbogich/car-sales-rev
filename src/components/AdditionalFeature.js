import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions';

const AdditionalFeature = props => {

  const addFeature = (e) => {
    console.log('add feature event')
    e.preventDefault();
    console.log(e.target, 'e.target')
    //action creator needs to be called as a prop
    props.addFeature(props.feature);
  }
  return (
    <li>
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
