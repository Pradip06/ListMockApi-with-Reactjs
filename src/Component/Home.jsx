import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit } from '@fortawesome/free-solid-svg-icons'
import NavBarMenu from './NavBarMenu'


function HomeList(props) {
    const [lists, setList] = useState([]);
    // const { id } = useParams();

    useEffect(() => {
        loadlists();
    }, []);

    const loadlists = async () => {
        const result = await axios.get("http://localhost:3000/list");
        // console.warn(result);
        setList(result.data);
    }

    const deleteList = id => {
        fetch("http://localhost:3000/list/"+ id,
            {
                method: "DELETE",
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    alert("delete")
                    loadlists();
                })
            })
        
    }

    // console.warn(lists);
    return (
        <>
        <NavBarMenu />
            {
                lists ?
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lists.map((pass, i) =>
                                        <tr>
                                            <td>{i}</td>
                                            <td>{pass.name}</td>
                                            <td>{pass.email}</td>
                                            <td>{pass.address}</td>
                                            <td>{pass.rating}</td>
                                            <td>
                                                
                                                <Link class="btn btn-outline-primary mar-2" 
                                                to={"/update/" + pass.id}><FontAwesomeIcon icon={faEdit} color='green' /> </Link>
                                                <span class="btn btn-danger" onClick={() => deleteList(pass.id)}>Delete</span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div> : <p>Please Wait...</p>
            }
        </>
    );
}

export default HomeList;