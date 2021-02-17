//action type:
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const SET_CAR = 'SET_CAR';

//action creator:
export const addFeature = (feature) => {
    console.log('addfeature action creator');
    return {
        type: ADD_FEATURE,
        payload: feature
    };
};

export const removeFeature = (feature) => {
    console.log('remove feature action creator')
    return {
        type: REMOVE_FEATURE,
        payload: feature
    };
};

export const setCar = (car) => {
    console.log('set car action creator')
    return {
        type: SET_CAR,
        payload: car
    }
} 