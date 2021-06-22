import React from 'react';



const VedioDetail = ({ VedioSelected }) => {
    
        if (!VedioSelected) {
        return <div> loading...</div>;
    }
    return (<div >
        <div className="ui embed">
            <iframe title={VedioSelected.snippet.title}  src={`https://www.youtube.com/embed/${VedioSelected.id.videoId}`} />
           
        </div>
        <div className="ui segment">
            <h4 className="ui header">   {VedioSelected.snippet.title} </h4>
            <p>{VedioSelected.snippet.description}</p>
        </div>
         </div>
           
           
       );

}
export default VedioDetail;