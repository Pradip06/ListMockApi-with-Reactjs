import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import NavBarMenu from './NavBarMenu'
import {useHistory} from 'react-router-dom';


function AddNewList(props) {
    let history = useHistory();
    const[lists, setList]= useState({
        name:"",
        address:"",
        rating:"",
        email:"",
    });

    const onInputChange=(e)=>{
        setList({...lists, [e.target.name]: e.target.value})

    }

    const create=async (e)=>{
            e.preventDefault();
        await axios.post("http://localhost:3000/list", lists);
        history.push("/");
    }

    return (
        <>
        <NavBarMenu />
            <h1>Add New List</h1>
            
            <div>
                <input type="text" name="name" value={lists.name} onChange={(e) => {onInputChange(e)}}
                    placeholder="Restaurant Name" /><br /><br />
                <input type="text" name="address" value={lists.address} onChange={(e) => {onInputChange(e)}}
                    placeholder="Restaurant Address " />
                <br /><br />
                <input type="text" name="email" value={lists.email} onChange={(e) => {onInputChange(e)}}
                    placeholder="Restaurant Email" />
                <br /><br />
                <input type="text" name="rating" value={lists.rating} onChange={(e) => {onInputChange(e)}}
                    placeholder="Restaurant Rating" />
                <br /> <br />
                <button onClick={create} className="btn btn-primary btn-block">Add Restaurant</button>
            </div>
        </>
    );
}

export default AddNewList;