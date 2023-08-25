import'./styles/Colors.scss';
import'./styles/Header.scss';
import './styles/App.scss';
import'./styles/Home.scss';
import './styles/Footer.scss';
import './styles/Contact.scss';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home.jsx';
import Footer from'./components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Service from './components/Service.jsx';
// import './styles/mediaquery.scss'

function App() {
  return (
<Router>
  <Header/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/services' element={<Service/>}/>
  </Routes>
  <Footer title="Footer"/>
</Router>

  );
}

export default App;
