import { Search } from './Search';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { Home } from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div>ProHooks</div>
          <ul className="menu"><li><Link to="/react-prohooks">Home</Link></li><li><Link to="/search">Search</Link></li></ul>
        </header>
        <Security issuer='https://dev-28362205.okta.com/oauth2/default'
                  clientId='0oa104pr7wOvr2cbr5d7'
                  redirectUri='http://localhost:3000/callback'
                  pkce={true}>
          <Route path='/react-prohooks' exact={true} component={Home}/>
        <SecureRoute path='/search' exact={true} component={Search}/>
          <Route path='/callback' component={LoginCallback}/>
        </Security>
      </Router>
    </div>
  );
}

export default App;