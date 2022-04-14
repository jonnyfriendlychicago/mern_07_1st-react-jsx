
import logo from './logo.svg'; // whacked this - well.... only whack it if you want to kill the spinning isotope
import './App.css';
import React from 'react'; // added this line
import Person from './components/Person'; 
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// above works to import the Bstrap components, but OMG so many lines.  do below instead; 
import {Button, Card} from 'react-bootstrap';



function App() {
  return (
    <>
      <header>
        <div className="header_content"> 
            <div className="header_content_vert_left"> 
                <a href="#" className="header_home_link" >
                    <h1 >Sitename</h1>
                    <h2>Feel the love.</h2>
                </a>
            </div>
            <div className="header_content_vert_right" > 
                <h2>firstName LastName</h2>
                <p>(UserID: plcehldr)</p>
                <div className="header_content_horiz_right">
                    <a href="#">My Profile</a>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
      </header>

      <main>
        <>
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
            <Person firstName={ "Bill" } lastName={ "Murphy" }/>
            <Person firstName={ "John" } lastName={ "Connor" }/>
        </div>
        
        {/* below is space for pasting of the bootstrap card content */}
        
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/logo512.png" />
          <Card.Body>
            <Card.Title >Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        
        <div className="row_left">
          <button type="button" class="btn btn-primary">Primary</button>
        </div>

        </>
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