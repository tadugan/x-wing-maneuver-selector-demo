import { combineReducers } from 'redux';
import selectedLocation from './selectedLocation.reducer';
import isStressed from './isStressed.reducer';

const rootReducer = combineReducers({
    selectedLocation,
    isStressed,
});

export default rootReducer;
