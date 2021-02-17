//action type:
export const ADD_FEATURE = 'ADD_FEATURE';


//action creator:
export const addFeature = (feature) => {
    console.log('addfeature action creator');
    return {
        type: ADD_FEATURE,
        payload: feature
    };
};