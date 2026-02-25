import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const Child = () => {

    const initialState = {
        name: "",
        email: "",
        password: ""
    }

    let reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_FORM":
                return {
                    ...state,
                    [action.payload.field]: action.payload.value,
                }
            case "Clear_Field":
                return initialState;

            default:
                return state;
        }

    }

    let handleChange = (e) => {
        dispacher({
            type: "UPDATE_FORM",
            payload: {
                field: e.target.name,
                value: e.target.value
            }
        })
    }

    let [checkData, setCheckData] = useState("");
    const [state, dispacher] = useReducer(reducer, initialState)

    let handleData = () => {
        setCheckData(state);
        dispacher({
            type: "Clear_Field"
        })
    }


    return (
        <div>
            <input type="text" placeholder='enter name' name="name" onChange={handleChange} value={state.name}></input>
            <br />
            <input type="email" placeholder='enter email' name="email" onChange={handleChange} value={state.email}></input>
            <br />
            <input type="password" placeholder='enter password' name="password" onChange={handleChange} value={state.password}></input>
            <br />
            <button onClick={handleData}>show me</button>
            {checkData ?
                (<div>
                    <p> Name : {checkData.name}</p>
                    <p> email : {checkData.email}</p>
                    <p> password : {checkData.password}</p>
                </div>) : (<p>data is not there</p>)
            }
        </div>
    )
}

export default Child
