import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Routes, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>
                    <Route path='/profile/*' element={<Profile />}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
