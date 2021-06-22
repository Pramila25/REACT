import React from 'React';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            clientId: '502280684659 - n22t9rt942m28l7fh9a3c9666gmoloa6.apps.googleusercontent.com'
            scope:'email'
        });
    }

    render() {

        return (<div>GooglrAuth</div>);
    }
}

export default GoogleAuth;