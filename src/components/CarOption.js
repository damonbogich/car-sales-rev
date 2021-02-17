import React, {useState} from 'react';
import { connect } from "react-redux";
import {setCar} from '../actions';
import {Link} from 'react-router-dom';

const CarOption = (props) => {
    const [disabled, setDisabled] = useState(true)

    console.log(props.car, 'car option props')
    
    const setCar = (e) => {
        props.setCar(props.item);
        setDisabled(!disabled)
    };
        
    return (
        <div className="boxes">
            <div className="box">
                <h2 style={{color: 'white'}}>{props.item.name}</h2>
                <img style={{color: 'white'}} src={props.item.image} alt={props.item.name} />
                <button onClick={setCar}>Choose</button> 
                <Link to="/car"><button disabled={disabled}>Go to car</button></Link> 
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