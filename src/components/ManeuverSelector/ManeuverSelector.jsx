import { FormControl } from '@material-ui/core';
import ManeuverDisplay from '../ManeuverDisplay/ManeuverDisplay';
import RangeSelector from '../RangeSelector/RangeSelector';
import StressChecker from '../StressChecker/StressChecker';
import './ManeuverSelector.css';

function ManeuverSelector() {



    return (
        <div className="maneuver-selector">
            <FormControl>
                {/* Maneuver information Display */}
                <ManeuverDisplay />

                {/* Is the ship stressed? */}
                {/* Generate Maneuver button */}
                <StressChecker />


                {/* Image Map to select Range and direction */}
                <RangeSelector />


            </FormControl>
        </div>
    );
}

export default ManeuverSelector;