import { BrowserRouter,Routes,Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home'
import Productpage from './pages/Productpage'
import Footer from './components/Footer'
import Header from "./components/Header";
import Contact from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/product/:id' element={<Productpage />}/>
        </Routes>
        <Sidebar/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
