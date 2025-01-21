import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) => {
     setAlert({
        message: message,
          type: type
        })
   setTimeout(() => {
    setAlert(null)

    },2000)
  }

  const togglemode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = "#efefef";
      document.title ="Textutils- Enable Light Mode";
      showAlert("Light Mode has been Enable", "success")
      
    } else {
      setMode('dark');
      document.body.style.backgroundColor = "#666";
      document.title ="Textutils- Enable DarkMode";
      showAlert("Dark Mode has been Enable","success")
    }
  }

  return (
    <div>

<Navbar title= "Textutils" abouttext="About Us" mode ={mode} togglemode= {togglemode} />
<Alert alert={alert}  />

<Textform heading="Try Textutils- Word Counter , Character Counter, Remove Extra Spaces" mode ={mode} showAlert={showAlert}/>

</div>
 );
}


export default App;
