// Global Dependencies
import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// import { Provider } from "react-redux";

// Re-Use for possible new logo


// Imports from Pages/Components to build pages for Website
import Home from "./pages/Home";
import Dashlogin from './pages/Dashlogin';
import Dashboard from './pages/Dashboard';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
// To use Redux-Store if we decide
// import store from "./utils/store";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        {/* <Provider store={store}> */}
            {/* <Nav /> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/pages/About' component={About} />
              <Route exact path="/pages/Services" component={Services} />
              <Route exact path="/pages/Contact" component={Contact} />
              <Route exact path='/f9MecEJ2vtKaYM3rEh48' component= {Dashlogin} />
              <Route exact path='/t01ZUNtMmCdpJdMX71hI' component= {Dashboard} />
              {/* <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
            {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;