import React from 'react'
import Header from './Header'
import '../style/add.css'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent} from '../feature/studentSlice';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Add() {

    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('');
    
    useSelector((state) => state.students);
    const dispatch = useDispatch();

    const handleAddOrEditStudent = () => {
            dispatch(addStudent({ name, age ,course,batch}));
        setName('');
        setAge('');
        setBatch('')
        setCourse('')
        navigate("/Students");
    };


    return (
        <>
            <Header />
            <div className='box'>
                <div className='box'>
                    <p className='name'>Name :</p>
                    <input value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Student Name" className='input' type="text" />
                </div>
                <div className='box'>
                    <p>Age :</p>
                    <input value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Student Age" className='input' type="text" />
                </div>
            </div>
            <div className='box1'>
                <div className='box1'>
                    <p className='name'>Course :</p>
                    <input value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        placeholder="Student Course" className='input' type="text" />
                </div>
                <div className='box1'>
                    <p>Batch :</p>
                    <input value={batch}
                        onChange={(e) => setBatch(e.target.value)}
                        placeholder="Student Batch" className='input' type="text" />
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <button className='cancel'>Cancel</button>
                <button className='submmit'  onClick={handleAddOrEditStudent}>Submmit</button>
            </div>
              
        </>
    )
}

export default Add