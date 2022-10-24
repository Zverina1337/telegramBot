import './App.css';
import React,{useEffect} from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';


function App() {
    const { tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            {/* <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes> */}
            {window.Telegram.WebApp.initDataUnsafe.user}
        </div>
    );
}

export default App;
