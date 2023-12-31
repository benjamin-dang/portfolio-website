import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavBar, Banner, Skills, Projects, Contact, SecondBanner} from './Components/index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects/>
      <Contact/>
      <SecondBanner/>
    </div>
  );
}

export default App;
