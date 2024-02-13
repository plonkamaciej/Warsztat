import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Content from './content';
import { useNavigate } from 'react-router-dom';



export const AdminPage = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate(); 


    return (
        <div>
            
            <Content w="w-1/2">
            <div className='flex justify-between mb-4'>
                <h2 className=' text-3xl'>Welcome, Admin!</h2>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" onClick={logOut}>Log Out</button>
            </div>
            <div className='flex gap-5'>
                <button onClick={() => navigate('/admin/rent')} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">Rent</button> 
                <button onClick={() => navigate('/admin/replace')}className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">Replace</button>
                <button onClick={() => navigate('/admin/prot')} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">Protocol</button>
            </div>
            </Content>
        </div>
    );
};