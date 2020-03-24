import React from 'react';

function Row(props) {
    return <div className={`row${props ? "-fluid" : ""}`} {...props} />;
}

export default Row;