import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './shared/Navbar/navbar';
import Footer from './shared/footer/footer';
import Home from './pages/home/home';
import Signup from './pages/Auth/signup/signup';
import Login from './pages/Auth/login/login';
import Contactus from './pages/contact us/contactUs';
import AdminNavBar from './components/AdminDashboard/Admin-navbar/Admin-navbar';
import AdminProfile from './components/AdminDashboard/main/display-profile';
import DisplayUsers from './components/AdminDashboard/manage-userProfile/displayUsers/displayUsers';
import AddUser from './components/AdminDashboard/manage-userProfile/addUser/addUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import View from './components/AdminDashboard/manage-userProfile/view-user-details/view';
import UserNavbar from './components/userDashboard/user-navbar/user-navbar';
import UserProfile from './components/userDashboard/main-profile/user-profile';
import UpdateProfile from './components/userDashboard/update-profile/update-profile';
import HearingExam from './components/userDashboard/hearing-exam/hearing-exam';
import ExamHistory from './components/userDashboard/show-exam-history/exam-history';
import InActive from './pages/Auth/login/inActive';
import UpdateAdminProfile from './components/AdminDashboard/updateAdminProfile/updateAdmin';
import AdminQuestions from './components/AdminDashboard/manage-questions/manage-Questions';
import PreviewAnswers from './components/AdminDashboard/manage-questions/preview-answers/preview-answers';
import CreateQuestion from './components/AdminDashboard/manage-questions/Create-Question/Create-Question';
import AddAnswer from './components/AdminDashboard/manage-questions/add-answer/add-answer';
import UpdateQuestion from './components/AdminDashboard/manage-questions/update-Question/updateQuestion';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='top-center'/>
          <Routes>
            <Route path='/' element={
              <>
              <Navbar/>
              <Home/>
              <Footer/>
              </>
            }/>
            <Route path='/signup' element={
              <>
                <Navbar/>
                <Signup/>
                <Footer/>
              </>
            }
            />
            <Route path='/login' element={
              <>
                <Navbar/>
                <Login/>
                <Footer/>
              </>
            }
            />
            <Route path='/contactUs' element={
              <>
                <Contactus/>
              </>
            }
            />
            <Route path='/admin/:id' element={
              <>
                <AdminNavBar />
                <AdminProfile/>
              </>
            }/>
            <Route path='/auth/getUsers' element={
              <>
                <AdminNavBar />
                <DisplayUsers/>
              </>
            }/>
            <Route path='/auth/addUser' element={<AddUser/>}/>
            <Route path='/auth/update/:id' element={<AddUser/>}/>
            <Route path='/auth/view/:id' element={<View/>}/>
            <Route path='/manageQuestions' element={
              <>
                <AdminNavBar/>
                <AdminQuestions/>
              </>
            }/>
            <Route path='/auth/addQuestion' element={
              <>
                <CreateQuestion/>
              </>
            }/>
            <Route path='/updateQuestion/:id' element={
              <>
                <UpdateQuestion/>
              </>
            }/>
            <Route path='/previewAnswers/:id' element={
              <>
                <PreviewAnswers/>
              </>
            }/>
            <Route path='/addAnswers/:id' element={
              <>
                <AddAnswer/>
              </>
            }/>
            <Route path='/user/:id' element={
              <>
                <UserNavbar/>
                <UserProfile/>
              </>
            }/>
            <Route path='/inActive' element={
              <>
                <InActive/>
              </>
            }/>

            <Route path='/updateProfile/:id' element={
              <>
                <UpdateProfile/>
              </>
            }/>
            <Route path='/updateAdmin/:id' element={
              <>
                <UpdateAdminProfile/>
              </>
            }/>
            <Route path='/Exam/:id' element={
              <>
                <UserNavbar/>
                <HearingExam/>
              </>
            }/>
            <Route path='/examHistory/:id' element={
              <>
                <UserNavbar/>
                <ExamHistory/>
              </>
            }/>
          </Routes>
          
    </BrowserRouter>
  );
}

export default App;
