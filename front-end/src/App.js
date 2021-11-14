import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import MapPage from './pages/mappage/mappage.component';
import SignUpPage from './pages/signUp/signUp.page';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/signUp" component={SignUpPage} />
        </Switch>
    </div>
  );
}

export default App;
