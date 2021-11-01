import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { parseLocation } from '../../utils';
import './ManeuverDisplay.css';

function ManeuverDisplay() {

    const targetLocation = useSelector((store) => store.selectedLocation);
    const [ direction, setDirection ] = useState('');
    const [ range, setRange ] = useState('');

    useEffect(() => {
        const location = parseLocation(targetLocation);
        setDirection(location.direction);
        setRange(location.range);
    }, [targetLocation]);

    return (
        <div className="maneuver-display">
            <p>Target Range: {range}</p>
            <p>Target Direction: {direction}</p>
        </div>
    );
}

export default ManeuverDisplay;
