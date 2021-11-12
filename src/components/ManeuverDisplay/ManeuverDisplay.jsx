import { useEffect, useState } from 'react';
import { parseLocation } from '../../utils';
import './ManeuverDisplay.css';

function ManeuverDisplay({ targetLocation }) {

    const [ direction, setDirection ] = useState('');
    const [ range, setRange ] = useState('');

    useEffect(() => {
        const location = parseLocation(targetLocation);
        setDirection(location.direction);
        setRange(location.range);
    }, [targetLocation]);

    return (
        <div className="maneuver-display">
            <p className='maneuver-display-text' >Target Range: {range}</p>
            <p className='maneuver-display-text' >Target Direction: {direction}</p>
        </div>
    );
}

export default ManeuverDisplay;
