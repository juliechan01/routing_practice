import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Params = (props) => {
    const { word, color, bgColor } = useParams();

    return (
        <div>
            {isNaN(word) ? ( // IS PARAM A #
                <h1 style={ {color: color, backgroundColor:bgColor} }>The word you entered was: { word } </h1>
                ) : (
                <h1 style={ {color: color, backgroundColor:bgColor} }>The number you typed was: { word }</h1>
            )}
        </div>
    );
}

export default Params;