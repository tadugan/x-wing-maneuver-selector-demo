import { FormControl } from '@material-ui/core';
import { useSelector } from 'react-redux';
import ManeuverDisplay from '../ManeuverDisplay/ManeuverDisplay';
import RangeSelector from '../RangeSelector/RangeSelector';
import StressChecker from '../StressChecker/StressChecker';
import './ManeuverSelector.css';

function ManeuverSelector() {
    const isStressed = useSelector(store => store.stressStatus);
    const targetLocation = useSelector((store) => store.selectedLocation);

    return (
        <div className="maneuver-selector">
            <FormControl>
                {/* Maneuver information Display */}
                <ManeuverDisplay targetLocation={targetLocation} />

                {/* Is the ship stressed? */}
                {/* Generate Maneuver button */}
                <StressChecker isStressed={isStressed} />


                {/* Image Map to select Range and direction */}
                <RangeSelector />


            </FormControl>
        </div>
    );
}

export default ManeuverSelector;