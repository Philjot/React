import { useEffect, useState } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import { FaExpand } from 'react-icons/fa';
import { Link } from 'react-router-dom';







const StudentList = () => {
    const [students, setStudents] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
        const fetchStudents = async ()=>{
            try{
                setLoading(true);
            const res = await axios.get('http://localhost:5000/api/students', {headers: {authorization: `Bearer ${token.token}`}}    
            );
            console.log(res.data.students)
            setStudents(res.data.students);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };
        fetchStudents()
    }, []);

    return (
        <div className='my-20'>
            <table className='border table-auto w-full'>
                <thead>
                    <tr className='bg-emerald-600 text-white font-bold'>
                        <th className='border border-lime-300 px-4 py-2 text-center'>Name</th>
                        <th className='border border-lime-300 px-4 py-2 text-center'>Age</th>
                        <th className='border border-lime-300 px-4 py-2 text-center'>Matric Number</th>
                        <th className='border border-lime-300 px-4 py-2 text-center'>Department</th>
                        <th className='border border-lime-300 px-4 py-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <div className='h-36 grid place-content-center w-full text-emerald-600'><VscLoading className="text-3xl animate-spin"/></div>
                    ) : (
                        students&&students.map((student, index) => (
                            <tr key={index} className='table-row'>
                                <td className='border border-lime-600 px-4 py-2 text-center'>{student.name}</td>
                                <td className='border border-lime-600 px-4 py-2 text-center'>{student.age}</td>
                                <td className='border border-lime-600 px-4 py-2 text-center'>{student.matric_number}</td>
                                <td className='border border-lime-600 px-4 py-2 text-center'>{student.department}</td>
                                <td>
                                    <Link to={`/student/${student._id}`} className='grid place-item-center'><FaExpand className='text-lime-300'/></Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>
    )

}

export default StudentList;