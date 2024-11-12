import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const TeacherForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [staff_number, setStafno] = useState("");
    const [department, setDepartment] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const  home = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setLoading(true);
            console.log(name, age, staff_number, department)
            const res = await axios.post("http://localhost:5000/api/teachers", {
                name,
                age,
                staff_number,
                department,
            });

            if (res.status === 201){
                console.log("Teacher applied sucessfully");
                console.log(res.status);
                home("/");
            }

            setName("");
            setAge("");
            setStafno("");
            setDepartment("");
            setLoading(false);
            setError(null)
        } catch (err) {
            setError(err.response.data.error);
            setLoading(false);
            console.log(err)

        }
    };

    return ( 
        <main className=" text-neutral-600 min-h-screen" onSubmit={handleSubmit}>

                <h1 className="text-3xl text-center font-semibold">Apply</h1>

            <form className="shadow-lg rounded-md p-8 w-2/3 m-auto flex flex-col justify-center">

                <div className="grid grid-cols-3 items-center place-content-center">
            
                <label htmlFor="name" className="col-span-1 font-bold text-l">Name: </label>
                <input type="text" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none" onChange={(e) => setName(e.target.value)}/>
                
                <label htmlFor="phone" className="col-span-1 font-bold text-l">Age: </label>
                <input type="number" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none" onChange={(e) => setAge(e.target.value)}/>
                
                <label htmlFor="name" className="col-span-1 font-bold text-l">Staff-No: </label>
                <input type="number" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none" onChange={(e) => setStafno(e.target.value)}/>
                
                <label htmlFor="name" className="col-span-1 font-bold text-l">Department: </label>
                <input type="text" name="name" id="name" className="col-span-2 w-full p-2 border-b-2 border-emerald-600 outline-none" onChange={(e) => setDepartment(e.target.value)}/>
                <div className="md:ml-20 flex justify-center col-span-3">
                    <button type="submit" className="px-7 py-5 bg-lime-700 border border-neutral-400 mt-10 mx-10 text-neutral-950 text-xl w-1/2 ransition-all duration-100 shadow-xl rounded-full shadow-neutral-500 hover:shadow-lg hover:font-bold hover:shadow-neutral-500 "> {loading ? "Applying..." : "Apply"} </button>
                </div>
                </div>
                { error && ( <p className="text-red-800 text-center p-3 border my-4 border-neutral-500 bg-red-500">{error}</p> )}
            </form>
        </main>
     );
}
 
export default TeacherForm;