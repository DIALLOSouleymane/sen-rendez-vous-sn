import React from 'react';
import './Time.scss';
// <h2>SM</h2>


function Time (props){
    console.log(props);
    return (
        <div className="TimeBloc">
           
                <p>{props.time}</p>
 
            
           
</div>
                
        
      );
}


export default Time;
