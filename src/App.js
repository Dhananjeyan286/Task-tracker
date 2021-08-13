/*to run the file,type "npm start" to run the code, 
it uses the json server as a database*/


import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"//we are importing BrowserRouter and we are using an alias for it as Router
import Header from "./components/Header"
import Tasks from "./components/tasks"
import Addtask from "./components/Addtask"
import Footer from "./components/footer"
import About from "./components/about"
import {useState,useEffect} from "react" //this is used for using states ,states are the values or data used in the components,,,,useEffect is used to load data from the json server....to run json server use npm run server




const App=()=> { 
    const[showadd,setshowadd]=useState(false)//showadd decides whether to show the form toadd task or not 
    const [data,setdata]=useState([])//here data is the name of the object and setdata is used when we want to modify the values inside the object because the state objects are not mutable
    //used to change the showadd to true or false
    const onaddbtn=()=>{
        setshowadd(!showadd)
    }

    useEffect(() => {//useEffect is used when the original page is loaded the data for tht page is fetched from somewhere else for instance here we use json server,so the data from the json server is delivered to the original page for which useEffect is used
        const adddata=async()=>{
            const datas=await fetchdata()
            setdata(datas)
        }

        adddata()//here is where the function adddata() is called
    }, [])//the empty square brackets[] here is used to pass dependancies tht is once the adddata() function is loaded whether any data in the original page needs to be changed or not is declared only here

    //function to get the data from the json server
    const fetchdata=async()=>{
        const res=await fetch("http://localhost:5000/data")//the res variable goes to this page and fetches the data
        const data=await res.json()//the fetched data is stored in json format in this variable

        return data
    }

    //used to add a task to the data when "save task" button is clicked
    const addtask=async(task)=>{
        const res=await fetch("http://localhost:5000/data",{method:"POST",headers:{"content-type":"application/json"},body: JSON.stringify(task)})    
        const newtask=await res.json()
        setdata([...data,newtask])

        // const id=Math.floor(Math.random()*10000)+1//for automatic generation of IDs
        // const newtask={id,...task}
        // setdata([...data,newtask])
    }


    //used to remove a task when the 'x' icon is click
    const deletetask=async(id)=>{
        await fetch("http://localhost:5000/data/"+id,{
            method:"delete"
        })


        setdata(data.filter((task)=>{
            if(task.id!==id)
                return task
            return null
        }))
    }

    //used to mark the task with green as a symbol of completion on double click
    const successtask=async(id)=>{
    //     setdata(data.map((task)=>{
    //         if(task.id===id)
    //             {
    //                 return setdata({...task,reminder:!task.reminder})
    //             }
    //     }))

        const res=await fetch(`http://localhost:5000/data/${id}`)
        const dataa=await res.json()
        const updata={...dataa,reminder:!dataa.reminder}
        const res1=await fetch(`http://localhost:5000/data/${id}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(updata)})
        const dataa2=await res1.json()


        setdata(data.map((task)=>task.id===id?{...task,reminder:dataa2.reminder}:task))//here ...task represents we are keeping the rest of the properties of the task as constant.

    }    
    return (
        <Router>{/*to use routing in our website we need to put all the components inside the Router tag */}
            <div className="container">
                {/*<h1>hello world</h1>
            <h2>hii {name}</h2>{//here the name is a variable and its value will be replaced there ,so the output will be "hii dhana" and note everytg shld be inside the top most container nly ntg shld be out if the top most container in react
            }*/}
                <Header title="Task Tracker" onadd={onaddbtn} showadd={showadd} />
                
                <Route path="/" exact render={(props)=>(//we are using exact because nly if the url matches exactly "/" this alone ,we need to load these components because if we dont use exact this "/" will match with "/about" url also because the first character is same(tht is this character '/')and here in arrow function use (props)=>() instead of (props)=>{} because flower brackets are not working properly
                    <>
                    {showadd && <Addtask onadd={addtask} />}{/*showadd decides whether to show the form toadd task or not */}
                    {data.length > 0 ? (<Tasks data={data} onclick={deletetask} ondoubleclick={successtask} />) : (<h3>no messages to show</h3>)}
                    {/*here we use curly braces at the start of the line because it is a js programming code so we use 
                
                1.here the onclick is the state and the deletetask is the action 
                2.state(state is nothing but the values passed to each component) gets passed down the file and action gets passed up the file 
                3.here the value of onlick is passed to tasks.js file which in turn passes the value of onclik to individualtask.js file
                Note:here the value of onclick is deletetask which is a function defined in app.js,here the state is passed down the value 
                4.in individualtask.js file the onClick function(tht is when the FaTimes icon is clicked) it calls the deletetask function along with a parameter task.id which calls the deletetask function in app.js
                Note:here the action is passed up the file */}
                    </>
                
                )} 
                />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        </Router>
  );
}

export default App;
