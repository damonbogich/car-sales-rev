import React from 'react';
import { connect } from "react-redux";
import {setCar} from '../actions';
import {Link} from 'react-router-dom';

const CarOption = (props) => {

    const setCar = (e) => {
        e.preventDefault();
        props.setCar(props.item);
    };

    return (
        <div className="boxes">
            <div className="box">
                <h2 style={{color: 'white'}}>{props.item.name}</h2>
                <img style={{color: 'white'}} src={props.item.image} alt={props.item.name} />
                <button onClick={setCar}>Choose</button> 
                <Link to="/car"><button>Go to car</button></Link> 
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        car: state.car
    }
}

// export default CarOption;
export default connect(mapStateToProps, {setCar})(CarOption);