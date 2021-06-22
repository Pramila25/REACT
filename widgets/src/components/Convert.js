import React, { useEffect,useState } from 'react';
import axios from 'axios';

const Convert = ({ currentText, languageSelected }) => {

    const [result, setResult] = useState('');

    useEffect(() => {

        const translatedText = async () => {
            const { data } = await
                axios.post('https://translation.googleapis.com/language/translate/v2', {},
                    {
                        params: {
                            q: currentText,
                            target: languageSelected.value,
                            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                        }

                    });
           setResult(data.data.translations[0].translatedText);

        }

        const timerId = setTimeout(() => {
            if (currentText) {
                translatedText();
            }
        }, 500);


        return (() => {
            clearTimeout(timerId);
        });
       

    }  , [currentText, languageSelected]);

    return (<div> Output
        <div>
            {result}
        </div>
    </div>);

}

export default Convert;