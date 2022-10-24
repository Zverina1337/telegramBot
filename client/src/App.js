import './App.css';
import React,{useEffect} from 'react';
import { useTelegram } from './components/hooks/useTelegram';


function App() {
    const { tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            <button onClick={onToggleButton}>Toggle</button>
        </div>
    );
}

export default App;
