import React from 'react';
import { connect } from "react-redux";

import CarOption from './CarOption';

const  Home = (props) => {
    console.log(props)
    return (
        <div>
            <h2 style={{color: 'white'}}>Please Choose your Car!</h2>
            {props.cars.map((car) => {
                return <CarOption key={car.id} item={car}/>
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cars: state.cars
    }
}

// export default Home;
export default connect(mapStateToProps, {})(Home)