import React from 'react';
import './names.scss';
// <h2>SM</h2>
//<div className="TBloc" >
//<p>{props.userTime}</p></div>


function Name (props){
    console.log(props);
    return (
        
            <div className="AdBloc" > 
                <div className="nameBloc" >
                    <p>{props.userName}</p></div>
                
               
           
            </div>
                
        
      );
}


export default Name;
