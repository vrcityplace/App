import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



import Principal from './components/principal/Principal';
import Principal1 from './components/principal1/Principal1';
import Tv01 from "./components/tv01/Tv01";
import Tv02 from "./components/tv02/Tv02";
import Tv03 from "./components/tv03/Tv03";
import Tv04 from "./components/tv04/Tv04";
import Tv05 from "./components/tv05/Tv05";
import Tv06 from "./components/tv06/Tv06";
import Tv07 from "./components/tv07/Tv07";
import Tv08 from "./components/tv08/tv08";
import Tv09 from "./components/tv09/tv09";
import Tv10 from "./components/tv10/tv10";
import Tv11 from "./components/tv11/tv11";
import Tv12 from "./components/tv12/tv12";

const App = () => ( 


  <Router>
    <Switch>
     <Route exact path="/" component={Principal} />

    
       <Route exact path="/Principal1" component={Principal1}/>
       <Route exact path="/Tv01" component={Tv01}/>
       <Route exact path="/Tv02" component={Tv02}/>
       <Route exact path="/Tv03" component={Tv03}/>
       <Route exact path="/Tv04" component={Tv04}/>
       <Route exact path="/Tv05" component={Tv05}/>
       <Route exact path="/Tv06" component={Tv06}/>
       <Route exact path="/Tv07" component={Tv07}/>
       <Route exact path="/Tv08" component={Tv08}/>
       <Route exact path="/Tv09" component={Tv09}/>
       <Route exact path="/Tv10" component={Tv10}/>
       <Route exact path="/Tv11" component={Tv11}/>
       <Route exact path="/Tv12" component={Tv12}/>
    </Switch>

    
  </Router>
);
export default App;
