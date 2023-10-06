
import { Route,Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {
  return (

<Switch>
  <Route path='/'><Homepage/></Route>
  
</Switch>



  );
}

export default App;
