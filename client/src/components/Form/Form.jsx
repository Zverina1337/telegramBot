import React,{useState, useEffect} from 'react';
import './Form.css';
import { useTelegram } from './../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('')
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные',
        })
    }, [])

    useEffect(() => {
        if(!country || !street){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
    }, [country, street])
    
    return (
        <div className='form'>
            Form
            <h3>Введите ваши данные:</h3>
            <input className={'input'} type="text" placeholder='Страна' onChange={(e) => setCountry(e.target.value)} value={country}/>
            <input className={'input'} type="text" placeholder='Улица' onChange={(e) => setStreet(e.target.value)} value={street}/>

            <select value={subject} onChange={(e) => setSubject(e.target.value)} className='select'>
                <option value={"physical"}>Физ. лицо</option>
                <option value={"legal"}>Юр. лицо</option>
            </select>
        </div>
    );
}

export default Form;
