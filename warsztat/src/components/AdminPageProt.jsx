import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Content from './content';
import axios from 'axios';


export const AdminPageProtocol = () => {
    const { logOut } = useContext(AuthContext);
    const [newProt, setNewProt] = useState({
        prac: '',
        client: '',
        opis: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://localhost:8080/addProtocol', newProt)
            .then(response => {
                setNewProt({
                    prac: '',
                    client: '',
                    opis: '',
                }); 
            })
            .catch(error => console.error('Error:', error));
    };

    const handleInputChange = (event) => {
        setNewProt({
            ...newProt,
            [event.target.name]: event.target.value,
        });
    };

   
    return (
        <div>
            
            <Content w="w-1/2">
            <div className='flex justify-between mb-4'>
                <h2 className=' text-3xl'>Welcome, Pracownik!</h2>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" onClick={logOut}>Log Out</button>
            </div>
            
        
        <form className="mt-12 flex flex-col gap-4"onSubmit={handleSubmit}>
        <h3>Protokół</h3>
        <label>
                Pracownik:
                <input type="text" name="prac" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500' value={newProt.prac} onChange={handleInputChange} />
            </label>
            <label>
                Klient:
                <input type="text" name="client" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'  value={newProt.client} onChange={handleInputChange} />
            </label>
            <label >
                Opis:
                <textarea name="opis" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'  value={newProt.opis} onChange={handleInputChange} />
            </label>
            <button type="submit" className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow w-32">Send</button>
        </form>

            </Content>
        </div>
    );
};