import {useState} from "react"
import React from 'react';

const Addtask = ({onadd}) => {
    const [text,settext]=useState("")//by default we are setting the text variable to null
    const [day,setday]=useState("")//same as above
    const [reminder,setreminder]=useState(false)//we are setting the default value of reminder to false
    const onsubmit=(e)=>{
        e.preventDefault()//this is used when the form is submitted this preventDefault function prevents the form from getting submitted to a default page instead it will be submitted here itself 
        
        //to check if the task field is entered or not
        if(!text)
        {
            alert("enter a task")
            return
        }
        onadd({text,day,reminder})//this calls the addtask function in app.js

        settext("")//this sets the task field to emoty in the form once the submit button is clicked
        setday("")//same like above
        setreminder(false)
    }
    return (
        <form className="add-form" onSubmit={onsubmit}>{/*onSubmit refers to when the form is submitted what should the form to*/}
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Enter the task" value={text} onChange={(e)=> {settext(e.target.value)}}/>
                {/*here value ={text} refers to the const[text,setetxt] which is a state present in this file at the top and the onChange is used to transfer the value entered in text box to settext variable which is used to modify the text state,the 'e' passed as a parameter is a default parameter which represents 'events'*/}
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Enter the day and time" value={day} onChange={(e)=>{setday(e.target.value)}}/>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>{setreminder(e.currentTarget.checked)}}/>{/*checked here refers to by default whether u want the checkbox to be ticked or not and here by default reminder refers to false */}
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}    
export default Addtask
