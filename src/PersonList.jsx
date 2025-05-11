import PersonCard from './PersonCard';

const PersonList = ({ employees }) => {
    return (
        <div className="container">
            {employees.map(employee => (
                <PersonCard key={employee.id} employee={employee} />
            ))}
        </div>
    );
};

export default PersonList;
