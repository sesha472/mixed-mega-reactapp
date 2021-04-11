import './App.css';
import Persons from './components/Persons/Persons';
import Calculator from './components/calculator/Calculator';
import Movies from './components/moviecard/Movies';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>this is seshah sai kaumar  </h1><br/>
       <h1>this is seshah sai kaumar  </h1>
       <h1>this is seshah sai kaumar  </h1>
       <h1>this is seshah sai kaumar  </h1>
       <h1>this is seshah sai kaumar  </h1>
      
      </header>
      <br/>
      <br/>
      <br/>
      <div>
        <Persons/>
      </div>
      <div>
        <Calculator/>
      </div>
      <div>
        <Movies />
      </div>

      
    </div>
  );
}

export default App;
