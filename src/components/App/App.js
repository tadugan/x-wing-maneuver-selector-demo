import './App.css';
import { logHello } from '../../utils';
import ManeuverSelector from '../ManeuverSelector/ManeuverSelector';

function App() {
    return (
        <div className='App'>
            <h2>X-wing Maneuver Selector</h2>
            <ManeuverSelector />
            {logHello()}
        </div>
    );
}

export default App;
