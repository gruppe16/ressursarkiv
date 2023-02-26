import './App.css';
import './css/main.css';
<<<<<<< Updated upstream
import Header from './components/Header';
import TabMenu from './components/TabMenu';
=======
import { Route, Routes } from 'react-router-dom';
import resources from './recources/ressurser';
import Layout from './components/Layout';
import Body from './components/Body';


>>>>>>> Stashed changes


function App() {
  return (
    <div>
<<<<<<< Updated upstream
      <Header />
      <TabMenu />
=======
    <Routes>
      <Route element={<Layout/>}>
       <Route index element={<Body resources={resources}/>} />
        <Route path='/category/:category' element={<Body resources={resources}/>} />
      </Route>
    </Routes>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
