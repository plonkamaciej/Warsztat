import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Content from './content';
import axios from 'axios';


export const AdminPageRent = () => {
    const { logOut } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    
    const [newCar, setNewCar] = useState({
        id: '',
        mark: '',
        model: '',
        color: '',
        dateOfProduction: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('http://localhost:8080/addCarForRent', newCar)
            .then(response => {
                setNewCar({
                    id: '',
                    mark: '',
                    model: '',
                    color: '',
                    dateOfProduction: '',
                });
                fetchItems();  // Fetch the updated list of cars
            })
            .catch(error => console.error('Error:', error));
    };

    const handleInputChange = (event) => {
        setNewCar({
            ...newCar,
            [event.target.name]: event.target.value,
        });
    };

    const fetchItems = () => {
        axios.get('http://localhost:8080/carForRents')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error:', error));
    };
    
    useEffect(() => {
        fetchItems();
    }, []);


    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/deleteCarForRent/${id}`)
            .then(response => {
                fetchItems(); 
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            
            <Content w="w-1/2">
            <div className='flex justify-between mb-4'>
                <h2 className=' text-3xl'>Welcome, Admin!</h2>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" onClick={logOut}>Log Out</button>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">Nasze samochody:</h3>
                <div>
                    {Array.isArray(items) && items.map((item, index) => (
                        <div key={index} className=' flex gap-5'>
                            <p>{item.mark}</p>
                            <p>{item.model}</p>
                            <p>{item.color}</p>
                            <p>ROCZNIK: {item.dateOfProduction}</p>
                            <button className=' text-base text-red-500' onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    ))}
                </div>
                
                
        <form className="mt-12 flex flex-col gap-4"onSubmit={handleSubmit}>
        <h3>Dodaj nowe auto:</h3>
            <label>
                Mark:
                <input type="text" name="mark" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500' value={newCar.mark} onChange={handleInputChange} />
            </label>
            <label>
                Model:
                <input type="text" name="model" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'  value={newCar.model} onChange={handleInputChange} />
            </label>
            <label>
                Color:
                <input type="text" name="color" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500' value={newCar.color} onChange={handleInputChange} />
            </label>
            <label>
                Date of Production:
                <input type="date" name="dateOfProduction" className='w-full block m-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500' value={newCar.dateOfProduction} onChange={handleInputChange} />
            </label>
            <button type="submit" className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow w-32">Add Car</button>
        </form>

            </Content>
        </div>
    );
};