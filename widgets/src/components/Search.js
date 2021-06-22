import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() =>
    {
        const search = async () =>
        {
            const {data} =   await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            });
   
            setResults(data.query.search);
        };

        const timerId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 500);
       
 
        return (() => {
            clearTimeout(timerId);
        });
    }, [term]);

    const renderSearchResult = results.map((result) => {
        return (<div key={result.pageid} className="ui item" >
            <div className="ui right floated content">
                <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">Go</a>
            </div>
            <div className="ui content">
                <div className="ui header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html:  result.snippet }} ></span>
            </div>
        </div>);

    });
    
    return (
        <div className="ui segment">
            <form className="ui form"  >
                <div className="field">
                    <label>Search Term</label>
                    <input type="text" placeholder="Enter the Search Text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)} />
                </div>
            </form>
                    <div className="ui celled list" >

                    {renderSearchResult}


            </div>
            
        </div>
        );
}

export default Search;