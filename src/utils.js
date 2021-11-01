export const logHello = () => {
    console.log('Hello World');
};

export const logLocation = (e, locationString) => {
    e.preventDefault();
    console.log(`The target location is: ${locationString}`);
};

export const setLocation = (e, locationString, dispatch) => {
    e.preventDefault();
    console.log(`The target location is: ${locationString}`);

    dispatch({ type: 'SET_SELECTED_LOCATION', payload: locationString });
};

export const parseLocation = (locationString) => {
    const parsedArray = locationString.split('-');

    return {
        direction: parsedArray[0],
        range: parsedArray[1],
    };
};
