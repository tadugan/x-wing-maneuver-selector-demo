import { combineReducers } from 'redux';
import selectedLocation from './selectedLocation.reducer';
import stressStatus from './stressStatus.reducer';

const rootReducer = combineReducers({
    selectedLocation,
    stressStatus,
});

export default rootReducer;
