import { FormControl } from '@material-ui/core';
import ManeuverDisplay from '../ManeuverDisplay/ManeuverDisplay';
import RangeSelector from '../RangeSelector/RangeSelector';
import './ManeuverSelector.css';

function ManeuverSelector() {



    return (
        <div className="maneuver-selector">
            <FormControl>
                {/* Maneuver information Display */}
                <ManeuverDisplay />

                {/* Image Map to select Range and direction */}
                <RangeSelector />

                {/* Is the ship stressed? */}


                {/* Generate Maneuver button */}


            </FormControl>
        </div>
    );
}

export default ManeuverSelector;