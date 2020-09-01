import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown'
import Convert from './Convert'


const options = [

    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Arablic',
        value:'ar'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'English',
        value:'en'
    },
]


const Translate = ()=>{
    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('');
     return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter input</label>
                <input value = {text} onChange={(e)=>{setText(e.target.value)}} />
                </div>
            </div>
            
            <Dropdown 
            label = {'Select a language'}
            selected = {language}
            onSelectedChange = {setLanguage}
            options={options} />
            <hr/>
            <h3>Output</h3>
            <Convert text = {text}  language = {language}></Convert>
        </div>
    )
} 
export default Translate