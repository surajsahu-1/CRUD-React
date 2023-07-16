import Createuser from './components/crud/Createuser'
import { BrowserRouter,Route ,Routes } from "react-router-dom"
// import Home from "./Components/crud/Home"
// import User from "./Components/crud/User"
// import Edituser from './Components/crud/Edituser'
// import Deleteuser from "./Components/crud/Deleteuser"
import Home from './components/crud/Home'
import User from './components/crud/User' 
import Edituser from './components/crud/Edituser'
import Deleteuser from './components/crud/Deleteuser' 

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<Createuser/>} path=""/>
                <Route element={<Createuser/>} path="/createuser"/>
                <Route element={<User/>} path="/user" />
                <Route element={<Edituser/>} path="/edit/:editpath" />
                <Route element={<Deleteuser/>} path="/delete/:editpath"/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App