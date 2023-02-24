import './App.css';
import './css/main.css';
import Header from './components/Header';
import TabMenu from './components/TabMenu';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import resources from './recources/ressurser';



function App() {
  return (
    <div>
      {/* <Header />
      <TabMenu /> */}
      {/* <Main /> */}
      <Routes>
      <Route index element={<Main />} />
      {/* <Route path=':category' element={<Test resources={resources}/>} /> */}
      <Route path='/category/:category' element={<Main resources={resources}/>} />
    </Routes>
    </div>
  );
}

export default App;
