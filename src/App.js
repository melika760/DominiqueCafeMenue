
import { Route,Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
function App() {
  return (

<Switch>
  <Route path='/' exact><Homepage/></Route>
  <Route path="/Menu" exact><Menupage/></Route>
</Switch>



  );
}

export default App;
