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
      <nav className="p-2">
        <button onClick={() => setPage("Portfolio")}>Portfolio</button>
        <button onClick={() => setPage("About")}>About</button>
        <button onClick={() => setPage("Contact")}>Contact</button>
        <button>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1tFLAIPNn0QB5taGs9mnyr0flAkduM6f1/view"
          >
            Resume
          </a>
        </button>
      </nav>
      {displayPage()}
    </div>
  );
}

export default App;
