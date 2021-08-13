import React from 'react'
import {Link} from "react-router-dom"


const about = () => {
    return (
        <div>
            <h4 style={{paddingLeft:"5px"}}>Version 1.0.0</h4>
            {/* <a href="/">Go Back</a>         */}
            <Link to="/" className="btn">Go Back</Link>{/*instead of above <a> tag we are using Link to reload pages faster */}
        </div>
    )
}

export default about
