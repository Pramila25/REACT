import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Router from './components/Router';
import Header from './components/Header';

const items = [
    {
        title: 'What is react?',
        content:'React is a front-end javascript framework.'
    },
    {
        title: 'What is javascript?',
        content: 'javascript is a front-end javascript framework.'
    },
    {
        title: 'What is Hooks?',
        content: 'Hooks is a front-end javascript framework.'
    }
];

const options = [
    {
        label: "The color of Red",
        value:"red"
    },
    {
        label: "The color of Blue",
        value: "blue"
    },
    {
        label: "The shade of Green",
        value: "green"
    }
];





export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [selectedHeader, setselectedHeader] = useState('/');



    return (<div className="ui container" style={{ width: '90%' }}>
        <Header/>
      
        <Router path="/"  >
            <Accordion items={items} />
        </Router>
        <Router path="/search"  >
            <Search />
        </Router>
        <Router path="/dropdown"  >
            <Dropdown options={options} selected={selected} onSelectedChanged={setSelected} DropdownText="Select the color:"  />
        </Router>
        <Router path="/translate"  >
            <Translate />
        </Router>
            </div>);
};
