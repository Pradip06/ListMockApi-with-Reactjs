import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { useHistory , useParams } from "react-router-dom"
import NavBarMenu from './NavBarMenu'

function ListUpdate(props) {

    let history = useHistory();
    const { id } = useParams();
    // alert(id)
    const [lists, setList] = useState({
        name: "",
        address: "",
        rating: "",
        email: "",
    });
    const onInputChange = (e) => {
        setList({
            ...lists, [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        loadlists()
    },[])

    const creates = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/list/${id}`, lists);
    history.push("/");
        }
        
        const loadlists = async () =>{
            const result = await axios.get(`http://localhost:3000/list/${id}`)
            setList(result.data)
        }
            return (
                <>
                <NavBarMenu />
                <h1>List Update</h1>
                <div>
                    <input type="text" name="name" value={lists.name} onChange={(e)=> { onInputChange(e) }}
                        placeholder="Restaurant Name" />
                        <br /><br />
                    <input type="text" name="address" value={lists.address} onChange={(e) => { onInputChange(e)}}
                        placeholder="Restaurant Address " />
                        <br /><br />
                    <input type="text" name="email" value={lists.email} onChange={(e)=> { onInputChange(e)}}
                        placeholder="Restaurant Emai"/>
                        <br /><br />
                    <input type="text" name="rating" value={lists.rating} onChange={(e)=> { onInputChange(e)}}
                        placeholder="Restaurant Rating" />
                        <br /> <br />
                    <button onClick={creates} className="btn btn-warning btn-block">Update Restaurant</button>
                </div>
            </>
            );
        }

            export default ListUpdate;