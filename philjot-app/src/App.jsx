import './App.css'
import DashBoard from './pages/DashBoard'
import CreateStudent from './pages/CreateStudent'
import Home from './pages/Home'
import { Route , Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import StudentDetails from './pages/StudentDetails'
import EditStudent from './pages/Editstudent'
import TeacherForm from './pages/TeacherForm'
import { useContext } from 'react'
import { AppContext } from './contexts/AppContext'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

function App() {

  const {
    state:{user},
  } = useContext(AppContext);
  console.log(user)
  
  if(!user) {
    return (
      <>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </>
    )
  }

  return (
  

    <>

      <Navigation/>
      <Routes>
       <Route path="/" element={<DashBoard/>}/>
       <Route path="/signup" element={<CreateStudent/>}/>
       <Route path="/TeacherForm" element={<TeacherForm/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path='/student/:_id' element={<StudentDetails/>}/>
       <Route path='/edit/:_id' element={<EditStudent/>}/>


      </Routes>
    
    </>
  );
}

export default App
