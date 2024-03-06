import React from 'react';
import './namesC.scss';
import './Time.scss'
// <h2>SM</h2>
//<div className="TBloc" >
//<p>{props.userTime}</p></div>


function NameC (props){
    console.log(props);
    return (
        
            <div className="AdBloc" > 
                <div className="nameBloc" >
                    <p>{props.userName}</p></div>
                
               
           
            </div>
                
        
      );
}


export default NameC;
