
import './App.css';

import NavbarComponent from './classComponent/navbarComponent';
import HomeComponent from './classComponent/Homecomponent';
import FooterComponent from './classComponent/Footercomponent';
import { HomeProps } from './Props/HomeProps';
import Home from './conditionCheck/Home'
import Student from './state/Student';
import Memo from './reactMemo/Memo';
import Highorder from './Hoc/Highorder';





function App() {
  return (
    <div>
     {/* <h1>welcome to webskitters</h1> */}
     {/* <Home/> */}
    {/* <Menu/> */}
    {/* <ClassBaseComponent/> */}
    {/* <NavbarComponent/>
    <HomeComponent/>
    <FooterComponent/> */}
    {/* <HomeProps name={"aradhana"} email={"aradhana@gmail.com"} city={"kolkata"}/> */}
    {/* <Home/> */}
    {/* <Student/> */}
    {/* <Memo/> */}
    <Highorder/>
    </div>
  );
}

export default App;
