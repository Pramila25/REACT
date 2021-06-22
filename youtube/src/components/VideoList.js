import React from 'react';
import VideoCard from './VideoCard';


const VideoList = (props) => {

    const videos = props.videosDet.map(
        (vid) => {
            return <VideoCard key={vid.id.videoId} onVedioSelect={props.onVedioSelect} videocardDet={vid} />
        }
    );
    return <div role="list" className="ui divided relaxed list">{videos}</div>;
  
};


export default VideoList;





