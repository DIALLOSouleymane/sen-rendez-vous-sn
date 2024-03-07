import React from 'react';
import './names.scss';



function Name (props){
    console.log(props);
    return (
        
            <div className="AdBloc" > 
                <div className="nameBloc" >
                    <p>{props.userName}</p>
                </div>
                
               
           
            </div>
                
        
      );
}


export default Name;
