import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import resumeData from "./resumeData";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
