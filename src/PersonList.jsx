import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';

const PersonList = () => {
    const [employees, setEmployees] = useState([]);

    // Fetch employees from the backend
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:3001/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    const handleAddEmployee = (newEmployee) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    };

    return (
        <div className="container">
            {employees.map((employee) => (
                <PersonCard key={employee.id} employee={employee} />
            ))}
        </div>
    );
};

export default PersonList;
