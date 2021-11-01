import { FormControl } from '@material-ui/core';
import RangeSelector from '../RangeSelector/RangeSelector';
import './ManeuverSelector.css';

function ManeuverSelector() {



    return (
        <div className="maneuver-selector">
            <FormControl>
                {/* Distance to target */}
                {/* <RadioGroup row>
                    <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="top"/>
                    <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="top"/>
                    <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="top"/>
                    <FormControlLabel value="4" control={<Radio />} label="Beyond 3" labelPlacement="top"/>
                </RadioGroup> */}
                {/* direction of target */}
                {/* <InputLabel id="maneuver-selector-direction">Direction of Target</InputLabel> */}
                {/* <Select
                    labelId="maneuver-selector-direction"
                    value="choose the direction of the target"
                    label="direction"
                    onChange={() => console.log('changed')}
                >
                    <MenuItem value={1}>1</MenuItem>
                </Select> */}

                {/* Image Map to select Range and direction */}
                <RangeSelector />

                {/* Is the ship stressed? */}


                {/* Generate Maneuver button */}


            </FormControl>
        </div>
    );
}

export default ManeuverSelector;