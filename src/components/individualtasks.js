import {FaTimes} from "react-icons/fa"//this is how u use font awesome icons without using link from net nd we use here from the command line interface(cli)
import React from 'react';

const individualtasks = ({task,onclick,ondoubleclick}) => {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>{
            ondoubleclick(task.id)
        }}>
            <h3>{task.text}<FaTimes style={{cursor:"pointer",}} onClick={()=>(onclick(task.id))} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default individualtasks
