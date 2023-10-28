import { useState } from 'react';
import './App.css';
import Navbar from './components/navabar';
import Textform from './components/textform'
// import About from './components/about'
import Alert from './components/alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// }
// from "react-router-dom";


function App() {

const [alert, setAlert] = useState(null);

const showAlert = (message, type) =>{
   setAlert({
    msg: message,
     type: type
    }); 
    setTimeout(() => {
      setAlert(null);
    }, 2000);

}

const [mode, setMode] = useState('light');

const toggle = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#0935abba';
    showAlert("Dark mode has been enabled", "success")
    document.title = "TextUtils - Dark Mode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success")
    document.title = "TextUtils - Light Mode";

  }
}

  return (
    <>
      {/* <Router> */}
   <Navbar title="TextUtils" Abouttext="About" mode={mode} toggle={toggle}/>
   <Alert alert={alert}/>
    <h1 className='text-center' style={{ color: 'Blue' }}>Convert Text Lowercase to Uppercase</h1>
  <div className="container my-3">
  {/* <Switch>
  <Route path="/about">
            <About />
          </Route>
<Route path="/">
</Route>
</Switch> */}
<Textform showAlert={showAlert} heading="Write Text Here"  mode={mode} />


    {/* <About /> */}
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
