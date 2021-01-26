// Global Dependencies
import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// import { Provider } from "react-redux";

// Re-Use for possible new logo
// import logo from './logo.svg';
import './App.css';


// Imports from Pages/Components to build pages for Website
import Home from "./pages/Home";
import Dashlogin from './pages/Dashlogin';
import Dashboard from './pages/Dashboard';
// import Admin from "./pages/Admin";
import About from "./pages/About"
import Contact from "./pages/Contact"
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
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        {/* <Provider store={store}> */}
            {/* <Nav /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/admin" component={Admin} /> */}
              <Route path='/Dashboard' component= {Dashlogin}/>
              {<Route path='/Dashboardtest' component= {Dashboard}/>}
              {/* <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
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