import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Info from './routes/info'
import Form from './routes/form/form';
import Stored from './routes/stored/stored';

import Header from './global/header';
import Footer from './global/footer';

const router = (
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/info" element={<Info/>}/>
      <Route path="/stored" element={<Stored/>}/>
    </Routes>
)

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Header/>
        {router}
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
