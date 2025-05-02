import employees from './data/employees';
import PersonCard from './PersonCard';

const PersonList = () => {
    return (
        <div className="container">
            {employees.map(employee => (
                <PersonCard id={employee.id} employee={employee} />
            ))}
        </div>
    );
};

export default PersonList;