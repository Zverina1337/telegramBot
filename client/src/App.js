import './App.css';
import React,{useEffect} from 'react';

const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            work
            <button >Закрыть</button>
        </div>
    );
}

export default App;
