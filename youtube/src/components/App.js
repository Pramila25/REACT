import React from 'react';
import SearchData from './SearchBar';
import VideoList from './VideoList';
import VedioDetail from './VedioDetail';
import videosAPI from '../API/videosAPI';

const KEY = 'AIzaSyCQzNK3fc7ADCncmJjfc2NLdWSrJMySwy4';

class App extends React.Component {

    state = { videos: [], selectedVedio: null };
   
    onSearchSubmitFunc = async (searchterm) => {
   
        const res = await videosAPI.get('/search', {
            params: {
                query: searchterm,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }

        });
        this.setState({ videos: res.data.items });
        console.log(res.data.items);
    }

    passDataToVideoList() {
        return <VideoList onVedioSelect={this.onVedioSelect} videosDet={this.state.videos}/>;
    }

    onVedioSelect = (vedio) => {
        this.setState({ selectedVedio:vedio});
    }
    
    render() {
        return (<div className="ui container">
            <div className="ui container">
                <SearchData onSearchSubmit={this.onSearchSubmitFunc} />
            </div>
            <div className="ui vertically divided grid">
                <div className="two column row">
                    <div className="eleven wide column">
                     <VedioDetail VedioSelected={this.state.selectedVedio} />
                    </div>
                    <div className="five wide column">
                        {this.passDataToVideoList()}
                    </div>
                </div>
            </div>
       </div>

           
         ); 
    }


}

export default App;