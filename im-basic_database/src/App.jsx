import { useState } from 'react'
import Header from './components/Header.jsx'
import InputData from './components/InputData.jsx'
import RetrieveData from './components/RetrieveData.jsx'

/* -- Main Build ---------------------------------------- */

function App() {

  return (
    <div className="container">
        <Header />
        <InputData />
        <RetrieveData />

      <footer>
        <p style={{textAlign: "center"}}>
          * This only reflects the basic functionality of the system and is not in any way the final product! ^w^ *</p>
      </footer>
    </div>
  );
}

export default App;
