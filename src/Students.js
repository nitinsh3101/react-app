import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Students() {
    const [studentsResponse, setStudentsResponse] = useState(null);

    async function fetchStudents() {
        const response = await Axios.get('http://34.149.138.131/api/v1/students');
        setStudentsResponse(response.data);
    }
    useEffect(() => {
        fetchStudents();
    }, []);

    if (!studentsResponse) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Students</h1>
            <ul>
                {studentsResponse.map((student) => (
                    <li key={student.sid}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Students;