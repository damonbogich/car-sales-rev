//action type:
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE'


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