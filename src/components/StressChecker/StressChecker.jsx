import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { stressStatusText, toggleStress } from '../../utils';
import './StressChecker.css';


function StressChecker() {
    const dispatch = useDispatch();

    const isStressed = useSelector(store => store.stressStatus);
    const [stress, setStress] = useState(false);

    useEffect(() => {
        setStress(isStressed);
    }, [isStressed]);

    return (
        <div className='stress-checker'>
            <FormGroup>
                <FormControlLabel control={<Switch />} onChange={() => toggleStress(stress, dispatch)} label={stressStatusText(stress)} />
            </FormGroup>
        </div>
    );
}

export default StressChecker;
