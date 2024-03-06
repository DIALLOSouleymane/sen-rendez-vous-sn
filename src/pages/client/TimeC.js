import React from 'react';
import './TimeC.scss';
// <h2>SM</h2>


function TimeC (props){
    console.log(props);
    return (
        <div className="TimeBlocClient">
           
            <p>{props.time}</p>
 
        </div>
      );
}


export default TimeC;
