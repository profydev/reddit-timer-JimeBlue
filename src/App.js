import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/how-it-works">
            <h1>How it works</h1>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search/javascript">
            <Search />
          </Route>
          <Route exact path="/terms">
            <h1>Terms and Privacy</h1>
          </Route>
          <Route>404 - Not Found</Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
