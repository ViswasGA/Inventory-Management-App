import React, { useState } from "react";
import axios from 'axios';
import "../Styles/Create.css";
const Creates = () => {
    const [id, setId] = useState('');
    const [Name, setName] = useState('');
    const [mobileno, setMobileno] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: id,
            Name:Name,
            mobileno: mobileno,
    
        };
        axios.post('http://localhost:8080/add', data);
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <label className="login-label">Product Id</label>
            <input
                className="login-input"
                type="number"
                value={id}
                onChange={(event) => setId(event.target.value)}
            />
            <label className="login-label">Product Name</label>
            <input
                className="login-input"
                type="text"
                value={Name}
                onChange={(event) => setName(event.target.value)}
            />
            <label className="login-label">Mobile</label>
            <input
                className="login-input"
                type="number"
                value={mobileno}
                onChange={(event) => setMobileno(event.target.value)}
            />
            <button className="login-button" type="submit">Add</button>
        </form>
    );
};

export default Creates;
