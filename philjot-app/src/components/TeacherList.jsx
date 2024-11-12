import { useEffect, useState } from "react";
import  axios  from "axios";
import { MdDownloading } from "react-icons/md";
import { FaExpand } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeacherList = () => {

    const [ teachers, setTeachers ] = useState(null);
    const [ loading, setLoading ] = useState(false);


    useEffect (()=> {
       const fetchTeachers = async ()=>{
            try{
                setLoading(true)
                const res = await axios.get(`http://localhost:5000/api/teachers`)
                setTeachers(res.data.teacher)
                console.log(res.data)
                
            } catch (err) {
                setLoading(false);
            }finally{
                setLoading(false);
            }
       }
       fetchTeachers()
    }, [])
    return ( 
        <div className='my-20'>
            <table className='border table-auto w-full'>
                <thead>
                    <tr className='bg-emerald-600 text-white font-bold'>
                        <th className='border border-lime-300 px-4 py-2 text-center'>Name</th>
                        <th className='border border-lime-300 px-4 py-2 text-center'>Age</th>
                        <th className='border border-lime-300 px-4 py-2 text-center'>Staff Number</th>
                        <th className='border border-lime-300 px-4 py-2 text-center'>Department</th>
                        <th className='border border-lime-300 px-4 py-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <div className='h-36 grid place-content-center w-full text-emerald-600'><MdDownloading className="text-3xl animate-spin"/></div>
                    ) : (
                        teachers&&teachers.map((teacher, index) => (
                            <tr key={index} className='table-row'>
                                <td className='border border-lime-600 px-4 py-2 text-center'>{teacher.name}</td>
                                <td className='border border-lime-600 px-4 py-2 text-center'>{teacher.age}</td>
                                <td className='border border-lime-600 px-4 py-2 text-center'>{teacher.staff_number}</td>
                                <td className='border border-lime-600 px-4 py-2 text-center'>{teacher.department}</td>
                                {/* <td>
                                    <Link to={`/teacher/${teacher._id}`} className='grid place-item-center'><FaExpand className='text-lime-300'/></Link>
                                </td> */}
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>
    
     );
}       
 
export default TeacherList;