import React from "react";

const Counter = (props) => {
    const count = 0;
    
    return (
        <div>
            { count && <h1>현재 카운트: { count } </h1>}
        </div>
    );
}

export default Counter;