import { useState, useEffect } from "react"; 
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



const initialState = {
    name: "",
    age: "",
    matric_number: "",
    department: "",
};

const EditStudent = () => {
    const [ studentDet, setStudentDet ] = useState(initialState);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const history = useNavigate();

    const { _id } = useParams();

    const handleChange = (e) => {
        let { name, value } = e.target;

        setStudentDet({ ...studentDet, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            const response = await axios.patch(`http://localhost:5000/api/students/${_id}`, studentDet );
            if (response.status === 200) {
                console.log("Student Updated");
                console.log(response.status);
                history('/');
            }

            console.log(studentDet);
            setError(null);
            setLoading(false);

        } catch (err) {
            setError("Can't EDIT student. Please make sure all fields are filled or try again later.");
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/students/${_id}`);
                console.log(res.data);
                setStudentDet(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchStudent();
        
    }, [ _id ]);






    return ( 
        <main className=" text-neutral-600 min-h-screen">

                <h1 className="text-3xl text-center font-semibold">Sign Up</h1>

            <form className="shadow-lg rounded-md p-8 w-2/3 m-auto flex flex-col justify-center" onSubmit={handleSubmit}>

                <div className="grid grid-cols-3 items-center place-content-center">
            
                <label htmlFor="name" className="col-span-1 font-bold text-l">Name: </label>
                <input type="text" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none" onChange={handleChange} value={studentDet.name}/>
                
                <label htmlFor="phone" className="col-span-1 font-bold text-l">Age: </label>
                <input type="number" name="age" id="age" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none" onChange={handleChange} value={studentDet.age}/>
                
                <label htmlFor="name" className="col-span-1 font-bold text-l">Matric-No: </label>
                <input type="number" name="matric_number" id="matric_number" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none" onChange={handleChange} value={studentDet.matric_number}/>
                
                <label htmlFor="name" className="col-span-1 font-bold text-l">Department: </label>
                <input type="text" name="department" id="department" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none" onChange={handleChange} value={studentDet.department}/>
                <div className="md:ml-20 flex justify-center col-span-3">
                    <button type="submit" className="px-7 py-5 bg-lime-700 border border-neutral-400 mt-10 mx-10 text-neutral-950 text-xl w-1/2 ransition-all duration-100 shadow-xl rounded-full shadow-neutral-500 hover:shadow-lg hover:font-bold hover:shadow-neutral-500 "> {loading ? "Registering..." : "Register"} </button>
                </div>
                </div>
                { error && ( <p className="text-red-800 text-center p-3 border my-4 border-neutral-500 bg-red-500">{error}</p> )}
            </form>
        </main>
     );
}
 
export default EditStudent;