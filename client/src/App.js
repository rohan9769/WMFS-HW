import "./app.css";
import {BrowserRouter as Router , Route} from 'react-router-dom'
import HomeScreen from "./HomeScreen";
import ProductScreen from "./ProductScreen";


function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/product/:intent/:id' component={ProductScreen}></Route>
      </div>
    </Router>
  );
}

export default App;
