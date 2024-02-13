import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Content from './content';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const AdminPageProtList = () => {
    const { logOut } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    let { id } = useParams();

    const link  = "http://localhost:8080/protocol/"+id;

    useEffect(() => {
        axios.get(link)
              .then(response => setItems(response.data))
              .catch(error => console.error('Error:', error));
      }, []);

      console.log(items)
    return (
        <div>
            
            <Content w="w-1/2">
            <div className='flex justify-between mb-4'>
                <h2 className=' text-3xl'>Protocol {id}</h2>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" onClick={logOut}>Log Out</button>
            </div>
           
           

            <p className="p-2">Id: {items.id}</p>
            <p className="p-2">Date: {items.dateOfCreate}</p>
            <p className=" p-2">Opis: {items.information}</p>
    
            </Content>
        </div>
    );
};