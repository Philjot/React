import {useNavigate} from 'react-router-dom';
import Lottie from 'lottie-react';
import GIF from '../assets/Animation - 1728384444332.json';
import StudentList from '../components/StudentList.jsx'
import TeacherList from '../components/TeacherList.jsx';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext.jsx';






const DashBoard = () => {
    
    const {count} = useContext(AppContext)
    const history = useNavigate()
    const transfer = useNavigate()


    return ( 
        <main className="text-neutral-900 py-16 bg-sky-50 md:px-24 min-h-screen">
        
            <div className="flex justify-between items-center flex-col md:flex-row">

            <div className="space-y-5 md:w-1/2 text-center md:text-start px-4">
            <h1 className="text-3xl font-bold text-emerald-500 text-justify">
                Welcome to Philjot-App, Where you find All School needs
            </h1>
            <p className="text-xl text-slate-800 text-center">
                Explore all basic needs about education with our features, within and outside the school premises. We have {count} branches in Nigeria.
            </p>
            <button onClick={()=>history("/signup")} className="px-7 py-4 bg-emerald-700 border border-neutral-350 text-neutral-950 mt-12 shadow-xl rounded-full shadow-neutral-900 text-xl transition-all duration-50 hover:shadow-lg hover:font-bold hover:shadow-neutral-500">Register</button>
            <h3>Kindly register as a Teacher <button onClick={()=>transfer("/TeacherForm")} className='text-lime-500 hover:font-bold transition-all duration-150'>here</button></h3>
            </div>
            


            <div className='w-full md:w-1/2'>
            <Lottie 
                animationData={GIF} 
                loop={true} 
                autoplay={true} 
                style={{ width: '100%', height: '300px' }} 
            />

            </div>
                
            </div>
            <StudentList/>
            <div>
                <h2>Below is the list of QUALIFIED Teachers.</h2>
            </div>

            <TeacherList/>
        </main>
     );
}
 
export default DashBoard;