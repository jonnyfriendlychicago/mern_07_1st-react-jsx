
import logo from './logo.svg'; // whacked this - well.... only whack it if you want to kill the spinning isotope
import './App.css';
import React from 'react'; // added this line
import Person from './components/Person'

function App() {
  return (
    <>
      <header>
        <div className="header_content"> 
            <div className="header_content_vert_left"> 
                <a href="#" class="header_home_link" >
                    <h1>Sitename</h1>
                    <h2>Feel the love.</h2>
                </a>
            </div>
            <div className="header_content_vert_right"> 
                <h2>firstName LastName</h2>
                <h4>(UserID: plcehldr)</h4>
                <div className="header_content_horiz_right">
                    <a href="#">My Profile</a>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
      </header>

      <main>
        <div className="row_left">
            <h1>Hello Dojo!</h1>  
            <h2>Things I need to do:</h2>
            <ul>
              <li>Climb Mt Everest</li>
              <li>Learn React</li>
              <li>Run a marathon</li>
              <li>Feed the dogs</li>
              <li>Get rid of .App slector in App.css</li>
            </ul>
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
        
        
        </div>
      </main>

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      </header>
    </>
    );
}

export default App;