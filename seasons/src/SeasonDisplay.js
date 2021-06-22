
import React from 'react';
import ReactDOM from 'react-dom';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: { text: 'Let hit the beach', iconName: 'sun' },
    winter: { text: 'Burn, Its chilly', iconName: 'snowflake' }
}
const getSeason = (lat, mon) => {
    if (mon < 2 && mon < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>  {text} </h1>
            <i className={`${iconName} icon massive icon-right`} />
          </div>
    );
};

export default SeasonDisplay;