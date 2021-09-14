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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search/javascript">
            <Search />
          </Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
