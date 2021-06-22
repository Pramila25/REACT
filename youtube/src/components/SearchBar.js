import React from 'react';

class SearchBar extends React.Component {
    state = { searchterm: "" };
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.searchterm);
    }
    render() {
        return (<div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit} >
                <div className="field">
                    <label>Search Videos </label>
                    <input type="text" placeholder="Enter the Image Search"
                        value={this.state.term}
                        onChange={(e) => this.setState({ searchterm: e.target.value.toUpperCase() })} />
                </div>
            </form>
        </div> );
    }

}

export default SearchBar;