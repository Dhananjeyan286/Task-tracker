import Individualtasks from "./individualtasks"
import React from 'react';

const Tasks = ({data,onclick,ondoubleclick}) => {
    
    return (
        <div>
            {
                data.map((maps)=>{
                    return <Individualtasks key={maps.id} task={maps} onclick={onclick} ondoubleclick={ondoubleclick}/>//<h3 key={maps.id}>{maps.text}</h3> 
                    //note: in maps u have to explicitly return using return statement as in here else it would show an error and maps.text should be inside {} else it will print maps.text itself instaed of the value inside maps.text and key is used to uniquely identify each h3 tag for every     maps.text value
                })
            }
        </div>
    )
}

export default Tasks
