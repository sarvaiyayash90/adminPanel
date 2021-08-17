// import logo from "./logo.svg";
import "./App.css";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

// bootstrap file import 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import all file
import SideBar from "./Component/Element/SiderBar/SideBar";
import RootElement from './Component/Element/Index';

function App() {
  return (
    <div className="App">
        <Router>
            {/* <SideBar/> */}
            <RootElement/>
          <Switch>

          </Switch>
        </Router>
    </div>
  );
}

export default App;
