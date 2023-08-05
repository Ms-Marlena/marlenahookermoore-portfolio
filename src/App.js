import React, {useState} from "react";
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState("About");
  function displayPage() {
    if (page === "About") {
    return <About/>
  } 
    if (page === "Portfolio") {
    return <Portfolio/>
  } 
    if (page === "Contact") {
    return <Contact/>
  } 

  }
  const handlePageChange = (page) =>setPage(page)
  return (
    <div>
      <Header handlePageChange={handlePageChange} />
      {/* <nav>
        <button onClick={() => setPage("Portfolio")}>Portfolio</button>
      </nav> */}
      {displayPage()}
    </div>
  );
}

export default App;
