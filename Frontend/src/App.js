import { useState } from "react";
import FilterBar from "./Components/FilterBar";
import Header from "./Components/Header";
import Results from "./Components/Results";
import Login from "./Components/Login"
import Authentication from "./Components/Authentication"


function App() {
  const [loginClick,setLoginClick] = useState(false);
  const [currentUser,setCurrentUser] = useState('');
  function handleLoginClick(){
    setLoginClick(!loginClick);
  }

  return (
    <div className="App">
      {loginClick?<Login whenuserisclicking={() => {handleLoginClick()
      }} setUser={()=>{setCurrentUser()}}/>:<><Header click={()=>{handleLoginClick()}}/>
      <FilterBar />
      <Results /></>}
      <Authentication />

    </div>
  );
}

export default App;
