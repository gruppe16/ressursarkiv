import './App.css';
import './css/main.css';
import {Route, Routes } from 'react-router-dom';
import resources from './recources/ressurser';
import Layout from './components/Layout';
import Body from './components/Body';




function App() {
  return (
    <div>
    <Routes>
      <Route element={<Layout/>}>
       <Route index element={<Body resources={resources}/>} />
        <Route path='/category/:category' element={<Body resources={resources}/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
