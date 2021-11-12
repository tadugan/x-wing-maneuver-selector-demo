import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { stressStatusText, toggleStress } from '../../utils';
import './StressChecker.css';


function StressChecker({ isStressed }) {
    const dispatch = useDispatch();

    const [stress, setStress] = useState(false);

    useEffect(() => {
        setStress(isStressed);
    }, [isStressed]);

    return (
        <div className='stress-checker'>
            <div className='stress-checker-switch' >
                <FormGroup>
                        <FormControlLabel control={<Switch />} onChange={() => toggleStress(stress, dispatch)} label={stressStatusText(stress)} />
                </FormGroup>
            </div>
        </div>
    );
}

export default StressChecker;
