import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { todoTask } from "./actions/Todoaction";
import { updateTask } from './actions/Updateaction';
import { deleteTask } from './actions/Deleteaction';
import { useEffect } from 'react';


const App = () => {
// use selector use ki hai
    const myData = useSelector((state) => state.Todoreducer.Task);


    useEffect(() => {
        searchTask();
    }, [myData]);


//hooks ko apply kiya hua hai

    
    const [input, setInput] = useState("")
    const [id, setid] = useState(1);
    const [editId, setEditId] = useState(0);
    const [update, setUpdate] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [inputSearch, setInputSearch] = useState(false);
    const [filterArray, setFilterArray] = useState([])

//yeh code of pieces jo hai time,date,and year ko get krny k liye kiya gya hai

    const time = new Date().toLocaleTimeString();
    const date = new Date().getDate().toString();
    const month = new Date().getMonth().toString();
    const year = new Date().getUTCFullYear().toString();
    const allData = `${time}-${date}-${month}-${year}`;
        

    const inputEvent = (e) => {
        setInput(e.target.value);
    };
//dispatch used here
    const dispatch = useDispatch();
    const buttonClick = () => {

        if (update === false) {

            dispatch(todoTask(id, input, allData));
            setid(id + 1);
            setInput("");
        } else if (update === true) {

            dispatch(updateTask(editId, input, allData));
            setUpdate(false);
            setInput("");
        }



    }
//update task function are here

    const updatTask = (id) => {


        const updaTask = myData.find((e) => e.id === id);
        setEditId(id);
        setInput(updaTask.text);
        setUpdate(true);

    }
// delete task function are here

    const deleteTask1 = (id) => {

        dispatch(deleteTask(id));
    }
    const handleSearch = () => {

        if (searchTask() !== "") {


        }
        else {
            setInputSearch(false)
        }
    }
// filtered data functionality are here
    var filteredData;

    const searchTask = () => {


        filteredData = myData.filter(e => {
            if (e.text.indexOf(inputValue) > -1) {
                return e
            }
        });

        setFilterArray(filteredData);
    }
    const searchBar = () => {
        if (inputValue === "") {
            setInputSearch(false);
        }
        else {
            searchTask()
            setInputSearch(true)
            handleSearch()
        }
    }



    return (
        <React.Fragment>
            <div className="main_div">
                <div className="center_dic">
                    <br />
                    <h1 className="H1">ToDo List</h1>
                    <br />
                    <input className="input" value={input}
                        type="text" placeholder="Add Task "
                        onChange={inputEvent} />
                    <button className="btn1"
                        onClick={() => buttonClick()}>+</button>
                    <br />
                    <br />
                    <span> <input id="input" className="input_search"
                        type="text"
                        placeholder="Search Task....                   🔍"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} onKeyUp={() => {
                            searchTask()
                            setInputSearch(true)
                            handleSearch()
                            searchBar()
                        }} /></span>

                    <ol id="ol1" className="ol">

                        {
                            inputSearch === false ?

                                myData?.map((newval, index) => {
                                    return (
                                        <>
                                            <li key={index}>  {newval.text} ({newval.time})</li>
                                            <span><button className="delbtn"
                                                onClick={() => deleteTask1(newval.id)}
                                            >DELETE</button>
                                                <button className="upbtn"
                                                    onClick={() => updatTask(newval.id)}
                                                >UPDATE</button>
                                            </span>


                                        </>

                                    )

                                }) :

                                filterArray?.map((newval, index) => {
                                    return (
                                        <>

                                            <li key={index}>  {newval.text} ({newval.time})</li>
                                            <span><button className="delbtn"
                                                onClick={() => deleteTask1(newval.id)}
                                            >DELETE</button>
                                                <button className="upbtn"
                                                    onClick={() => updatTask(newval.id)}
                                                >UPDATE</button>
                                            </span>


                                        </>

                                    )

                                })
                        }

                    </ol>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
