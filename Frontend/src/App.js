import { useState } from "react";
import FilterBar from "./Components/FilterBar";
import Header from "./Components/Header";
import Results from "./Components/Results";
import Login from "./Components/Login"
function App() {
  const [loginClick,setLoginClick] = useState(false);
  function handleLoginClick(){
    setLoginClick(!loginClick);
  }
  return (
    <div className="App">
      {loginClick?<Login />:<><Header click={()=>{handleLoginClick()}}/>
      <FilterBar />
      <Results /></>}
    </div>
  );
}

export default App;
