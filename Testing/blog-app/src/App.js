import logo from './logo.svg';
import './App.css';
import Sum from './Sum';

function App() {
  return (
    <div className="App">
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
        <p>my name is Abhijit Ranjan</p>
        <img style={{ width: '200px' }} alt="kashmir" title='Kashmir ki wadiyan' src="https://i.pinimg.com/originals/c9/1f/b8/c91fb819040d40b27965cad41a059a69.jpg" />

      </header>
      <input type="text" placeholder='Enter Username' readOnly value="Abhijit Ranjan" id="UserId" name="UserName" className='UserClass' />
      <Sum a={5} b={10} />
    </div>
  );
}

export default App;
