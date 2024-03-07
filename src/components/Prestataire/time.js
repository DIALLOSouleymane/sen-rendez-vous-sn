import React from 'react';
import './Time.scss';



function Time (props){
    console.log(props);
    return (
        <div className="TimeBloc">
           
            <p>{props.time}</p>
            
        </div>
                
        
      );
}


export default Time;
