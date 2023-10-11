import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Courses() {
    const [coursesResponse, setCoursesResponse] = useState(null);

    async function fetchCourses() {
        const response = await Axios.get('http://35.227.229.71/api/v1/courses');
        setCoursesResponse(response.data);
    }


    useEffect(() => {
        fetchCourses();
    }, []);


    if (!coursesResponse) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {coursesResponse.courses.map((course) => (
                    <li key={course.cid}>{course.name}</li>
                ))}
            </ul>
            <h2>Infra Details</h2>
            <ul>
                <li>Pod IP : {coursesResponse.infraDetails.podIp} </li>
            </ul>
            <ul>
                <li>Pod Name : {coursesResponse.infraDetails.podName} </li>
            </ul>
            <ul>
                <li>Date Time : {coursesResponse.infraDetails.dateTime} </li>
            </ul>
            <ul>
                <li>Cluster Info : {coursesResponse.infraDetails.clusterInfo} </li>
            </ul>
            <ul>
                <li>Node Name : {coursesResponse.infraDetails.nodeName} </li>
            </ul>
            <ul>
                <li>Node IP : {coursesResponse.infraDetails.workerNodeIp} </li>
            </ul>
        </div>
    );
}

export default Courses;



