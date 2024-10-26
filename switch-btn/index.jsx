import ToggleButton from './switchBtn.js';

const App = () => {
    return (
        <div>
            <h1>Toggle Button Example</h1>
            <ToggleButton 
                firstElement="On" 
                secondElement="Off" 
                btnWidth="200px" 
                btnHeight="45px" 
            />
        </div>
    );
};

export default App;
