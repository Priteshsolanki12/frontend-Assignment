import React from 'react'
import Header from './Header'
import '../style/Students.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeStudent } from '../feature/studentSlice';

function Students() {
    const navigate = useNavigate();

    function goTOaddStudents() {
        navigate("/Add/Students");
    }

    const students = useSelector((state) => state.students);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeStudent({ id }));
    };


    return (
        <>
            <Header />
            <div className='main'>

                <h1 className='Students'>Students Details :-</h1>
                <button className='add-Students' onClick={goTOaddStudents}>Add Newe Students</button>
            </div>
            <table>
                <tr>
                    <th>Student Name</th>
                    <th>Student Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>

                </tr>

                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.course}</td>
                        <td>{student.batch}</td>
                        <td>
                            <button onClick={() => handleRemove(student.id)}>Remove</button>
                        </td>
                    </tr>
                ))}

            </table>

        </>
    )
}

export default Students