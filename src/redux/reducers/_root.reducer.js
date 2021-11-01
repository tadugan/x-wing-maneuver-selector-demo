import { combineReducers } from 'redux';
import selectedLocation from './selectedLocation.reducer';

const rootReducer = combineReducers({
    selectedLocation,
});

export default rootReducer;
