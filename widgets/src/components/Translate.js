import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: "Deutsch",
        value: "de"
    },
    {
        label: "Tamil",
        value: "ta"
    },
    {
        label: "Francais",
        value: "fr"
    },
    {
        label: "Italiano",
        value:"it"
    },
    {
        label: "Portugues Brasil",
        value:"pt_br"
    }
];


const Translate = () => {
    const [selected, setSelected] = useState(options[0]);
    const [currentText, setCurrentText] = useState('');
    return (<div className="ui container" style={{ width: '200px', float: 'left', padding:'10px' }}>
        <label>Enter Text:</label><br />
        <input value={currentText} onChange={(e) => setCurrentText(e.target.value)} /><br /><br /><br />

        <Dropdown options={options} selected={selected} 
            onSelectedChanged={setSelected} DropdownText="Select a Language:" />
        <br></br>

        <Convert currentText={currentText} languageSelected={selected} />
    </div>);

}

export default Translate;
