import PropTypes from "prop-types"
import React from 'react';


const onclick=()=>{
    console.log("hi")
}

const buttons = ({color,text,onclick}) => {//here in header.js we have used props and for title we have used props.title,instaed of that we cann use {color,text} and inside we can use color , text instead of props.color,props.text
    return <button onClick={onclick} className="btn" style={{backgroundColor:color}}>{text}</button>//here note for some parameters like text while mentioning it we use {text} if we simply use text then nly text will be considered as a value nd text will be printed nd the value inside the text parameter will not be printed,while for onclick we use {onclick} because onclick is a function              
    }

buttons.defaultProps={//this is used to set default values to the parameters of the buttons function
    color:"steelblue",
    text:"hello",
    onclick:onclick//here this onclick calls onclick function in this file nd not the onclick function in headers.js file
}

buttons.propTypes={//this sets the data types of the parameters of buttons function, for instance if u give number as a value for text parameter it would not accept it and it will show error
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func
}

export default buttons
