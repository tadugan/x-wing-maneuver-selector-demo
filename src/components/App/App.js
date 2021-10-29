import './App.css';
import { logHello } from '../../utils';

function App() {
    return (
        <div className='App'>
            <h2>X-wing Maneuver Selector</h2>
            {logHello()}
        </div>
    );
}

export default App;
