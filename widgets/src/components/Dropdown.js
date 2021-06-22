import React, { useState,useEffect,useRef} from 'react';

const Dropdown = ({ options, selected, onSelectedChanged, DropdownText }) => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (dropDownRef.current && dropDownRef.current.contains(event.target)) {
                return;
            }
            console.log("body function");
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

     return () => {
           document.body.removeEventListener('click', onBodyClick);
           console.log("returned");
        };
    }, []);

    const renderedOptions = options.map(
        (option) => {
            if (option.value === selected.value) {
                return null;
            }
            return (
                <div key={option.value}
                    onClick={() => onSelectedChanged(option)}
                    className="item">
                    {option.label}
                </div>
                );
        }
    );

    console.log('@@@dropdown ref@@@ '+dropDownRef);
    return (
        <div className="ui form" ref={dropDownRef}>
            <div className="field">
                <label className="label">{DropdownText}</label>
                <div onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu  ${open ? 'visible transition' : ''}`} >{renderedOptions}</div>
                    </div>
                     
                  </div>
        </div>
        );

       


}

export default Dropdown;