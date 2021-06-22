import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);

    }
    state = { images: [] };
   async onSearchSubmit(term) {
       console.log("Appppppp " + term);
       const response = await unsplash.get('/search/photos',
            {
                params: { query: term },
               
            }
        );/* dealing with Promise .then(response => {
            console.log(response.data.results.+'0'+.urls.regular);
        })*/
       this.setState({ images: response.data.results });
     
   }
    getImageList() {
        if (this.state.images.length > 0) {
            return <div className="ui container"> <ImageList images={this.state.images} /> </div>;
        }
    }
    render() {
       
        return (<div className="ui container" style={{ marginTop: '20px' }}>
            <SearchBar onSearchBarSubmit={this.onSearchSubmit} />
              Found: { this.state.images.length} images
            { this.getImageList()}
        </div>);
       
    }
}

export default App;
