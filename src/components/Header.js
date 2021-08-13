import Buttons from "./buttons"//here always use first letter has caps for any component tht u import for instance here use import Buttons from "./buttons" instead of , import buttons from "./buttons"
import React from 'react';
import {useLocation} from "react-router-dom" //used to get details about the current location of the website

//it is better to use starting letter as caps in file names inside components folder


const Header = (props) => {//here this props comes from thw values sent through the <Header /> tag in app.js}
    const location=useLocation()
    return (
        <header className="header">
            <h1>{props.title}</h1>
            {location.pathname==="/" && <Buttons color={props.showadd?"red":"green"} text={props.showadd?"close":"add"} onclick={props.onadd} />}{/*here onclick is a function which says what the button shld do when it is clicked.... this onlcik is a parameter which is psased to the buttons.js file there the onclick function calls this onclick function in this file  */}
            {/*note here in react to use inline styling tht is to use style tags we need to put double curly brackets like this "{{}}" */}
            {/*the location.pathname gets the current url and if it is equal to this "/" then it shows the "add" button else if the url is not this "/" and if it is smtg else like "/about" then it does not show the "add" button  */}
        </header>
    )
}
//Note: here use H caps for header bcoz if we use small h then the compiler will take it as a header tag
export default Header
