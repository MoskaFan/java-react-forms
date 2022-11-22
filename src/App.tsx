import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
      <div>

          <header className="App">
              <div>
                  <h1>Registration</h1>
              </div>
          </header>
          <section>
                  <RegistrationForm />
          </section>

      </div>



  );
}

export default App;
