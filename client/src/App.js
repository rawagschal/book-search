import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
// Create an Apollo Provider to make every request work with the Apollo server.
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';


//establish connection to back-end server's /graphql endpoint at port 3001
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
