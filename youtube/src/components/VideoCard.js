import React from 'react';
import './VideoCard.css';

const VideoCard = ({ videocardDet, onVedioSelect }) => {
    
    return (
    
        <div onClick={(e) => onVedioSelect(videocardDet)} className="video-item item">
            <img alt={videocardDet.snippet.title} src={videocardDet.snippet.thumbnails.medium.url} className="ui image" />
            <div className="content">
                    <div className="header">{videocardDet.snippet.title}
                    </div>
               
                </div>
            </div>          

            );
}

export default VideoCard;