import { useState } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, Link, Outlet } from 'react-router-dom';

function Home() {
  return <div>Hello from home</div>
}


// form, 3 fields, select type of feedback, 2 input, title, complete. 
function About() {
  const [typeOfFeedback, setTypeOfFeedback] = useState('positive');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeOfFeedback, title, description);
  }

  return <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div>
      <h3>Feedback Form:</h3>
      <form onSubmit={handleSubmit}>
        <div>
        <div><span>Type of feedback</span></div>
        <div>
          <select value={typeOfFeedback} onChange={(e) => {
            setTypeOfFeedback(e.target.value)
          }}>
            <option value='positive'>Positive</option>
            <option value={'negative'}>Negative</option>
          </select>
          </div>
          </div>
          <div>
        <div><span>Title</span></div>
        <div>
          <input placeholder='Title of the feedback' value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          </div>
          <div>
        <div><span>Description</span></div>
        <div>
          <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>    
        </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>    
  </div>
}

function Navbar() {
  return <div style={{display: 'flex', gap: 32, background: '#e3e3e3', width: '100%', padding: '16px 32px'}}>
    <Link to={'/home'} >Home</Link>
    <Link to={'/about'} >About</Link>
  </div>
}

function Layout() {
  return <>
    <Navbar />
    <Outlet />
  </>
}

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
}

export default App;
