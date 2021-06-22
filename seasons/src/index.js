import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
 
   /* constructor(props) {
        super(props);
        this.state = { lat: null , errMessage: ''};

    }*/
    state = { lat: null, errMessage: '' };

    renderContent() {

        if (this.state.errMessage && !this.state.lat) {
            return (<div> {this.state.errMessage}</div>);
        }
        else if (!this.state.errMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        } else {
            return (
                <Spinner message='Please accept to locate the location'/>
      
            );
        }

    }
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
                </div>);
       }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            }
            ,
        (err) => this.setState({ errMessage: err.message })

        );
    }
};



ReactDOM.render(<App/>, document.querySelector('#root'));   