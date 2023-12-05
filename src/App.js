import React from 'react';
import './App.css';
import 'bootswatch/dist/materia/bootstrap.min.css';
import Search from './components/Search';
function App() {
  return (
    <>
    <h1 className="pexel">PEXELS IMG</h1>
    <div className="container mt-5">
      <Search />
    </div>
    </>
  );
}
export default App;