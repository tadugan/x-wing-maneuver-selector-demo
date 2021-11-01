import { FormControl } from '@material-ui/core';
import targetSelectorImage from '../../images/TargetImage_Resize_v1.png';
import { logLocation } from '../../utils';
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
                <img src={targetSelectorImage} useMap="#image-map" alt="Location Picker"/>

                <map name="image-map">
                    <area onClick={(e) => logLocation(e, 'bull1')} alt="Bullseye 1" title="Bullseye 1" href="" coords="260,178,293,244" shape="rect" />
                    <area onClick={(e) => logLocation(e, 'bull2')} alt="Bullseye 2" title="Bullseye 2" href="" coords="293,176,260,120" shape="rect" />
                    <area onClick={(e) => logLocation(e, 'bull3')} alt="Bullseye 3" title="Bullseye 3" href="" coords="261,60,292,118" shape="rect" />
                    <area onClick={(e) => logLocation(e, 'bull4')} alt="Bullseye 4" title="Bullseye 4" href="" coords="260,2,293,58" shape="rect" />
                </map>

                {/* Is the ship stressed? */}


                {/* Generate Maneuver button */}


            </FormControl>
        </div>
    );
}

export default ManeuverSelector;