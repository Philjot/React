import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { RiDeleteBin2Line } from "react-icons/ri";
import { CiEdit } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const StudentDetails = () => {
    const { _id } = useParams();
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState(null);
    const history = useNavigate();
    const home = useNavigate()


    console.log(_id)
    useEffect(() => {
        const fetchStudent = async() =>{
            
            try {
                setLoading(true)
                console.log(_id)
                const res = await axios.get(`http://localhost:5000/api/students/${_id}`)

                console.log(res)
                setStudent(res.data);
            } catch (error) {
                
            }
        }

        fetchStudent();
    }, [student, _id]);

    const deleteStudent = async () => {
        const sure = window.confirm(
            'Are you sure you want to delete this student?'
        );
        if (sure){
            try{
                const res = await axios.delete(`http://localhost:5000/api/students/${_id}`);
                if(res.status === 200){
                    console.log("Student deleted successfully");
                    history('/');
                }
                
            }catch (err){
                console.log(err)
            }finally{
                home('/')
            }
        }
    }

    const firstLetter = student?.name.split("")[0].toUpperCase();

    if(loading){
        <p className='animate-bounce text-3xl text-center'>
            Loading...
        </p>
    }

    
  return (
    <div className='flex flex-col items-center justify-center'>
        {student && (
            <>
              <div className='bg-lime-600 text-white rounded-full p-5 h-36 w-36 grid place-content-center m-10'>
                <h2 className='text-7xl font-extrabold'>
                    {firstLetter}
                </h2>
              </div>

              <div>
                <h3 className='font-bold text-xl text-lime-500 text-center'>
                        Student Details
                </h3>
                <div className='space-y-2'>
                    <p>
                        <span className='font-semibold text-lime-500 mr-2'>Name: </span>
                        {student.name}
                    </p>
                    <p>
                        <span className='font-semibold text-lime-500 mr-2'>Age: </span>
                        {student.age}
                    </p>
                    <p>
                        <span className='font-semibold text-lime-500 mr-2'>Matric Number: </span>
                        {student.matric_number}
                    </p>
                    <p>
                        <span className='font-semibold text-lime-500 mr-2'>Department: </span>
                        {student.department}
                    </p>
                </div>
              </div>

              <Link to= {`/edit/${_id}`} className="text-2xl"> <CiEdit/> </Link>

              <button onClick={deleteStudent} className='bg-slate-500 text-lime-500 px-4 py-2 rounded mt-5 transition-all duration-200 hover:bg-slate-500'> <RiDeleteBin2Line className='text-lime-600 text2xl'/> </button>
            </>

        )}
    </div>
  )
}

export default StudentDetails;