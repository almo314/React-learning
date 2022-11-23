import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>
                    <Route path='/profile/*' element={<Profile />}/>
                    <Route path='/users/*' element={<UsersContainer />}/>
                    {/*<Route path='/profile' element={<ProfileContainer />} />*/}
                    <Route path='/news/*' element={<News />}/>
                    <Route path='/music/*' element={<Music />}/>
                    <Route path='/settings/*' element={<Settings />}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
