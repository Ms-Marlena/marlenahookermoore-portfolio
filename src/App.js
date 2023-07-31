import React, {useState} from "react";
import './App.css';
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
  const [page, setPage] = useState("About");
  function displayPage() {
    if (page === "About") {
    return <About/>
  } 
    if (page === "Portfolio") {
    return <Portfolio/>
  } 

  }
  return (
    <div>
      <nav>
        <button onClick={()=>setPage("Portfolio")}>Portfolio</button>
      </nav>
      {displayPage()}
    </div>

  );
}

export default App;
