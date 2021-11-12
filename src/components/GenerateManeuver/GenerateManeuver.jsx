import { Button } from '@material-ui/core';
import { generateManeuver } from '../../utils';
import './GenerateManeuver.css';

function GenerateManeuver() {
    return (
        <div className='generate-maneuver'>
            <Button className='generate-maneuver-button' onClick={() => generateManeuver()} variant='contained' color='primary'>Generate Maneuver</Button>
            <h3 className='generate-maneuver-display'>Maneuver: </h3>
        </div>
    );
}

export default GenerateManeuver;
